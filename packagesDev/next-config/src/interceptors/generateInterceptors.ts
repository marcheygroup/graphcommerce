import { ResolveDependency, ResolveDependencyReturn } from '../utils/resolveDependency'

export type PluginConfig = {
  component: string
  exported: string
  plugin: string
}

type Plugin = ResolveDependencyReturn & {
  components: Record<string, PluginConfig[]>
  target: string
  template?: string
}

export type MaterializedPlugin = Plugin & { template: string }

export function generateInterceptor(plugin: Plugin): MaterializedPlugin {
  const { fromModule, components } = plugin

  const pluginImports = Object.entries(components)
    .map(([_, plugins]) => {
      const duplicateImports = new Set()
      return plugins
        .sort((a, b) => a.plugin.localeCompare(b.plugin))
        .map(
          (p) =>
            `import { Plugin as ${p.plugin.split('/')[p.plugin.split('/').length - 1]} } from '${
              p.plugin
            }'`,
        )
        .filter((importStr) => {
          if (duplicateImports.has(importStr)) {
            return false
          }
          duplicateImports.add(importStr)
          return true
        })
        .join('\n')
    })
    .join('\n')

  const importInjectables = `import { ${Object.entries(components)
    .map(([component]) => `${component} as ${component}Base`)
    .join(', ')} } from '${fromModule}'`

  const pluginExports = Object.entries(components)
    .map(([component, plugins]) => {
      const duplicateImports = new Set()

      let carry = `${component}Base`
      const pluginStr = plugins
        .reverse()
        .map((p) => p.plugin.split('/')[p.plugin.split('/').length - 1])
        .filter((importStr) => {
          if (duplicateImports.has(importStr)) {
            return false
          }
          duplicateImports.add(importStr)
          return true
        })
        .map((name) => {
          const result = `const ${name}Interceptor = (props: ${component}BaseProps) => (
  <${name} {...props} Prev={${carry}} />
)`
          carry = `${name}Interceptor`
          return result
        })
        .join('\n')

      return `/**
 * Generated an interceptor for \`${component}\` with these plugins:
 * 
${plugins.map((p) => ` * - \`${p.plugin}\``).join('\n')}
 */
type ${component}BaseProps = React.ComponentProps<typeof ${component}Base>

${pluginStr}
export const ${component} = ${carry}`
    })
    .join('\n')

  const componentExports = `export * from '${fromModule}'`

  const template = `/* This file is automatically generated. */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/export */

${pluginImports}
${importInjectables}

${componentExports}

${pluginExports}
`

  return { ...plugin, template }
}

export type GenerateInterceptorsReturn = Record<string, MaterializedPlugin>

export function generateInterceptors(
  plugins: PluginConfig[],
  resolve: ResolveDependency,
): GenerateInterceptorsReturn {
  // todo: Do not use reduce as we're passing the accumulator to the next iteration
  const byExportedComponent = plugins.reduce((acc, plug) => {
    const { exported } = plug
    const resolved = resolve(exported)

    if (!acc[resolved.fromRoot])
      acc[resolved.fromRoot] = {
        ...resolved,
        target: `${resolved.fromRoot}.interceptor`,
        components: {},
      } as Plugin

    if (!acc[resolved.fromRoot].components[plug.component])
      acc[resolved.fromRoot].components[plug.component] = []

    acc[resolved.fromRoot].components[plug.component].push(plug)
    return acc
  }, {} as Record<string, Plugin>)

  return Object.fromEntries(
    Object.entries(byExportedComponent).map(([target, plg]) => [target, generateInterceptor(plg)]),
  )
}
