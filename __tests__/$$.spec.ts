import { $, $$ } from '../src'

describe('$$()', () => {
  it('`document`から全ての`p`を返す', () => {
    document.body.innerHTML = `<div><p>hoge</p><p>fuga</p><p>piyo</p></div>`

    expect(Array.from($$('p'))).toMatchSnapshot()
  })

  it('`#context`から全ての`span`を返す', () => {
    document.body.innerHTML = `<div><p><span>hoge</span><span>hoge</span><span>hoge</span></p><p id="context"><span>fuga</span><span>fuga</span><span>fuga</span></p><p><span>piyo</span><span>piyo</span><span>piyo</span></p></div>`

    const contextEl = $<HTMLParagraphElement>('#context')
    expect(contextEl && Array.from($$('span', contextEl))).toMatchSnapshot()
  })
})
