import {
  type AriaAttributes,
  useMemo,
  type ElementType,
  type CSSProperties,
  type ReactNode,
  type KeyboardEvent,
} from 'react'

export type Dictionary<T = string | number> = Record<string, T>
export interface Dictionaries extends Array<Dictionary> {}

const HTMLtag = [
  'section',
  'article',
  'nav',
  'aside',
  'header',
  'footer',
  'label',
  'fieldset',
  'p',
  'h1',
  'h2',
  'h3',
  'ul',
  'ol',
  'li',
  'div',
  'form',
] as const
type HTMLTags = (typeof HTMLtag)[number]

const VariantOptions = ['flex', 'grid'] as const
type Variants = (typeof VariantOptions)[number]

export interface GroupProps extends AriaAttributes {
  children: ReactNode
  className?: string
  as: HTMLTags
  variant?: Variants
  gap?: string
  size?: string
  id?: string
  htmlFor?: string
  onSubmit?: (event: any) => void
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void
  options?: {
    stretch?: boolean
    alignItems?: string
    justifyContent?: string
    wrap?: string
    direction?: string
    placeItems?: string
    DANGEROUS?: Dictionary
  }
  role?: string
  hidden?: boolean
  ratio?: 'landscape' | 'portrait' | 'auto' | 'square' | 'ultrawide'
}

const Group = (props: GroupProps): JSX.Element => {
  const {
    children,
    as,
    gap = '0.3em',
    size = '',
    variant = 'flex',
    options,
    ratio,
    ...rest
  } = props

  const isFlex = variant === 'flex'

  const stylesConfig = useMemo(() => {
    if (isFlex) {
      return {
        display: 'flex',
        gap,
        ...(options?.direction !== undefined && {
          flexDirection: options?.direction,
        }),
        ...(options?.stretch !== undefined && {
          width: '100%',
          height: '100%',
        }),
        ...(options?.alignItems !== undefined && {
          alignItems: options.alignItems,
        }),
        ...(options?.justifyContent !== undefined && {
          justifyContent: options.justifyContent,
        }),

        ...(options?.wrap !== undefined && { flexWrap: options.wrap }),
        ...(size !== '' && { flex: `1 0 ${size}` }),
      }
    }
    return {
      display: 'grid',
      gap,
      ...(size !== '' && {
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`,
      }),
      ...(options?.stretch !== undefined && { width: '100%' }),
    }
  }, [isFlex]) as CSSProperties
  const Tag = as ?? ('div' as ElementType)

  return (
    <Tag
      {...rest}
      style={{
        ...(options?.DANGEROUS !== undefined && {
          ...options.DANGEROUS,
        }),
        ...stylesConfig,
      }}
      {...(ratio !== undefined && { 'data-ratio': ratio })}
      data-tmk=""
    >
      {children}
    </Tag>
  )
}

export default Group
