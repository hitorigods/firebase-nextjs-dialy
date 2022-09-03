Firebase Hosting へのデプロイ
デプロイは今すぐ行うことも、後で行うこともできます。今すぐデプロイするには、ターミナル ウィンドウを開き、ウェブアプリのルート ディレクトリに移動するか、ルート ディレクトリを作成します。

Google へのログイン

```
firebase login
```

プロジェクトの開始
このコマンドはアプリのルート ディレクトリから実行してください:

```
firebase init
```

firebase.json でサイトを指定する
firebase.json 構成ファイルにサイト ID を追加してください。設定が完了したら、マルチサイト デプロイメントのベスト プラクティスをご覧ください。

```
{
  "hosting": {
    "site": "fir-nextjs-dialy",

    "public": "public",
    ...
  }
}
```

準備ができたらウェブアプリをデプロイ
静的ファイル（HTML、CSS、JS など）をアプリのデプロイ ディレクトリ（デフォルトは「public」）に配置します。続いて、アプリのルート ディレクトリで次のコマンドを実行します:

```
firebase deploy --only hosting:fir-nextjs-dialy
```

デプロイ後、アプリを fir-nextjs-dialy.web.app で表示します。

お困りの場合は、Hosting のドキュメントをご覧ください。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
