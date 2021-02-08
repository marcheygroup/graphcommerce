import { BaseTextFieldProps, FormHelperText } from '@material-ui/core'
import {
  Controller,
  FieldError,
  FieldErrors,
  UseControllerOptions,
} from '@reachdigital/next-ui/Form/useFormGqlMutation'
import RenderType from '@reachdigital/next-ui/RenderType'
import ToggleButton from '@reachdigital/next-ui/ToggleButton'
import ToggleButtonGroup from '@reachdigital/next-ui/ToggleButtonGroup'
import React from 'react'
import { Selected, useConfigurableContext } from '../ConfigurableContext'
import { SwatchTypeRenderer } from '../Swatches'
import ColorSwatchData from '../Swatches/ColorSwatchData'
import ImageSwatchData from '../Swatches/ImageSwatchData'
import TextSwatchData from '../Swatches/TextSwatchData'

type ConfigurableOptionsProps = {
  sku: string
  errors?: FieldErrors
} & UseControllerOptions &
  Pick<BaseTextFieldProps, 'FormHelperTextProps' | 'helperText'>

const renderer: SwatchTypeRenderer = { TextSwatchData, ImageSwatchData, ColorSwatchData }

export default function ConfigurableOptionsInput(props: ConfigurableOptionsProps) {
  const { sku, FormHelperTextProps, name, defaultValue, errors, ...controlProps } = props
  const { options, selection, select, cheapest } = useConfigurableContext(sku)

  return (
    <>
      {options?.map((option) => {
        if (!option?.id || !option.attribute_code) return null
        const { attribute_code } = option
        const error = errors?.[attribute_code]

        return (
          <Controller
            key={option.id}
            defaultValue={selection[attribute_code] ?? ''}
            name={`${name}[${attribute_code}]`}
            {...controlProps}
            render={({ onChange, value, onBlur, ref, name: inputName }) => (
              <>
                {option?.label}
                <ToggleButtonGroup
                  defaultValue={selection[attribute_code] ?? ''}
                  required
                  exclusive
                  minWidth={100}
                  onChange={(_, val: string | number) => {
                    onChange(val)
                    select((prev) => ({ ...prev, [attribute_code]: val } as Selected))
                  }}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                >
                  {option?.values?.map((val) => {
                    if (!val?.swatch_data || !val.value_index || !option.attribute_code) return null
                    return (
                      <ToggleButton
                        key={val.value_index}
                        value={val.value_index ?? ''}
                        name={inputName}
                      >
                        <RenderType
                          renderer={renderer}
                          {...val}
                          {...val.swatch_data}
                          size='large'
                        />
                      </ToggleButton>
                    )
                  })}
                </ToggleButtonGroup>
                {error && <FormHelperText error>Required</FormHelperText>}
              </>
            )}
          />
        )
      })}
    </>
  )
}
