/**
 * セレクターにマッチする最初の要素を返す
 *
 * @param selector セレクター文字列
 * @param ctx コンテキスト要素
 * @returns `ctx` から `selector` にマッチする最初の要素を返す
 */
export function $<K extends keyof HTMLElementTagNameMap>(
  selector: K,
  ctx?: ParentNode
): HTMLElementTagNameMap[K] | null

export function $<K extends keyof SVGElementTagNameMap>(
  selector: K,
  ctx?: ParentNode
): SVGElementTagNameMap[K] | null

export function $<E extends Element = Element>(
  selector: string,
  ctx?: ParentNode
): E | null

export function $(
  selector: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | string,
  ctx: ParentNode = document
) {
  return ctx.querySelector(selector)
}
