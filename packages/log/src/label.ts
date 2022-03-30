import { colors, format } from '@foreman/externals'

type Label = 'info' | 'success' | 'error' | 'warn'

export const makeLabel = (input: string, type: Label) =>
  colors[
    type === 'info'
      ? 'bgBlue'
      : type === 'warn'
      ? 'bgYellow'
      : type === 'error'
      ? 'bgRed'
      : 'bgGreen'
  ](colors.black(`[${input.toUpperCase()}-${format(new Date(), 'kk:mm:s')}]`))
