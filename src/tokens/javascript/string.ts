import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const stringScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::string',
    scope: [],
    rawScope: ['string.quoted.single', 'string.quoted.double'],
    foreground: colors.grayColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(stringScopes, jsTypes)
