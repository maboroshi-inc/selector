import { MatchedElement, Selector } from './types'

/**
 * セレクターにマッチする最初の要素を返す
 *
 * @param selector セレクター文字列
 * @param ctx コンテキスト要素
 * @returns `ctx` から `selector` にマッチする最初の要素を返す
 */
export function $<E extends Element = Element, T extends Selector = string>(
  selector: T,
  ctx: ParentNode = document
): MatchedElement<T, E> | null {
  return ctx.querySelector(selector)
}
