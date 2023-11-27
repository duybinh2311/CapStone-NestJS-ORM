import chroma from 'chroma-js'

const LIGHTNESS_MAP = [0.96, 0.907, 0.805, 0.697, 0.605, 0.547, 0.518, 0.445, 0.395, 0.34]
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32]

function getClosestLightness(colorObject: chroma.Color) {
  const lightnessGoal = colorObject.get('hsl.l')
  return LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev
  )
}

function generateColorsMap(color: string) {
  const colorBaseObject = chroma(color)
  const closestLightness = getClosestLightness(colorBaseObject)
  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness)

  const colorsMap = LIGHTNESS_MAP.map((lightNess) => colorBaseObject.set('hsl.l', lightNess))
    .map((c) => chroma(c))
    .map((c, i) => {
      const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex]
      return saturationDelta >= 0 ? c.saturate(saturationDelta) : c.desaturate(saturationDelta * -1)
    })

  return { baseColorIndex, colorsMap, colorBaseObject }
}

export class ColorUtils {
  /**
   * The function generates an array of colors based on a given base color.
   * @param {string} color - The `color` parameter is a string that represents a color. It can be any
   * valid color value, such as a hexadecimal color code (#RRGGBB), a named color (e.g., "red", "blue"),
   * or an RGB/RGBA color value (e.g., "rgb(
   * @returns an object with two properties: "baseColorIndex" and "colors".
   */
  static generate(color: string): { baseColorIndex: number; colors: string[] } {
    const { baseColorIndex, colorsMap, colorBaseObject } = generateColorsMap(color)

    const colors = colorsMap.map((c, i) => {
      if (i === baseColorIndex) return colorBaseObject.hex()
      return c.hex()
    })

    return { baseColorIndex, colors }
  }

  /**
   * The function `linearGradient` returns a string representing a linear gradient CSS property with the
   * specified degree and colors.
   * @param {number} deg - The "deg" parameter represents the angle at which the gradient is applied. It
   * specifies the direction of the gradient, with 0deg representing a horizontal gradient from left to
   * right, and 90deg representing a vertical gradient from top to bottom.
   * @param {string[]} colors - An array of strings representing the colors to be used in the linear
   * gradient. Each string should be a valid CSS color value.
   * @returns A string representing a CSS linear gradient with the specified degree and colors.
   */
  static linearGradient(deg: number, colors: string[]): string {
    return `linear-gradient(${deg}deg, ${colors.join(', ')})`
  }
}
