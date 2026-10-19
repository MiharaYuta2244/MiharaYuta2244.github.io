# MiharaYuta2244.github.io

ミハラ ユウタのゲームプログラマー向けポートフォリオサイトです。

## 公開URL
https://miharayuta2244.github.io/

---

## 主な機能と特徴

- **黒基調の洗練されたゲーム企業向けUI/UX**
  - 洗練されたタイポグラフィとハイコントラストなレイアウト
- **言語スキルの視覚化**
  - C, C++, C# の高品質ベクターロゴバッジを掲載
- **作品の個別紹介ビュー（階層ナビゲーション）**
  - 就職作品や過去作品をクリックすると、個別紹介画面（フルスクリーン・オーバーレイ）が展開
  - 上部に「TOP / 就職作品 / 作品名」などのパンくずリスト（階層ナビ）
  - URLハッシュ（例: `#work-smash-out`）に対応しており、ブラウザの「戻る」ボタンやURLの直接共有が可能
- **個別ページ掲載項目**
  1. ゲーム名
  2. 使用エンジン（DirectX 12等）
  3. ゲームジャンル
  4. 制作期間
  5. 制作人数
  6. 紹介動画（Google Drive / YouTube等の動画埋め込みプレイヤー対応）
  7. 紹介コメント & 技術的アピールポイント
  8. GitHub URL（就職作品・過去作品のリポジトリリンク）

---

## 作品情報・動画・GitHub URLの編集方法

作品の紹介文、動画URL、GitHubリポジトリURLなどは、すべて `main.js` の先頭にある `worksData` オブジェクトを編集するだけで簡単に更新できます。

### 編集ファイル: `main.js`

```javascript
const worksData = {
  "smash-out": {
    title: "SMASH OUT",
    engine: "DirectX 12",
    genre: "3D 見下ろしアクション",
    period: "2026.04 - （制作中）",
    members: "1人（個人制作）",
    // ★ 就職作品のGitHubリポジトリURL
    githubUrl: "https://github.com/ユーザー名/リポジトリ名",
    // ★ 動画埋め込みURL（Google DriveプレビューまたはYouTube埋め込み）
    videoEmbedUrl: "https://drive.google.com/file/d/ファイルID/preview",
    // ★ 外部で全画面再生する直リンク
    videoExternalLink: "https://drive.google.com/file/d/ファイルID/view?usp=sharing",
    // ★ コメント・技術的アピール
    comment: `【作品コンセプト・概要】
...
【技術的ポイント・こだわり】
...`,
  },
  // 他の過去作品も同様に設定可能
};
```

---

## GitHub Pagesへの反映手順

変更をコミットしてリモートの `main` ブランチへpushしてください。

```bash
git add .
git commit -m "feat: 作品個別紹介ビューの実装とプログラミング言語アイコンの追加"
git push origin main
```

リポジトリの Settings > Pages で Source が「Deploy from a branch (main / root)」になっていれば、数分で `https://miharayuta2244.github.io/` に自動反映されます。
