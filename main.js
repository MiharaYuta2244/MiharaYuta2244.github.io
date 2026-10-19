/**
 * ポートフォリオ作品データおよび画面切り替え制御スクリプト
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


【技術的ポイント・こだわり】
・
・
・
・,
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
    comment: ``,
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
    comment: ``,
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
    comment: ``,
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
    comment: ``,
  }
};

// 作品の表示順序（前後ナビゲーション用）
const workOrder = ["smash-out", "kuma-cider", "bilypiyo-rumble", "soutai-gasa", "maou"];

// =============================================================================
// フルスクリーン画面切り替え制御ロジック
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const homeView = document.getElementById("home-view");
  const detailView = document.getElementById("detail-view");
  const detailContent = document.getElementById("detail-content");
  const breadcrumbCat = document.getElementById("detail-breadcrumb-category");
  const breadcrumbTitle = document.getElementById("detail-breadcrumb-title");

  if (!homeView || !detailView || !detailContent) return;

  let savedScrollY = 0;

  // トップ画面を表示する関数
  function showHomeView(updateHistory = true) {
    if (detailContent) {
      detailContent.innerHTML = ""; // 動画プレイヤーの停止
    }

    detailView.style.display = "none";
    detailView.classList.remove("is-active");

    homeView.style.display = "block";
    homeView.classList.add("is-active");

    // スクロール位置を復元
    window.scrollTo({ top: savedScrollY, behavior: "instant" });

    if (updateHistory && window.location.hash.startsWith("#work-")) {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
  }

  // 個別紹介画面を表示する関数（画面全体を切り替え）
  function showDetailView(workId, updateHistory = true) {
    const data = worksData[workId];
    if (!data) return;

    // トップ画面のスクロール位置を記憶（トップ画面が表示されていた場合のみ）
    if (homeView.style.display !== "none") {
      savedScrollY = window.scrollY || window.pageYOffset;
    }

    // パンくずリスト更新
    if (breadcrumbCat) breadcrumbCat.textContent = data.category;
    if (breadcrumbTitle) breadcrumbTitle.textContent = data.title;

    // 詳細コンテンツのHTMLを生成
    detailContent.innerHTML = renderWorkDetail(data);

    // 画面全体をトップ画面から個別画面へ切り替え
    homeView.style.display = "none";
    homeView.classList.remove("is-active");

    detailView.style.display = "block";
    detailView.classList.add("is-active");

    // 画面最上部へスクロール
    window.scrollTo({ top: 0, behavior: "instant" });

    // URLハッシュを更新
    if (updateHistory && window.location.hash !== `#work-${workId}`) {
      history.pushState(null, "", `#work-${workId}`);
    }

    // 新しく挿入された前後ナビゲーションのボタンにイベントを紐付け
    detailContent.querySelectorAll("[data-nav-work-id]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const nextId = btn.getAttribute("data-nav-work-id");
        if (nextId) showDetailView(nextId, true);
      });
    });

    // 「一覧に戻る」ボタンの紐付け
    detailContent.querySelectorAll(".back-to-home-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        showHomeView(true);
      });
    });
  }

  // 詳細ビューのHTML生成
  function renderWorkDetail(data) {
    // 動画セクションのレンダリング
    let mediaHtml = "";
    if (data.videoEmbedUrl) {
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

    // 前後の作品
    const currentIndex = workOrder.indexOf(data.id);
    const prevId = currentIndex > 0 ? workOrder[currentIndex - 1] : null;
    const nextId = currentIndex < workOrder.length - 1 ? workOrder[currentIndex + 1] : null;
    const prevWork = prevId ? worksData[prevId] : null;
    const nextWork = nextId ? worksData[nextId] : null;

    let paginationHtml = "";
    if (prevWork || nextWork) {
      paginationHtml = `
        <div class="detail-pagination">
          ${prevWork ? `
            <button type="button" class="pagination-link prev" data-nav-work-id="${escapeHtml(prevWork.id)}">
              <span class="pagination-sub">← PREV WORK</span>
              <span class="pagination-name">${escapeHtml(prevWork.title)}</span>
            </button>
          ` : `<div class="pagination-empty"></div>`}

          <button type="button" class="pagination-center-btn back-to-home-trigger">
            <span>一覧へ</span>
          </button>

          ${nextWork ? `
            <button type="button" class="pagination-link next" data-nav-work-id="${escapeHtml(nextWork.id)}">
              <span class="pagination-sub">NEXT WORK →</span>
              <span class="pagination-name">${escapeHtml(nextWork.title)}</span>
            </button>
          ` : `<div class="pagination-empty"></div>`}
        </div>
      `;
    }

    return `
      <div class="detail-hero">
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

      <!-- 前後の作品ナビゲーション -->
      ${paginationHtml}

      <!-- ボトムアクション -->
      <div class="detail-footer-actions">
        <button type="button" class="back-to-home-btn back-to-home-trigger">
          <span aria-hidden="true">←</span>
          <span>ポートフォリオ一覧に戻る</span>
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
      const workId = card.getAttribute("data-work-id");
      if (workId) {
        e.preventDefault();
        showDetailView(workId, true);
      }
    });

    // キーボード操作対応（EnterまたはSpace）
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const workId = card.getAttribute("data-work-id");
        if (workId) showDetailView(workId, true);
      }
    });
  });

  // ヘッダーの戻るボタンおよびパンくずのTOPクリック
  const headerBackBtn = document.getElementById("header-back-btn");
  if (headerBackBtn) {
    headerBackBtn.addEventListener("click", () => showHomeView(true));
  }
  const breadcrumbHome = document.getElementById("breadcrumb-home");
  if (breadcrumbHome) {
    breadcrumbHome.addEventListener("click", () => showHomeView(true));
  }
  const footerBackBtn = document.getElementById("footer-back-btn");
  if (footerBackBtn) {
    footerBackBtn.addEventListener("click", () => showHomeView(true));
  }

  // ブラウザの戻る・進む（popstate）対応
  window.addEventListener("popstate", () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#work-")) {
      const workId = hash.replace("#work-", "");
      if (worksData[workId]) {
        showDetailView(workId, false);
      }
    } else {
      showHomeView(false);
    }
  });

  // 初期ロード時のハッシュチェック（直接リンクでアクセスされた場合）
  if (window.location.hash && window.location.hash.startsWith("#work-")) {
    const initialWorkId = window.location.hash.replace("#work-", "");
    if (worksData[initialWorkId]) {
      showDetailView(initialWorkId, false);
    }
  }
});
