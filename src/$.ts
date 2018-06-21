/**
 * セレクターにマッチする最初の要素を返す
 *
 * @param selector セレクター文字列
 * @param ctx コンテキスト要素
 * @returns `ctx` から `selector` にマッチする最初の要素を返す
 */
export function $<E extends Element = Element>(
  selector: string,
  ctx: Document | Element = document
): E | null {
  return ctx.querySelector(selector)
}
