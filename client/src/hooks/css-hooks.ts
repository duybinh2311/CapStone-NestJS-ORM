import { createHooks, recommended } from '@css-hooks/react'

export const [hooks, useCss] = createHooks({
  ...recommended,
  before: ':before',
  after: ':after',
  dataActive: '&[data-active]',
})
