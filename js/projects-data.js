/**
 * Portfolio Projects Data
 * Based on Mihara Yuta's Game Portfolio Presentation (2028 Graduate / Game Programmer)
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "ミハラ ユウタ",
    nameEn: "Yuta Mihara",
    title: "Game Programmer",
    subTitle: "ゲームプログラマー志望 - 2028年度 新卒採用",
    bio: "DirectX 12による自作レンダリングエンジンや、Unity / Unreal Engine 5を用いたインゲーム・UI・プレイヤー挙動の実装を行っています。直感的なゲームプレイ体験を提供するため、「UIに頼らずパッと見で状況を理解できる描画制御や演出」にこだわって制作を続けています。",
    hobbies: ["音楽 (Music)", "カタン / ボードゲーム (Catan & Tabletop Games)"],
    status: "2028年3月 卒業見込み",
    githubUrl: "https://github.com/yuuta", // ユーザーのGitHub URL
    email: "contact@example.com",
    skills: [
      {
        category: "プログラミング言語",
        items: [
          { name: "C / C++", level: "★★★★★", years: "2年+", desc: "DirectX 12自作エンジン、メモリ管理、マルチスレッド、シェーダー連携" },
          { name: "C#", level: "★★★★☆", years: "3年", desc: "Unityインゲーム実装、イベント駆動設計、エディタ拡張" },
          { name: "HLSL", level: "★★★★☆", years: "2年", desc: "ポストエフェクト、デカール描画、コンピュート/頂点/ピクセルシェーダー" }
        ]
      },
      {
        category: "ゲームエンジン & API",
        items: [
          { name: "DirectX 12", level: "★★★★☆", years: "使用歴 2年", desc: "CommandQueue, RootSignature, DescriptorHeap, 動的バッチング, レンダリングパイプライン構築" },
          { name: "Unity", level: "★★★★★", years: "使用歴 3年", desc: "物理演算連携、アニメーション制御、UIステートマシン、チーム制作での主軸" },
          { name: "Unreal Engine 5", level: "★★★☆☆", years: "使用歴 1年", desc: "C++ / Blueprintハイブリッド開発、Gameplay Ability System基礎" }
        ]
      },
      {
        category: "ツール & バージョン管理",
        items: [
          { name: "Git / GitHub", level: "★★★★☆", years: "3年", desc: "ブランチ戦略、Pull Request、チーム開発時のコンフリクト解消・コードレビュー" },
          { name: "Visual Studio / RenderDoc", level: "★★★★☆", years: "2年", desc: "GPUプロファイリング、ドローコール最適化、デバッグ" }
        ]
      }
    ]
  },

  // 就職作品 (メイン・フィーチャー作品)
  featuredProject: {
    id: "smash-out",
    title: "SMASH OUT",
    catchphrase: "UIに頼らない直感的視覚フィードバックを追求した3D見下ろしアクション",
    genre: "3D見下ろしアクション",
    period: "2026年4月 〜 現在も鋭意開発中",
    role: "個人開発 (企画・プログラミング・シェーダー・エンジン構築)",
    engine: "DirectX 12 (自作エンジン / C++ / HLSL)",
    tags: ["DirectX12", "C++", "HLSL", "自作エンジン", "3D Action", "Solo"],
    featured: true,
    thumbnail: "assets/images/smash-out-main.svg",
    videoUrl: "", // YouTube等のURLを後から差し替え可能
    repoUrl: "", // GitHubリポジトリリンク
    demoUrl: "",
    overview: "今までの学びの集大成として制作中の個人プロジェクトです。できるだけUIに頼らずに、プレイヤーが画面の視覚情報からパッと見で戦況や自分の状態を直感的に理解できることをコアコンセプトに掲げて開発しています。DirectX 12のローレベルAPIの特性を活かし、GPU駆動の最適化とリッチな描画演出を両立させました。",
    highlights: [
      {
        title: "デカールのテクスチャ別バッチ処理",
        subtitle: "ステート（テクスチャ）切り替えコストを最小化し、大量の痕跡描画を実現",
        icon: "layers",
        description: "連想配列を活用し、テクスチャ単位でデカールデータを動的に自動グループ化。グループ毎に専用のSRV（Shader Resource View）とインスタンスバッファを割り当てることで、描画時のパイプラインステート切り替えオーバーヘッドを極小化しました。これにより乱戦時でもフレームレートを落とさずに無数の攻撃跡や血痕を配置可能です。",
        techPoints: [
          "テクスチャIDをキーとする連想配列による動的バッチリング",
          "インスタンス描画（DrawIndexedInstanced）によるドローコール大幅削減",
          "専用SRVとStructuredBufferを用いたGPUメモリ効率化"
        ],
        image: "assets/images/smash-out-tech-decal.svg"
      },
      {
        title: "15種類以上のポストエフェクト & パラメータGPU転送",
        subtitle: "ヒット感や緊迫感を演出するプログラマブル・シェーダーパイプライン",
        icon: "sparkles",
        description: "Glitch（グリッチノイズ）、Radial Blur（放射ブラー）、Depth Outline（深度輪郭線）など15種類以上のカスタムポストエフェクトをHLSLで実装。ゲーム内イベント（強打、被ダメージ、覚醒等）の発生に合わせて、強度や適用範囲などのパラメータを定数バッファを介して毎フレームGPUへストリーミング転送し、有機的で滑らかな演出遷移を実現しました。",
        techPoints: [
          "自作HLSLシェーダーによる多様な画面効果（Glitch / Radial Blur / Depth Outline etc.）",
          "毎フレームの定数バッファ（ConstantBuffer）更新による滑らかなイージング補間",
          "RenderTargetのピンポン処理による複合エフェクトパイプライン"
        ],
        image: "assets/images/smash-out-tech-posteffect.svg"
      },
      {
        title: "正確な視界コーンの動的生成（レイキャスト × メッシュ制御）",
        subtitle: "壁抜けしないリアルな索敵範囲をジオメトリレベルで動的生成",
        icon: "eye",
        description: "敵の索敵コーンが遮蔽物（壁や柱）を貫通しないよう、放射状に高密度のレイキャストを行いオクルージョン判定を実行。レイの交差座標を即座に動的メッシュの頂点バッファへ書き込み、そのフレームに応じた正確な視界ポリゴンをリアルタイム描画しています。これにより、ステルスと立ち回りの駆け引きに説得力を生み出しました。",
        techPoints: [
          "扇状放射レイキャストによる高速な幾何当たり判定",
          "衝突点座標からのファン状ポリゴン頂点配列の動的構築（Dynamic Vertex Buffer）",
          "ステンシルバッファやアルファブレンドと連携した自然なライティング表現"
        ],
        image: "assets/images/smash-out-tech-vision.svg"
      },
      {
        title: "状態の可視化（エフェクト・シェーダー制御）",
        subtitle: "残りHPと連動する血痕エフェクトなど、UIレスな情報伝達",
        icon: "heart-pulse",
        description: "プレイヤーがステータスバーを見なくても自身の危険度を直感できる仕組みを導入。プレイヤーの残りHPの減少に応じて、移動時・被弾時に発生する血痕テクスチャのスケール、拡散度、生成頻度、および画面端のビネットシェーダーを動的に変化させ、プレイヤーの緊張感を高めています。",
        techPoints: [
          "ゲーム内パラメータ（HP）とパーティクル・デカール発生レートの同期",
          "血痕のUVアニメーションおよびフェードアウトアルゴリズム",
          "UI視線移動をゼロにし、アクションへの没入感を最大化"
        ],
        image: "assets/images/smash-out-tech-hp.svg"
      }
    ],
    screenshots: [
      { caption: "見下ろしアクション戦闘シーン（索敵コーンとデカール）", url: "assets/images/smash-out-screen-1.svg" },
      { caption: "テクスチャ別バッチ処理によるデカール描画", url: "assets/images/smash-out-screen-2.svg" },
      { caption: "ラジアルブラーとポストエフェクト発動時", url: "assets/images/smash-out-screen-3.svg" },
      { caption: "タイトル画面（SMASH OUT）", url: "assets/images/smash-out-screen-4.svg" }
    ]
  },

  // チーム制作作品（ピックアップ3作品）
  teamProjects: [
    {
      id: "kuma-cider",
      title: "おかしあつめてクマサイダー",
      genre: "アクション",
      period: "2ヶ月",
      teamSize: "3人チーム",
      role: "インゲーム プログラマー",
      engine: "Unity (C#)",
      tags: ["Unity", "C#", "Team (3人)", "Action", "In-Game"],
      thumbnail: "assets/images/kuma-cider-main.svg",
      videoUrl: "",
      repoUrl: "",
      summary: "可愛いクマがステージ上のお菓子を制限時間内に集め、サイダーを満たしていく爽快3Dアクションゲーム。",
      responsibilities: [
        "プレイヤーの移動・ジャンプ・ダッシュ等のコアアクション実装",
        "お菓子オブジェクトの取得判定と動的スポーンマネージャーの構築",
        "スコア計算アルゴリズム、コンボシステム、制限時間管理ロジック",
        "リザルト画面（ランク判定：Aランク演出等）へのデータ受け渡しと演出同期"
      ],
      screenshots: [
        { caption: "タイトル画面", type: "title", url: "assets/images/kuma-cider-screen-1.svg" },
        { caption: "プレイ画面（お菓子集めとHUD）", type: "play", url: "assets/images/kuma-cider-screen-2.svg" },
        { caption: "リザルト画面（Aランク演出・スコア41735）", type: "result", url: "assets/images/kuma-cider-screen-3.svg" }
      ]
    },
    {
      id: "biripiyo-rumble",
      title: "ビリピヨランブル !!",
      genre: "アクション (ピクセルアート / 2D)",
      period: "2ヶ月",
      teamSize: "3名チーム",
      role: "UI プログラマー",
      engine: "Unity (C#)",
      tags: ["Unity", "C#", "Team (3人)", "Action", "UI/UX", "Pixel Art"],
      thumbnail: "assets/images/biripiyo-main.svg",
      videoUrl: "",
      repoUrl: "",
      summary: "レトロなドット絵世界でヒヨコたちが激しいアクションを繰り広げるタイムアタックアクションゲーム。",
      responsibilities: [
        "タイトル画面・メニュー階層・リスタート処理のUIステートマシン構築",
        "インゲームの精密タイムアタックタイマー表示（ミリ秒単位の描画更新）",
        "ランキング機能およびステージクリア時のリザルトUIアニメーション",
        "コントローラー・キーボード双方に対応したフォーカスナビゲーション設計"
      ],
      screenshots: [
        { caption: "タイトル画面（レトロな石造りゲート）", type: "title", url: "assets/images/biripiyo-screen-1.svg" },
        { caption: "プレイ画面（城内アクションと電撃トラップ）", type: "play", url: "assets/images/biripiyo-screen-2.svg" },
        { caption: "リザルト画面（タイム記録 00:53.20）", type: "result", url: "assets/images/biripiyo-screen-3.svg" }
      ]
    },
    {
      id: "soutaikasa",
      title: "相対傘",
      genre: "アクション (和風・CRT演出)",
      period: "2ヶ月",
      teamSize: "3名チーム",
      role: "プレイヤー プログラマー",
      engine: "Unity (C#)",
      tags: ["Unity", "C#", "Team (3人)", "Action", "Player Mechanics", "Japanese Style"],
      thumbnail: "assets/images/soutaikasa-main.svg",
      videoUrl: "",
      repoUrl: "",
      summary: "ブラウン管テレビ風（CRT）の走査線シェーダーと和風の世界観が融合した、傘を用いた斬新な攻防アクションゲーム。",
      responsibilities: [
        "WASD移動とマウスカーソル連動の傘エイム（照準・角度計算）機構",
        "左クリックによる近接攻撃、右クリックによる傘発射/パリィ判定の実装",
        "敵との相対距離に応じたリアクション挙動とヒットストップ制御",
        "ボス登場ムービーシーン（「唐笠門左衛門なりぃ!!」）とインゲームのカメラ演出シームレス遷移"
      ],
      screenshots: [
        { caption: "タイトル画面（市松模様とブラウン管エフェクト）", type: "title", url: "assets/images/soutaikasa-screen-1.svg" },
        { caption: "プレイ画面（WASD移動・照準エイム・傘発射）", type: "play", url: "assets/images/soutaikasa-screen-2.svg" },
        { caption: "ムービーシーン（ボス「唐笠門左衛門」演出）", type: "cutscene", url: "assets/images/soutaikasa-screen-3.svg" }
      ]
    }
  ],

  // 過去に制作した全14作品のアーカイブ (2024〜2026)
  archiveProjects: [
    {
      title: "SMASH OUT",
      year: "2026",
      category: "個人 / 就職作品",
      engine: "DirectX 12 (C++)",
      desc: "3D見下ろしアクション。デカールバッチング、15種のポストエフェクト、動的視界生成。"
    },
    {
      title: "おかしあつめてクマサイダー",
      year: "2025",
      category: "3人チーム / 2ヶ月",
      engine: "Unity (C#)",
      desc: "3Dアクション。担当：インゲーム（プレイヤー・お菓子取得判定・スコア）。"
    },
    {
      title: "ビリピヨランブル !!",
      year: "2025",
      category: "3人チーム / 2ヶ月",
      engine: "Unity (C#)",
      desc: "2Dピクセルアクション。担当：UI（タイムアタックHUD・リザルト演出・メニュー）。"
    },
    {
      title: "相対傘",
      year: "2025",
      category: "3人チーム / 2ヶ月",
      engine: "Unity (C#)",
      desc: "和風CRTアクション。担当：プレイヤー（傘エイム・発射・近接アクション・カメラ演出）。"
    },
    {
      title: "STRAYSHOT BOOTLEG",
      year: "2024",
      category: "個人制作",
      engine: "C++",
      desc: "レトロアーケード風の高速シューティングゲーム。弾幕生成と衝突判定の最適化。"
    },
    {
      title: "BALLOON BOY (KAMATA ENGINE)",
      year: "2024",
      category: "個人制作",
      engine: "C++ (自作エンジン)",
      desc: "自作2Dエンジンを用いたバルーン浮遊アクションゲーム。物理演算と浮力計算。"
    },
    {
      title: "Climb & Drop",
      year: "2024",
      category: "チーム制作",
      engine: "Unity (C#)",
      desc: "上下移動を駆使してステージを攻略する2Dパズルプラットフォーマー。"
    },
    {
      title: "カラフルボム (Color Bomber)",
      year: "2025",
      category: "チーム制作",
      engine: "Unity (C#)",
      desc: "色を塗ってエリアを拡大するパーティーアクション。シェーダーによるリアルタイム領域着色。"
    },
    {
      title: "TURN ON THE LIGHT",
      year: "2024",
      category: "Game Jam",
      engine: "Unity (C#)",
      desc: "光と影を切り替えて進むステルスホラーアクション。動的ライティングギミック。"
    },
    {
      title: "エキエキ (Eki-Eki)",
      year: "2025",
      category: "チーム制作",
      engine: "Unity (C#)",
      desc: "サイバーパンク調のハイスピードラン＆ガンアクション。リズミカルなコンボシステム。"
    },
    {
      title: "ガチ避ケ",
      year: "2024",
      category: "個人制作",
      engine: "C++",
      desc: "極限の反射神経を試す弾幕回避ミニゲーム。毎フレーム高精度な当たり判定。"
    },
    {
      title: "バトルぶち壊シアム",
      year: "2025",
      category: "チーム制作",
      engine: "Unreal Engine 5",
      desc: "ステージ内のオブジェクトを破壊しながら戦うマルチプレイヤー物理格闘ゲーム。"
    },
    {
      title: "ClimbDrop 3D",
      year: "2025",
      category: "プロトタイプ",
      engine: "Unity (C#)",
      desc: "3D空間におけるグラップリング＆自由落下アクションのプロトタイプ検証作。"
    },
    {
      title: "DirectX12 Graphics Sandbox",
      year: "2026",
      category: "技術検証",
      engine: "DirectX 12 / HLSL",
      desc: "Compute ShaderによるGPUパーティクルおよびシャドウマップ生成の研究プロジェクト。"
    }
  ]
};
