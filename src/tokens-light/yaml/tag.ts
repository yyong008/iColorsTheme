import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { yamlTypes } from '../constants.js'

const vueSyntaxScopes: RawAtomTheme[] = [
  {
    name: 'yaml::tagProps',
    scope: [],
    rawScope: ['entity.name.tag', 'punctuation.separator.key-value.mappin'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: 'yaml::unquoted.plain.out',
    scope: [],
    rawScope: ['string.unquoted.plain.out'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: 'yaml::markdown',
    scope: [],
    rawScope: ['entity.other.document.begin', 'entity.other.document.end'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(vueSyntaxScopes, yamlTypes)
