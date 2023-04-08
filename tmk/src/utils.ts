export const classes = (...params: unknown[]): string =>
  params.filter(Boolean).join(' ')
