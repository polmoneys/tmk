import { type AriaAttributes, type ReactNode, type KeyboardEvent } from 'react';
export type Dictionary<T = string | number> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {
}
declare const HTMLtag: readonly ["section", "article", "nav", "aside", "header", "footer", "label", "fieldset", "p", "h1", "h2", "h3", "ul", "ol", "li", "div", "form"];
type HTMLTags = (typeof HTMLtag)[number];
declare const VariantOptions: readonly ["flex", "grid"];
type Variants = (typeof VariantOptions)[number];
export interface GroupProps extends AriaAttributes {
    children: ReactNode;
    className?: string;
    as: HTMLTags;
    variant?: Variants;
    gap?: string;
    size?: string;
    id?: string;
    htmlFor?: string;
    onSubmit?: (event: any) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
    options?: {
        stretch?: boolean;
        alignItems?: string;
        justifyContent?: string;
        wrap?: string;
        direction?: string;
        placeItems?: string;
        DANGEROUS?: Dictionary;
    };
    role?: string;
    hidden?: boolean;
    ratio?: 'landscape' | 'portrait' | 'auto' | 'square' | 'ultrawide';
}
declare const Group: (props: GroupProps) => JSX.Element;
export default Group;
