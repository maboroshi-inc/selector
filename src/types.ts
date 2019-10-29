/**
 * セレクター型
 */
export type Selector =
  | keyof HTMLElementTagNameMap
  | keyof SVGElementTagNameMap
  | string
