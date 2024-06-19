# いろんな技術を使ったブログ投稿アプリ

## 使った技術

- Next.jsのAppRouterやAPIRoutes
- マークアップはTailwindCSS
- コンポーネントはShadcn/ui
- 認証はNextAuth.js
- DBはSupabase
- ORMはPrisma
- クライアント側のformのバリデーションはReactHookForm
- サーバー側のformのバリデーションはzod
- ブログの記事はEditor.jsで作成

## 個人的に工夫した点

- Headerにblurをかけて、すりガラスのようなUIにした（Shadcn/uiの公式ドキュメントを参考に実装）
- package.jsonにsvgアイコンを最適化するコマンドを登録して実行できるようにした（`"svgo": "svgo -f ./public -o ./public"`）
- LightモードとDarkモードを切り替えれるようにした

## 所感

いろんな技術を使って実装して勉強になった。
個人開発だからいろんな技術を使ったけど、実際にアプリ開発をする際にDBでSupabaseを使うなら認証もSupabaseでやっちゃうと思う。

## 実装後の画面

> **TOPページ**

https://github.com/Eiji1202/nextjs-post-writer/assets/100111462/ab1fe0d5-7910-45fd-87d5-113c69e1b257

> **レスポンシブ対応**

https://github.com/Eiji1202/nextjs-post-writer/assets/100111462/ef8e0099-a4eb-4d0d-9107-8f898b139760

> **ログイン画面**

https://github.com/Eiji1202/nextjs-post-writer/assets/100111462/94bbdb47-0de7-4222-b4cc-3a745f680f6a

> **記事投稿**

https://github.com/Eiji1202/nextjs-post-writer/assets/100111462/157ab245-a100-49b4-b0d4-ceeb51d9e389

> **記事の編集や削除機能など**

https://github.com/Eiji1202/nextjs-post-writer/assets/100111462/1b147121-2dbb-45d1-82c9-eb0ec1a18c98
