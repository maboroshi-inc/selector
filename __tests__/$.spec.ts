import { $ } from '../src'

describe('$()', () => {
  it('`document`から最初の`p`を返す', () => {
    document.body.innerHTML = `<div><p>hoge</p><p>fuga</p><p>piyo</p></div>`

    expect($('p')).toMatchSnapshot()
  })

  it('`#context`から最初の`span`を返す', () => {
    document.body.innerHTML = `<div><p><span>hoge</span></p><p id="context"><span>fuga</span></p><p><span>piyo</span></p></div>`

    const contextEl = $<HTMLParagraphElement>('#context')
    expect($('span', contextEl!)).toMatchSnapshot()
  })
})
