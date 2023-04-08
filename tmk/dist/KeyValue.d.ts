interface DatumEntry<T> {
    title: string;
    content: string | string[] | T[];
}
export type Datum<T> = Array<DatumEntry<T>>;
interface KeyValueProps<T> {
    label?: string;
    labelledby?: string;
    datum: Datum<T>;
    className?: string;
    itemClassName?: string;
    onRender?: (content: string | T) => React.ReactNode;
}
declare function KeyValue<T>(props: KeyValueProps<T>): JSX.Element;
export default KeyValue;
