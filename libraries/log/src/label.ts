import { colors, dateFormat } from './index'

type Label = 'info' | 'success' | 'error' | 'warn'

/**
 * Make label for log type
 * @public
 * @param input - Label input string
 * @param type - Label for corresponding type
 * @returns
 */
export const makeLabel = (input: string, type: Label) =>
  colors[
    type === 'info'
      ? 'bgBlue'
      : type === 'warn'
      ? 'bgYellow'
      : type === 'error'
      ? 'bgRed'
      : 'bgGreen'
  ](
    colors.black(
      `[${input.toUpperCase()}-${dateFormat(new Date(), 'kk:mm:s')}]`
    )
  )
