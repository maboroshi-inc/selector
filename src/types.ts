/**
 * 適合要素型
 */
export type MatchedElement<
  T extends Selector,
  E extends Element
> = T extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[T]
  : T extends keyof SVGElementTagNameMap
  ? SVGElementTagNameMap[T]
  : E

/**
 * セレクター型
 */
export type Selector =
  | keyof HTMLElementTagNameMap
  | keyof SVGElementTagNameMap
  | string
