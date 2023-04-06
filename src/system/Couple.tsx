import Group, { type GroupProps } from './Group'

const Couple = (props: GroupProps): JSX.Element => {
  return (
    <Group
      {...props}
      options={{ wrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
    />
  )
}

export default Couple
