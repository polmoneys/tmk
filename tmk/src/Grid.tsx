import Group, { type GroupProps } from './Group'

const Grid = (props: GroupProps): JSX.Element => {
  const { variant = 'grid', size = '220px', ...rest } = props
  return <Group size={size} {...rest} variant={variant} />
}

export default Grid
