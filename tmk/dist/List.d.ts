import { type ComponentProps, type ReactNode } from 'react';
interface ListProps extends ComponentProps<'ul'> {
    children: string | ReactNode;
    label: string;
    zebra?: boolean;
}
interface ListItemProps extends ComponentProps<'li'> {
    children: string | ReactNode;
    description?: string;
    start?: ReactNode;
    end?: ReactNode;
}
declare const List: {
    (props: ListProps): JSX.Element;
    Item(props: ListItemProps): JSX.Element;
    Divider(props: Pick<ListItemProps, 'children'>): JSX.Element;
};
export default List;
