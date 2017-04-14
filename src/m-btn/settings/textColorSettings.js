import palette from '../config/colorPalette'
import defaultTextColorName from '../config/textConfig'

const defaultTextColor =
  defaultTextColorName
  ? palette[defaultTextColor]
  : palette.grey

export default defaultTextColor
