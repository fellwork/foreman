import { merge } from '@/shared';
import base from '@/configs/base/config.json';
import { overrides } from './overrides';

export default Object.freeze(merge(base, { overrides }));