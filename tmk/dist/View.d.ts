import { type ReactNode } from 'react';
interface ViewProps {
    children: ReactNode;
    className?: string;
}
declare const View: {
    ({ children, className }: ViewProps): JSX.Element;
    Full({ children, className }: ViewProps): JSX.Element;
    Feature({ children, className }: ViewProps): JSX.Element;
    Popout({ children, className }: ViewProps): JSX.Element;
};
export default View;
