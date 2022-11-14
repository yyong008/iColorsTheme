import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const functionScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::functionKeyword',
    scope: [],
    rawScope: ['storage.type.function'],
    foreground: colors.purpleColors400,
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::functionName',
    scope: [],
    rawScope: ['entity.name.function'],
    foreground: colors.cyanColors700,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::functionParams',
    scope: [],
    rawScope: ['variable.parameter'],
    foreground: colors.grayColors400,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::arrowFunction',
    scope: [],
    rawScope: ['storage.type.function.arrow'],
    foreground: colors.cyanColors700,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::functionCall',
    scope: [],
    rawScope: ['meta.function-call'],
    foreground: colors.cyanColors700,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(functionScopes, jsTypes)
