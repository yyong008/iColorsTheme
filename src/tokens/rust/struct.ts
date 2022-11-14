import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const structScopes: RawAtomTheme[] = [
  {
    name: 'rust::{str, String}',
    scope: [],
    rawScope: [
      // impl keyword
      'keyword.other'
    ],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(structScopes, rustTypes)
