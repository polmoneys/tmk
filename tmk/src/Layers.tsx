import { type ElementType, type ReactNode } from 'react'
import { classes } from './utils'

const HTMLtag = [
  'section',
  'article',
  'nav',
  'aside',
  'header',
  'footer',
  'ul',
  'li',
  'div',
  'form',
] as const
type HTMLTags = (typeof HTMLtag)[number]

interface LayerProps {
  align?: 'start' | 'end' | 'center'
  className?: string
  children: ReactNode
  as: HTMLTags
  stretch?: boolean
}

function Layers(props: LayerProps): JSX.Element {
  const { align = 'center', as, children, className } = props

  const Tag = as ?? ('div' as ElementType)

  return (
    <Tag
      className={classes(className)}
      data-tmk=""
      data-layers=""
      data-place-items={align}
      style={{
        display: 'grid',
        gridTemplateAreas: 'stack',
      }}
    >
      {children}
    </Tag>
  )
}

export default Layers
