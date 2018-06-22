/**
 * セレクターにマッチする全ての要素を返す
 *
 * @param selector セレクター文字列
 * @param ctx コンテキスト要素
 * @returns `ctx` から `selector` にマッチする全ての要素を返す
 */
export function $$<K extends keyof HTMLElementTagNameMap>(
  selector: K,
  ctx?: ParentNode
): NodeListOf<HTMLElementTagNameMap[K]>

export function $$<K extends keyof SVGElementTagNameMap>(
  selector: K,
  ctx?: ParentNode
): NodeListOf<SVGElementTagNameMap[K]>

export function $$<E extends Element = Element>(
  selector: string,
  ctx?: ParentNode
): NodeListOf<E>

export function $$(
  selector: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | string,
  ctx: ParentNode = document
) {
  return ctx.querySelectorAll(selector)
}
