/**
 * セレクターにマッチする全ての要素を返す
 *
 * @param selector セレクター文字列
 * @param ctx コンテキスト要素
 * @returns `ctx` から `selector` にマッチする全ての要素を返す
 */
export function $$<E extends Element = Element>(
  selector: string,
  ctx: Document | Element = document
): NodeListOf<E> {
  return ctx.querySelectorAll<E>(selector)
}
