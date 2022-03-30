import { colors, dateFormat } from './index'

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
  ](colors.black(`[${input.toUpperCase()}-${dateFormat(new Date(), 'kk:mm:s')}]`))
