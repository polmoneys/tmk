import Group, { type GroupProps } from './Group'

export const Row = (props: GroupProps): JSX.Element => <Group {...props} />

export const Col = (props: GroupProps): JSX.Element => {
  const { options, ...rest } = props
  return (
    <Group
      options={{ direction: 'column', ...(options !== undefined && options) }}
      {...rest}
    />
  )
}

export const ColToRow = (props: GroupProps): JSX.Element => {
  return <Group {...props} data-tmk="" data-col-to-row="" />
}
