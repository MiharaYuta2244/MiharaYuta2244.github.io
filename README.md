# 🎮 ミハラ ユウタ | ゲームプログラマー ポートフォリオ

ゲームプログラマー志望（2028年度 新卒採用）ミハラ ユウタさんのポートフォリオWebサイトです。  
提出されたスライド資料（PDF）の全内容（就職作品「SMASH OUT」の技術詳細、チーム制作3作品、過去14作品の制作実績、自己紹介＆スキル）を網羅し、参考サイト（[schouffy.github.io](https://schouffy.github.io/#/game-projects)）のモダンなダークサイバーUIを反映しています。

---

## 🌟 特徴とデザイン設計

1. **GitHub Pages 最適化（ゼロ設定・即デプロイ可能）**
   - Node.js やビルドツール（npm / webpack / Vite 等）を必要としない**Pure HTML5 + CSS3 + Vanilla JavaScript**構成。
   - GitHubリポジトリにプッシュして「GitHub Pages」を有効化するだけで、数分で世界中に公開されます。
2. **schouffyスタイルのゲーム開発者向けダークUI**
   - 深宇宙ネイビー（`#070A12`）とネオンシアン（`#00F0FF` / `#38BDF8`）を基調としたハイコントラストな配色。
   - カードホバー時の立体グロー効果、カテゴリフィルター（DirectX 12 / Unity / Featured / Team / Archive）。
   - ハッシュルーティング（`#/game-projects`, `#/project/smash-out` 等）および詳細モーダル。
3. **就職作品「SMASH OUT」の徹底的な技術解説**
   - **デカールのテクスチャ別バッチ処理**: 連想配列による自動グループ化、専用SRVとインスタンスバッファ割当によるステート切り替えコスト最小化の図解。
   - **15種類以上のポストエフェクト**: Glitch, Radial Blur, Depth Outline等、ConstantBufferを介した毎フレームGPUパラメータ転送。
   - **正確な視界コーンの動的生成**: 放射状レイキャストと壁交差判定による動的頂点バッファ・メッシュリアルタイム生成。
   - **状況を伝える描画制御**: HP減少と連動する血痕テクスチャのサイズ・発生レート・周辺減光制御。
4. **チーム制作3作品の「3面スクリーンショット（タイトル/プレイ/リザルト）」表示**
   - 『おかしあつめてクマサイダー』（担当: インゲーム）
   - 『ビリピヨランブル !!』（担当: UI）
   - 『相対傘』（担当: プレイヤー）
5. **制作実績14作品のアーカイブグリッド（2024〜2026年）**
6. **自己紹介＆スキルツリー（C/C++, C#, HLSL, DirectX 12, Unity, UE5, Git/GitHub）**

---

## 📁 ディレクトリ構成

```text
game-portfolio/
├── index.html                   # メインポートフォリオページ
├── css/
│   └── style.css                # モダンゲーム開発者向けダークテーマスタイル
├── js/
│   ├── projects-data.js         # 作品データ・プロフィール・技術詳細データ
│   └── main.js                  # ルーティング、モーダル、フィルター、ライトボックス制御
├── assets/
│   └── images/                  # ゲーム画面・技術図解・アバターSVG
│       ├── avatar.svg
│       ├── smash-out-main.svg
│       ├── smash-out-tech-decal.svg
│       ├── smash-out-tech-posteffect.svg
│       ├── smash-out-tech-vision.svg
│       ├── smash-out-tech-hp.svg
│       ├── smash-out-screen-1.svg 〜 screen-4.svg
│       ├── kuma-cider-main.svg, screen-1 〜 3.svg
│       ├── biripiyo-main.svg, screen-1 〜 3.svg
│       └── soutaikasa-main.svg, screen-1 〜 3.svg
└── README.md                    # 本ドキュメント
```

---

## 🚀 ローカルでの確認方法

特別なサーバー環境は不要です。
1. ファイルエクスプローラーで `index.html` をダブルクリックしてブラウザ（Chrome / Edge / Firefox）で開くだけで即座に動作します。
2. または、VS Codeをお使いの場合は拡張機能「**Live Server**」で開くか、ターミナルで以下を実行してください：
   ```bash
   # Pythonの場合
   python -m http.server 8000
   ```
   ブラウザで `http://localhost:8000` を開きます。

---

## 🌐 GitHub Pages への公開手順（簡単4ステップ）

自分のGitHubアカウント（例: `https://<your-username>.github.io` や `https://<your-username>.github.io/portfolio`）で公開する手順です。

### ステップ 1: GitHubで新しいリポジトリを作成
1. [GitHub](https://github.com/) にログインし、右上の「＋」から **New repository** を選択します。
2. リポジトリ名を入力します。
   - **ユーザー専用のメインサイトにする場合**: `<your-username>.github.io`
   - **プロジェクトページにする場合**: `portfolio` や `game-portfolio`
3. 「**Public**」を選択し、「Create repository」をクリックします。

### ステップ 2: ファイルをコミット＆プッシュ
この `game-portfolio` フォルダ内で Git コマンドを実行します：

```bash
git init
git add .
git commit -m "feat: Initial commit for game developer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

> **Git コマンドを使わない場合（ブラウザからアップロード）:**  
> 作成したGitHubリポジトリのページで「uploading an existing file」をクリックし、このフォルダ内の全ファイル・フォルダをドラッグ＆ドロップしてコミットするだけでもOKです！

### ステップ 3: GitHub Pages の設定
1. GitHubリポジトリの **Settings**（設定）タブを開きます。
2. 左メニューの **Pages** をクリックします。
3. **Build and deployment** の **Source** で「**Deploy from a branch**」を選択します。
4. **Branch** で `main`（または `master`）、フォルダは `/(root)` を選択して「**Save**」をクリックします。

### ステップ 4: 公開完了！
1〜2分待つと、画面上部に **「Your site is live at https://<your-username>.github.io/...」** と表示され、Web上に公開されます！

---

## 🎨 カスタマイズガイド

### 1. ゲーム画面・スクリーンショットの差し替え
`assets/images/` フォルダ内のSVGファイルを、実際のゲームキャプチャ画像（`.png` や `.jpg`）に置き換えることができます。
- ファイル名をそのまま差し替えるか、`js/projects-data.js` 内の画像パスを書き換えるだけで反映されます。

### 2. プレイ動画（YouTube）の埋め込み
`js/projects-data.js` 内の各プロジェクトの `videoUrl` に、ご自身のYouTube動画の共有URL（例: `https://www.youtube.com/watch?v=...`）を設定してください。

### 3. プロフィールやスキルの変更
`js/projects-data.js` の `PORTFOLIO_DATA.profile` を編集することで、氏名、自己紹介文、スキルレベル、連絡先リンクを自由に変更できます。
