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
  /* Generate color shades array of color input and index base color in array */
  static generate(color: string): { baseColorIndex: number; colors: string[] } {
    const { baseColorIndex, colorsMap, colorBaseObject } = generateColorsMap(color)

    const colors = colorsMap.map((c, i) => {
      if (i === baseColorIndex) return colorBaseObject.hex()
      return c.hex()
    })

    return { baseColorIndex, colors }
  }
}
