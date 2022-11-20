import type WelcomePage from '../types/WelcomePage.js'
import type { WorkThrough } from '../types/WelcomePage.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const welcomePage = (): Partial<WelcomePage> => ({
  ['welcomePage.background']: colors.grayColors1100,
  ['welcomePage.progress.background']: mapColorsWithRuntimeWeight('900'),
  ['welcomePage.progress.foreground']: mapColorsWithRuntimeWeight('300'),
  ['welcomePage.tileBackground']: colors.grayColors1000,
  ['welcomePage.tileHoverBackground']: colors.grayColors1300,
  ['welcomePage.tileShadow']: ''
})

const workThrough = (): Partial<WorkThrough> => ({
  ['walkThrough.embeddedEditorBackground']: ''
})

export default {
  welcomePage,
  workThrough
}
