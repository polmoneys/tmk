import { type ReactNode } from 'react'

interface ViewProps {
  children: ReactNode
  className?: string
}

const View = ({ children, className }: ViewProps): JSX.Element => (
  <section
    data-tmk=""
    data-view=""
    {...(className !== undefined && { className })}
  >
    {children}
  </section>
)

View.Full = ({ children, className }: ViewProps) => (
  <div
    data-tmk=""
    data-view="full"
    {...(className !== undefined && { className })}
  >
    {children}
  </div>
)

View.Feature = ({ children, className }: ViewProps) => (
  <div
    data-tmk=""
    data-view="feature"
    {...(className !== undefined && { className })}
  >
    {children}
  </div>
)

View.Popout = ({ children, className }: ViewProps) => (
  <div
    data-tmk=""
    data-view="popout"
    {...(className !== undefined && { className })}
  >
    {children}
  </div>
)

export default View
