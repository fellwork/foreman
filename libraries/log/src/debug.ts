import { dateFormat } from './index'

export const debug = (input: string) => {
  console.log(`[DEBUG-${dateFormat(new Date(), 'kk:mm:s')}]`, input)
}
