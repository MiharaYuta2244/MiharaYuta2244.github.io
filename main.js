/**
 * ポートフォリオ作品データおよび個別紹介ビュー制御スクリプト
 * 
 * 各作品の動画URL、GitHub URL、紹介コメント等は以下の `worksData` を編集することで簡単に変更できます。
 */

// =============================================================================
// 作品データ定義
// =============================================================================
const worksData = {
  "smash-out": {
    id: "smash-out",
    category: "就職作品",
    categoryLabel: "02 就職作品 / MAIN PROJECT",
    title: "SMASH OUT",
    engine: "DirectX 12",
    genre: "3D 見下ろしアクション",
    period: "2026.04 - （制作中）",
    members: "1人（個人制作）",
    // 就職作品のGitHub URL（リポジトリのURLを入力してください）
    githubUrl: "https://github.com/MiharaYuta2244", 
    // 紹介動画の設定:
    // ・Google Driveの場合: "https://drive.google.com/file/d/ファイルID/preview"
    // ・YouTubeの場合: "https://www.youtube.com/embed/動画ID"
    // ・空文字 "" の場合はGIFサムネイルとプレースホルダーを表示します
    videoEmbedUrl: "https://drive.google.com/file/d/1TRg5Mmn1-qLozVUtm7GKvtCjcaQB4FO8/preview",
    videoExternalLink: "https://drive.google.com/file/d/1TRg5Mmn1-qLozVUtm7GKvtCjcaQB4FO8/view?usp=sharing",
    thumbnail: "assets/smash-out.gif",
    fallbackThumbnail: "assets/smash-out.jpg",
    summary: "今までの学びの集大成として制作中の個人プロジェクトです。できるだけUIに頼らず、プレイヤーがパッと見でゲーム内の状況を理解できることを意識して制作しています。",
    comment: `【作品コンセプト・概要】
今までの学びの集大成として制作中の個人プロジェクトです。
できるだけ画面内のUIに頼らず、キャラクターの予兆モーションやエフェクト、カメラワークなどを通じてプレイヤーが直感的に状況を把握できるゲーム体験を追求しています。

【技術的ポイント・こだわり】
・DirectX 12を用いた描画パイプラインの構築
・3D空間におけるコリジョン判定とレスポンスの高いアクション挙動
・プレイヤーの視線誘導と情報伝達を意識したシェーダーおよびライティング処理
・自作エンジンによるメモリ管理とフレームレートの安定化`,
  },

  "kuma-cider": {
    id: "kuma-cider",
    category: "過去作品",
    categoryLabel: "03 過去作品 / WORK 01",
    title: "おかしあつめてクマサイダー",
    engine: "DirectX 12",
    genre: "縦スクロールアクション",
    period: "2ヶ月",
    members: "3人（チーム制作）",
    githubUrl: "", // GitHubのURLがあればここに記載（例: "https://github.com/..."）
    videoEmbedUrl: "", // YouTube埋め込み等のURLがあれば記載
    videoExternalLink: "",
    thumbnail: "assets/kuma-cider.gif",
    summary: "お菓子を集めながら頂上を目指す縦スクロールアクションゲーム。",
    comment: `【作品コンセプト・概要】
お菓子を集めながらリズミカルに上へと登っていく、爽快感重視の縦スクロールアクションゲームです。
チーム制作として役割分担を行い、2ヶ月という期間で高い完成度を目指しました。

【担当箇所・技術的ポイント】
・プレイヤーのジャンプ挙動・当たり判定・スクロール追従カメラの実装
・ギミックの制御およびステージ配置ロジック
・チーム内でのGitを用いたバージョン管理とブランチ運用の実践`,
  },

  "bilypiyo-rumble": {
    id: "bilypiyo-rumble",
    category: "過去作品",
    categoryLabel: "03 過去作品 / WORK 02",
    title: "ビリピヨランブル !!",
    engine: "DirectX 12",
    genre: "1v1アクション",
    period: "2ヶ月",
    members: "3人（チーム制作）",
    githubUrl: "",
    videoEmbedUrl: "",
    videoExternalLink: "",
    thumbnail: "assets/bilypiyo-rumble.gif",
    summary: "電撃とスピード感あふれる対戦型1v1アクションゲーム。",
    comment: `【作品コンセプト・概要】
2人のプレイヤーが画面内で対峙し、電撃を用いた技の駆け引きを繰り広げる1v1の対戦型アクションゲームです。

【担当箇所・技術的ポイント】
・対戦ゲームならではのヒットストップ・ノックバック・硬直時間の状態遷移管理
・2プレイヤー同時のコントローラー入力処理と判定同期
・パーティクルエフェクトとサウンドの連動による爽快感ある演出`,
  },

  "soutai-gasa": {
    id: "soutai-gasa",
    category: "過去作品",
    categoryLabel: "03 過去作品 / WORK 03",
    title: "相対傘",
    engine: "DirectX 12",
    genre: "シューティングアクション",
    period: "2ヶ月",
    members: "3人（チーム制作）",
    githubUrl: "",
    videoEmbedUrl: "",
    videoExternalLink: "",
    thumbnail: "assets/soutai-gasa.gif",
    summary: "傘を用いた攻防一体のシューティングアクションゲーム。",
    comment: `【作品コンセプト・概要】
「傘を開いて敵の弾を防ぎ、閉じて高速移動＆攻撃に転じる」という攻防一体のメカニクスを取り入れたシューティングアクションゲームです。

【担当箇所・技術的ポイント】
・多数の弾丸描画を軽量化するためのオブジェクトプール機構の実装
・傘の展開角度に応じた弾丸反射角のベクトル計算と衝突判定
・ボスの行動パターン制御ステートマシンの設計`,
  },

  "maou": {
    id: "maou",
    category: "過去作品",
    categoryLabel: "03 過去作品 / WORK 04",
    title: "天上の魔王",
    engine: "DirectX 12",
    genre: "メトロイドヴァニア",
    period: "10日間",
    members: "3人（チーム制作）",
    githubUrl: "",
    videoEmbedUrl: "",
    videoExternalLink: "",
    thumbnail: "assets/new-work.gif",
    summary: "10日間という短期制作ハッカソンの中で完成度を追求した探索型2Dアクション。",
    comment: `【作品コンセプト・概要】
10日間という極めて短期間のチーム制作で開発したメトロイドヴァニア型探索アクションです。限られた期間内でコアの面白さを最大化する設計を行いました。

【担当箇所・技術的ポイント】
・マップ探索・フラグ管理・ルーム遷移システムの設計
・敵AIの索敵および攻撃アルゴリズム
・短期開発におけるスコープ調整と迅速なバグ修正・コードレビューの主導`,
  }
};

