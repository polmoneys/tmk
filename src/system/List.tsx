import { type ComponentProps, type ReactNode } from 'react'
import { classes } from './utils'

/*

   <List label="people">
      <List.Divider>
        <p>5 Favorites characters</p>
      </List.Divider>
      {people?.list.slice(0, 5).map((people, pos: number) => (
        <List.Item
          start={
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          }
          end={<p>{people?.homeWorld}</p>}
          key={people.id}
        >
          <b>{people.name}</b>
          <p>Borned around {people?.birthYear}</p>
        </List.Item>
      ))}
    </List>
    
*/
interface ListProps extends ComponentProps<'ul'> {
  children: string | ReactNode
  label: string
  zebra?: boolean
}

interface ListItemProps extends ComponentProps<'li'> {
  children: string | ReactNode
  description?: string
  start?: ReactNode
  end?: ReactNode
}

const List = (props: ListProps): JSX.Element => {
  const { children, className, label, ...rest } = props

  return (
    <ul
      role="list"
      data-tmk=""
      data-list=""
      className={classes(className)}
      aria-label={label}
      {...rest}
    >
      {children}
    </ul>
  )
}

List.Item = (props: ListItemProps): JSX.Element => {
  const { className, children, description, start, end } = props
  const slots = `${start !== undefined ? '-start' : ''}${
    end !== undefined ? '-end' : ''
  }`

  const itemSlots = `item${
    start !== undefined || end !== undefined ? slots : ''
  }`

  return (
    <li
      data-tmk=""
      data-list="item"
      data-list-item={itemSlots}
      className={classes(className)}
    >
      {start !== undefined && <div data-list="start">{start}</div>}
      <div>
        {children}
        {description !== undefined && <div>{description}</div>}
      </div>
      {end !== undefined && <div data-list="end">{end}</div>}
    </li>
  )
}

List.Divider = (props: Pick<ListItemProps, 'children'>): JSX.Element => {
  return (
    <li data-tmk="" data-list="item">
      <div data-list="divider">
        {props.children !== undefined && props.children}
      </div>
    </li>
  )
}

export default List
