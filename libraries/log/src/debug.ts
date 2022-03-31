import { default as format } from 'date-fns/format/index'

export const debug = (input: string) => {
  console.log(`[DEBUG-${format(new Date(), 'kk:mm:s')}]`, input)
}