// =============================================================================
// モーダル（個別紹介ビュー）の制御ロジック
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("work-modal");
  const modalBody = document.getElementById("modal-body");
  const modalCategory = document.getElementById("modal-category");
  const modalBreadcrumbTitle = document.getElementById("modal-breadcrumb-title");
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");
  const breadcrumbTop = document.getElementById("breadcrumb-top");

  if (!modal || !modalBody) return;

  // モーダルを開く関数
  function openWorkModal(workId) {
    const data = worksData[workId];
    if (!data) return;

    // パンくずリスト更新
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalBreadcrumbTitle) modalBreadcrumbTitle.textContent = data.title;

    // 詳細コンテンツのHTMLを生成
    modalBody.innerHTML = renderWorkDetail(data);

    // モーダルを表示
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // URLハッシュを更新（履歴に追加）
    if (window.location.hash !== `#work-${workId}`) {
      history.pushState(null, "", `#work-${workId}`);
    }

    // モーダルのスクロールをトップへ
    const modalContainer = modal.querySelector(".modal-container");
    if (modalContainer) {
      modalContainer.scrollTop = 0;
    }
  }

  // モーダルを閉じる関数
  function closeWorkModal(updateHistory = true) {
    if (!modal.classList.contains("is-active")) return;

    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // モーダル内のiframe動画停止のため中身をクリア
    setTimeout(() => {
      if (!modal.classList.contains("is-active")) {
        modalBody.innerHTML = "";
      }
    }, 300);

    if (updateHistory && window.location.hash.startsWith("#work-")) {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
  }

  // 詳細ビューのHTML生成
  function renderWorkDetail(data) {
    // 動画セクションのレンダリング
    let mediaHtml = "";
    if (data.videoEmbedUrl) {
      // 埋め込みプレイヤー
      mediaHtml = `
        <div class="detail-media-wrap">
          <div class="detail-video-container">
            <iframe src="${escapeHtml(data.videoEmbedUrl)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
          </div>
          ${data.videoExternalLink ? `
            <div class="video-sub-action">
              <a href="${escapeHtml(data.videoExternalLink)}" target="_blank" rel="noopener noreferrer" class="ext-video-link">
                <span>外部プレイヤーで動画を全画面再生する</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ` : ""}
        </div>
      `;
    } else {
      // GIFプレビュー + 動画プレースホルダー枠
      mediaHtml = `
        <div class="detail-media-wrap">
          <figure class="detail-thumbnail">
            <img src="${escapeHtml(data.thumbnail)}" alt="${escapeHtml(data.title)}のゲームプレイ"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
            <div class="gif-placeholder" style="display:none;">${escapeHtml(data.title)} / PREVIEW</div>
          </figure>
          <div class="video-placeholder-notice">
            <div class="notice-icon">📹</div>
            <div class="notice-text">
              <strong>紹介動画について</strong>
              <p>YouTubeまたはGoogle Drive等の動画URLを設定すると、ここに埋め込み動画プレイヤーが表示されます。</p>
            </div>
          </div>
        </div>
      `;
    }

    // GitHub URLセクション
    let githubHtml = "";
    if (data.githubUrl) {
      githubHtml = `
        <div class="spec-item spec-github">
          <dt>GitHub</dt>
          <dd>
            <a href="${escapeHtml(data.githubUrl)}" target="_blank" rel="noopener noreferrer" class="github-badge-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>リポジトリを見る (GitHub)</span>
              <span class="arrow" aria-hidden="true">↗</span>
            </a>
          </dd>
        </div>
      `;
    } else if (data.category === "就職作品") {
      githubHtml = `
        <div class="spec-item spec-github">
          <dt>GitHub</dt>
          <dd class="github-placeholder-text">
            <span>リポジトリURL準備中（設定するとここにリンクが表示されます）</span>
          </dd>
        </div>
      `;
    }

    return `
      <div class="detail-header-block">
        <div class="detail-kicker">${escapeHtml(data.categoryLabel)}</div>
        <h1 class="detail-title">${escapeHtml(data.title)}</h1>
        <p class="detail-summary">${escapeHtml(data.summary)}</p>
      </div>

      <div class="detail-main-grid">
        <!-- メディア（動画 / プレビュー） -->
        <section class="detail-media-section">
          <div class="detail-section-title">
            <span>01</span> 紹介動画 / プレイ映像
          </div>
          ${mediaHtml}
        </section>

        <!-- スペック・基本情報 -->
        <section class="detail-specs-section">
          <div class="detail-section-title">
            <span>02</span> 作品概要 / SPEC
          </div>
          <dl class="detail-specs-list">
            <div class="spec-item">
              <dt>ゲーム名</dt>
              <dd><strong>${escapeHtml(data.title)}</strong></dd>
            </div>
            <div class="spec-item">
              <dt>使用エンジン</dt>
              <dd><span class="spec-tag">${escapeHtml(data.engine)}</span></dd>
            </div>
            <div class="spec-item">
              <dt>ジャンル</dt>
              <dd>${escapeHtml(data.genre)}</dd>
            </div>
            <div class="spec-item">
              <dt>制作期間</dt>
              <dd>${escapeHtml(data.period)}</dd>
            </div>
            <div class="spec-item">
              <dt>制作人数</dt>
              <dd>${escapeHtml(data.members)}</dd>
            </div>
            ${githubHtml}
          </dl>
        </section>
      </div>

      <!-- 紹介コメント・技術的アピール -->
      <section class="detail-comment-section">
        <div class="detail-section-title">
          <span>03</span> 紹介コメント・技術的な取り組み
        </div>
        <div class="detail-comment-card">
          ${formatComment(data.comment)}
        </div>
      </section>

      <!-- 戻るアクション -->
      <div class="detail-footer-actions">
        <button type="button" class="back-to-list-btn" onclick="document.getElementById('modal-close').click();">
          <span aria-hidden="true">←</span>
          <span>作品一覧に戻る</span>
        </button>
      </div>
    `;
  }

  // コメントのフォーマット（改行と見出しを整形）
  function formatComment(text) {
    if (!text) return "";
    const lines = text.split("\n");
    let html = "";
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        html += "<div class='comment-spacer'></div>";
      } else if (trimmed.startsWith("【") && trimmed.includes("】")) {
        html += `<h3 class="comment-heading">${escapeHtml(trimmed)}</h3>`;
      } else if (trimmed.startsWith("・")) {
        html += `<p class="comment-bullet">${escapeHtml(trimmed)}</p>`;
      } else {
        html += `<p class="comment-p">${escapeHtml(trimmed)}</p>`;
      }
    });
    return html;
  }

  // HTMLエスケープヘルパー
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 作品カードのクリックイベントリスナー登録
  document.querySelectorAll("[data-work-id]").forEach(card => {
    card.addEventListener("click", (e) => {
      // 外部リンクなどの直接クリックは優先
      if (e.target.closest("a") && !e.target.closest(".open-modal-trigger")) {
        // カード全体のクリックとして処理したい場合はリンクのデフォルトを防ぐ
      }
      const workId = card.getAttribute("data-work-id");
      if (workId) {
        e.preventDefault();
        openWorkModal(workId);
      }
    });

    // キーボード操作対応（EnterまたはSpace）
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const workId = card.getAttribute("data-work-id");
        if (workId) openWorkModal(workId);
      }
    });
  });

  // 閉じるボタンと背景クリックイベント
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeWorkModal(true));
  }
  if (backdrop) {
    backdrop.addEventListener("click", () => closeWorkModal(true));
  }
  if (breadcrumbTop) {
    breadcrumbTop.addEventListener("click", () => closeWorkModal(true));
  }

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeWorkModal(true);
    }
  });

  // ブラウザの戻る・進む（hashchange / popstate）対応
  window.addEventListener("popstate", () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#work-")) {
      const workId = hash.replace("#work-", "");
      if (worksData[workId]) {
        openWorkModal(workId);
      }
    } else {
      closeWorkModal(false);
    }
  });

  // 初期ロード時のハッシュチェック（直接リンク対応）
  if (window.location.hash && window.location.hash.startsWith("#work-")) {
    const initialWorkId = window.location.hash.replace("#work-", "");
    if (worksData[initialWorkId]) {
      openWorkModal(initialWorkId);
    }
  }
});
