interface DatumEntry<T> {
  title: string
  content: string | string[] | T[]
}

export type Datum<T> = Array<DatumEntry<T>>

interface KeyValueProps<T> {
  label?: string
  // 	<h2 id="actions">Actions</h2>
  labelledby?: string
  datum: Datum<T>
  className?: string
  itemClassName?: string
  onRender?: (content: string | T) => React.ReactNode
}

function KeyValue<T>(props: KeyValueProps<T>): JSX.Element {
  const { datum, label, labelledby, className, itemClassName, onRender } = props

  const children = (
    content: string | string[] | T[],
  ): JSX.Element | JSX.Element[] | null => {
    if (typeof content === 'string') {
      return <dd>{content}</dd>
    }

    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <dd key={index}>
          {onRender != null ? onRender(item) : JSON.stringify(item)}
        </dd>
      ))
    }

    return null
  }

  return (
    <dl
      {...(className !== undefined && { className })}
      {...(label !== undefined && { 'aria-label': label })}
      {...(labelledby !== undefined && { 'aria-labelledby': labelledby })}
      data-tmk=""
    >
      {datum.map(({ title, content }, index) => (
        <div
          key={index}
          {...(itemClassName !== undefined && { className: itemClassName })}
        >
          <dt>{title}</dt>
          {children(content)}
        </div>
      ))}
    </dl>
  )
}

export default KeyValue
