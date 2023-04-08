import { type ReactNode } from 'react';
declare const HTMLtag: readonly ["section", "article", "nav", "aside", "header", "footer", "ul", "li", "div", "form"];
type HTMLTags = (typeof HTMLtag)[number];
interface LayerProps {
    align?: 'start' | 'end' | 'center';
    className?: string;
    children: ReactNode;
    as: HTMLTags;
    stretch?: boolean;
}
declare function Layers(props: LayerProps): JSX.Element;
export default Layers;
