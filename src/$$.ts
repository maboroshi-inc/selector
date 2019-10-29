import { MatchedElement, Selector } from './types'

/**
 * セレクターにマッチする全ての要素を返す
 *
 * @param selector セレクター文字列
 * @param ctx コンテキスト要素
 * @returns `ctx` から `selector` にマッチする全ての要素を返す
 */
export function $$<E extends Element = Element, T extends Selector = string>(
  selector: T,
  ctx: ParentNode = document
): NodeListOf<MatchedElement<T, E>> {
  return ctx.querySelectorAll(selector)
}
