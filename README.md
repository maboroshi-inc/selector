# selector

単純な querySelector のエイリアス

## インストール

```sh
npm install @maboroshi/selector
```

or

```sh
yarn add @maboroshi/selector
```

## 使い方

```js
import { $, $$ } from '@maboroshi/selector'

console.log($('p')) // => The 1st P element on the document.
console.log($$('p')) // => The All P elements on the document.
```

## API

[API ドキュメント](https://maboroshi-inc.github.io/selector/) を見る
