import { ContainerProps, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Row from '..'
import { UseStyles } from '../../Styles'
import { responsiveVal } from '../../Styles/responsiveVal'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    wrapper: {
      display: 'grid',
      background: theme.palette.background.paper,
      justifyItems: 'center',
      columnGap: `${theme.spacings.lg}`,
      paddingTop: theme.spacings.lg,
      paddingBottom: theme.spacings.lg,
      justifySelf: 'start',
      borderRadius: responsiveVal(theme.shape.borderRadius * 2, theme.shape.borderRadius * 3),
      [theme.breakpoints.up('md')]: {
        padding: 0,
        background: 'none',
        justifySelf: 'center',
        gridTemplateColumns: '1fr 1fr',
        columnGap: `${theme.spacings.lg}`,
      },
    },
    asset: {
      width: responsiveVal(200, 900),
      height: 'auto',
      marginBottom: theme.spacings.md,
      '& img': {
        width: responsiveVal(200, 900),
        height: 'auto',
        objectFit: 'cover',
        borderRadius: responsiveVal(theme.shape.borderRadius * 2, theme.shape.borderRadius * 3),
      },
      [theme.breakpoints.up('lg')]: {
        width: responsiveVal(250, 900),
        height: 'auto',
        '& img': {
          width: responsiveVal(250, 900),
          height: 'auto',
          objectFit: 'cover',
        },
      },
      [theme.breakpoints.between('md', 'xl')]: {
        width: '100%',
        '& img': {
          width: '100%',
        },
      },
    },
    copy: {
      color: theme.palette.text.primary,
      maxWidth: '70%',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      '& > *': {
        maxWidth: 'max-content',
      },
    },
    topic: {
      ...theme.typography.overline,
    },
    links: {
      ...theme.typography.body2,
      [theme.breakpoints.up('md')]: {
        ...theme.typography.h4,
      },
      '& > *': {
        color: theme.palette.text.primary,
      },
    },
    textContainer: {
      maxWidth: '70%',
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%',
      },
    },
  }),
  { name: 'SpecialBanner' },
)

export type SpecialBannerProps = UseStyles<typeof useStyles> &
  ContainerProps & {
    asset?: React.ReactNode
    pageLinks?: React.ReactNode
    topic: React.ReactNode
    children: React.ReactNode
  }

export default function SpecialBanner(props: SpecialBannerProps) {
  const { asset, topic, pageLinks, children, ...containerProps } = props
  const { root, ...classes } = useStyles(props)

  return (
    <Row maxWidth={false} {...containerProps} classes={{ root }}>
      <Row maxWidth={false} className={classes.wrapper} disableGutters>
        <div className={classes.asset}>{asset}</div>
        <div className={classes.copy}>
          {topic && (
            <Typography variant='body2' className={classes.topic}>
              {topic}
            </Typography>
          )}
          <div className={classes.textContainer}>{children}</div>
          <div className={classes.links}>{pageLinks}</div>
        </div>
      </Row>
    </Row>
  )
}
