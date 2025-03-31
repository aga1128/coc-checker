export const MAX_TOWNHALL_LEVEL = 17;

export const TH_DATA = [
  {
    THLevel: "TH1",
    defenses: [
      { name: "大砲", maxCount: 1, maxLevel: 2 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 1, maxLevel: 1},
      { name: "兵舎", maxCount: 1, maxLevel: 3 }
    ],
    resources: [
      { name: "金山", maxCount: 1, maxLevel: 2 },
      { name: "エリクサーポンプ", maxCount: 1, maxLevel: 2 },
      { name: "金庫", maxCount: 1, maxLevel: 1 },
      { name: "エリクサータンク", maxCount: 1,maxLevel: 1 }
    ]
  },
  {
    THLevel: "TH2",
    defenses: [
      { name: "大砲", maxCount: 2, maxLevel: 3 },
      { name: "アーチャータワー", maxCount: 1, maxLevel: 2 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 1, maxLevel: 2 },
      { name: "兵舎", maxCount: 1, maxLevel: 4 }
    ],
    resources: [
      { name: "金山", maxCount: 2, maxLevel: 4 },
      { name: "エリクサーポンプ", maxCount: 2, maxLevel: 4 },
      { name: "金庫", maxCount: 1, maxLevel: 3 },
      { name: "エリクサータンク", maxCount: 1, maxLevel: 3 },
      { name: "クランの城", maxCount: 1, maxLevel: 1 }
    ]
  },
  {
    THLevel: "TH3",
    defenses: [
      { name: "大砲", maxCount: 2, maxLevel: 4 },
      { name: "アーチャータワー", maxCount: 1, maxLevel: 3 },
      { name: "迫撃砲", maxCount: 1, maxLevel: 1 }
    ],
    traps: [
      { name: "爆弾", maxCount: 2, maxLevel: 2 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 2, maxLevel: 3 },
      { name: "兵舎", maxCount: 1, maxLevel: 5 },
      { name: "ラボ", maxCount: 1, maxLevel: 1 }
    ],
    resources: [
      { name: "金山", maxCount: 3, maxLevel: 6 },
      { name: "エリクサーポンプ", maxCount: 3, maxLevel: 6 },
      { name: "金庫", maxCount: 2, maxLevel: 6 },
      { name: "エリクサータンク", maxCount: 2, maxLevel: 6 },
      { name: "クランの城", maxCount: 1, maxLevel: 1 }
    ]
  },
  {
    THLevel: "TH4",
    defenses: [
      { name: "大砲", maxCount: 2, maxLevel: 5 },
      { name: "アーチャータワー", maxCount: 2, maxLevel: 4 },
      { name: "迫撃砲", maxCount: 1, maxLevel: 2 },
      { name: "対空砲", maxCount: 1, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 2, maxLevel: 2 },
      { name: "ばねトラップ", maxCount: 2, maxLevel: 1 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 2, maxLevel: 4 },
      { name: "兵舎", maxCount: 1, maxLevel: 6 },
      { name: "ラボ", maxCount: 1, maxLevel: 2 }
    ],
    resources: [
      { name: "金山", maxCount: 4, maxLevel: 8 },
      { name: "エリクサーポンプ", maxCount: 4, maxLevel: 8 },
      { name: "金庫", maxCount: 2, maxLevel: 8 },
      { name: "エリクサータンク", maxCount: 2, maxLevel: 8 },
      { name: "クランの城", maxCount: 1, maxLevel: 2 }
    ]
  },
  {
    THLevel: "TH5",
    defenses: [
      { name: "大砲", maxCount: 3, maxLevel: 6 },
      { name: "アーチャータワー", maxCount: 3, maxLevel: 6 },
      { name: "迫撃砲", maxCount: 1, maxLevel: 3 },
      { name: "対空砲", maxCount: 1, maxLevel: 3 },
      { name: "ウィザードの塔", maxCount: 1, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 4, maxLevel: 3 },
      { name: "ばねトラップ", maxCount: 2, maxLevel: 1 },
      { name: "対空爆弾", maxCount: 2, maxLevel: 2 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 3, maxLevel: 5 },
      { name: "兵舎", maxCount: 1, maxLevel: 7 },
      { name: "ラボ", maxCount: 1, maxLevel: 3 },
      { name: "呪文工場", maxCount: 1, maxLevel: 1 }
    ],
    resources: [
      { name: "金山", maxCount: 5, maxLevel: 10 },
      { name: "エリクサーポンプ", maxCount: 5, maxLevel: 10 },
      { name: "金庫", maxCount: 2, maxLevel: 9 },
      { name: "エリクサータンク", maxCount: 2, maxLevel: 9 },
      { name: "クランの城", maxCount: 1, maxLevel: 2 }
    ]
  },
  {
    THLevel: "TH6",
    defenses: [
      { name: "大砲", maxCount: 3, maxLevel: 7 },
      { name: "アーチャータワー", maxCount: 3, maxLevel: 7 },
      { name: "迫撃砲", maxCount: 2, maxLevel: 4 },
      { name: "対空砲", maxCount: 2, maxLevel: 4 },
      { name: "ウィザードの塔", maxCount: 2, maxLevel: 3 },
      { name: "エアスイーパー", maxCount: 1, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 4, maxLevel: 3 },
      { name: "ばねトラップ", maxCount: 4, maxLevel: 1 },
      { name: "対空爆弾", maxCount: 2, maxLevel: 2 },
      { name: "巨大爆弾", maxCount: 1, maxLevel: 2 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 3, maxLevel: 6 },
      { name: "兵舎", maxCount: 1, maxLevel: 8 },
      { name: "ラボ", maxCount: 1, maxLevel: 4 },
      { name: "呪文工場", maxCount: 1, maxLevel: 2 }
    ],
    resources: [
      { name: "金山", maxCount: 6, maxLevel: 10 },
      { name: "エリクサーポンプ", maxCount: 6, maxLevel: 10 },
      { name: "金庫", maxCount: 2, maxLevel: 10 },
      { name: "エリクサータンク", maxCount: 2, maxLevel: 10 },
      { name: "クランの城", maxCount: 1, maxLevel: 3 }
    ]
  },
  {
    THLevel: "TH7",
    defenses: [
      { name: "大砲", maxCount: 5, maxLevel: 8 },
      { name: "アーチャータワー", maxCount: 4, maxLevel: 8 },
      { name: "迫撃砲", maxCount: 3, maxLevel: 5 },
      { name: "対空砲", maxCount: 3, maxLevel: 5 },
      { name: "ウィザードの塔", maxCount: 2, maxLevel: 4 },
      { name: "エアスイーパー", maxCount: 1, maxLevel: 3 },
      { name: "かくしテスラ", maxCount: 2, maxLevel: 3 }
    ],
    traps: [
      { name: "爆弾", maxCount: 6, maxLevel: 4 },
      { name: "ばねトラップ", maxCount: 4, maxLevel: 2 },
      { name: "対空爆弾", maxCount: 2, maxLevel: 3 },
      { name: "巨大爆弾", maxCount: 2, maxLevel: 2 },
      { name: "ホーミング対空地雷", maxCount: 1, maxLevel: 1 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 6 },
      { name: "兵舎", maxCount: 1, maxLevel: 9 },
      { name: "ラボ", maxCount: 1, maxLevel: 5 },
      { name: "呪文工場", maxCount: 1, maxLevel: 3 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 2 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 1 }
    ],
    resources: [
      { name: "金山", maxCount: 6, maxLevel: 11 },
      { name: "エリクサーポンプ", maxCount: 6, maxLevel: 11 },
      { name: "ダークエリクサーポンプ", maxCount: 1, maxLevel: 3 },
      { name: "金庫", maxCount: 2, maxLevel: 11 },
      { name: "エリクサータンク", maxCount: 2, maxLevel: 11 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 2 },
      { name: "クランの城", maxCount: 1, maxLevel: 3 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 10 }
    ]
  },
  {
    THLevel: "TH8",
    defenses: [
      { name: "大砲", maxCount: 5, maxLevel: 10 },
      { name: "アーチャータワー", maxCount: 5, maxLevel: 10 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 6 },
      { name: "対空砲", maxCount: 3, maxLevel: 6 },
      { name: "ウィザードの塔", maxCount: 3, maxLevel: 6 },
      { name: "エアスイーパー", maxCount: 1, maxLevel: 4 },
      { name: "かくしテスラ", maxCount: 3, maxLevel: 6 },
      { name: "ボムタワー", maxCount: 1, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 6, maxLevel: 5 },
      { name: "ばねトラップ", maxCount: 6, maxLevel: 3 },
      { name: "対空爆弾", maxCount: 4, maxLevel: 3 },
      { name: "巨大爆弾", maxCount: 3, maxLevel: 3 },
      { name: "ホーミング対空地雷", maxCount: 2, maxLevel: 2 },
      { name: "スケルトントラップ", maxCount: 2, maxLevel: 1 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 6 },
      { name: "兵舎", maxCount: 1, maxLevel: 10 },
      { name: "ラボ", maxCount: 1, maxLevel: 6 },
      { name: "呪文工場", maxCount: 1, maxLevel: 3 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 4 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 2 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 2 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 1 }
    ],
    resources: [
      { name: "金山", maxCount: 6, maxLevel: 12 },
      { name: "エリクサーポンプ", maxCount: 6, maxLevel: 12 },
      { name: "ダークエリクサーポンプ", maxCount: 2, maxLevel: 3 },
      { name: "金庫", maxCount: 3, maxLevel: 11 },
      { name: "エリクサータンク", maxCount: 3, maxLevel: 11 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 4 },
      { name: "クランの城", maxCount: 1, maxLevel: 4 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 20 },
      { name: "アーチャークイーン", maxLevel: 10 }
    ]
  },
  {
    THLevel: "TH9",
    defenses: [
      { name: "大砲", maxCount: 5, maxLevel: 11 },
      { name: "アーチャータワー", maxCount: 6, maxLevel: 11 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 7 },
      { name: "対空砲", maxCount: 4, maxLevel: 7 },
      { name: "ウィザードの塔", maxCount: 4, maxLevel: 7 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 5 },
      { name: "かくしテスラ", maxCount: 4, maxLevel: 7 },
      { name: "ボムタワー", maxCount: 1, maxLevel: 3 },
      { name: "巨大クロスボウ", maxCount: 2, maxLevel: 3 }
    ],
    traps: [
      { name: "爆弾", maxCount: 6, maxLevel: 6 },
      { name: "ばねトラップ", maxCount: 6, maxLevel: 4 },
      { name: "対空爆弾", maxCount: 4, maxLevel: 4 },
      { name: "巨大爆弾", maxCount: 4, maxLevel: 3 },
      { name: "ホーミング対空地雷", maxCount: 4, maxLevel: 2 },
      { name: "スケルトントラップ", maxCount: 2, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 7 },
      { name: "兵舎", maxCount: 1, maxLevel: 11 },
      { name: "ラボ", maxCount: 1, maxLevel: 7 },
      { name: "呪文工場", maxCount: 1, maxLevel: 4 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 6 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 3 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 4 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 2 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 12 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 12 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 6 },
      { name: "金庫", maxCount: 4, maxLevel: 11 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 11 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 6 },
      { name: "クランの城", maxCount: 1, maxLevel: 5 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 30 },
      { name: "アーチャークイーン", maxLevel: 30 },
      { name: "ガーゴイルプリンス", maxLevel: 10 }
    ]
  },
  {
    THLevel: "TH10",
    defenses: [
      { name: "大砲", maxCount: 6, maxLevel: 13 },
      { name: "アーチャータワー", maxCount: 7, maxLevel: 13 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 8 },
      { name: "対空砲", maxCount: 4, maxLevel: 8 },
      { name: "ウィザードの塔", maxCount: 4, maxLevel: 9 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 6 },
      { name: "かくしテスラ", maxCount: 4, maxLevel: 8 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 4 },
      { name: "巨大クロスボウ", maxCount: 3, maxLevel: 4 },
      { name: "インフェルノタワー", maxCount: 2, maxLevel: 3 }
    ],
    traps: [
      { name: "爆弾", maxCount: 6, maxLevel: 7 },
      { name: "ばねトラップ", maxCount: 6, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 5, maxLevel: 4 },
      { name: "巨大爆弾", maxCount: 5, maxLevel: 4 },
      { name: "ホーミング対空地雷", maxCount: 5, maxLevel: 3 },
      { name: "スケルトントラップ", maxCount: 3, maxLevel: 4 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 8 },
      { name: "兵舎", maxCount: 1, maxLevel: 12 },
      { name: "ラボ", maxCount: 1, maxLevel: 8 },
      { name: "呪文工場", maxCount: 1, maxLevel: 5 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 7 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 4 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 5 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 3 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 13 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 13 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 7 },
      { name: "金庫", maxCount: 4, maxLevel: 11 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 11 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 6 },
      { name: "クランの城", maxCount: 1, maxLevel: 6 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 40 },
      { name: "アーチャークイーン", maxLevel: 40 },
      { name: "ガーゴイルプリンス", maxLevel: 20 }
    ]
  },
  {
    THLevel: "TH11",
    defenses: [
      { name: "大砲", maxCount: 7, maxLevel: 15 },
      { name: "アーチャータワー", maxCount: 8, maxLevel: 15 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 10 },
      { name: "対空砲", maxCount: 4, maxLevel: 9 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 10 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 4, maxLevel: 9 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 6 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 5 },
      { name: "インフェルノタワー", maxCount: 2, maxLevel: 5 },
      { name: "イーグル砲", maxCount: 1, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 6, maxLevel: 8 },
      { name: "ばねトラップ", maxCount: 6, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 5, maxLevel: 5 },
      { name: "巨大爆弾", maxCount: 5, maxLevel: 5 },
      { name: "ホーミング対空地雷", maxCount: 5, maxLevel: 3 },
      { name: "スケルトントラップ", maxCount: 3, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 2 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 9 },
      { name: "兵舎", maxCount: 1, maxLevel: 13 },
      { name: "ラボ", maxCount: 1, maxLevel: 9 },
      { name: "呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 8 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 5 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 5 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 4 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 14 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 14 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 8 },
      { name: "金庫", maxCount: 4, maxLevel: 12 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 12 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 6 },
      { name: "クランの城", maxCount: 1, maxLevel: 7 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 50 },
      { name: "アーチャークイーン", maxLevel: 50 },
      { name: "ガーゴイルプリンス", maxLevel: 30 },
      { name: "グランドウォーデン", maxLevel: 20 }
    ]
  },
  {
    THLevel: "TH12",
    defenses: [
      { name: "大砲", maxCount: 7, maxLevel: 17 },
      { name: "アーチャータワー", maxCount: 8, maxLevel: 17 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 12 },
      { name: "対空砲", maxCount: 4, maxLevel: 10 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 11 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 5, maxLevel: 10 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 7 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 6 },
      { name: "インフェルノタワー", maxCount: 3, maxLevel: 6 },
      { name: "イーグル砲", maxCount: 1, maxLevel: 3 },
      { name: "ギガテスラ", maxCount: 1, maxLevel: 5 }
    ],
    traps: [
      { name: "爆弾", maxCount: 6, maxLevel: 8 },
      { name: "ばねトラップ", maxCount: 8, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 6, maxLevel: 6 },
      { name: "巨大爆弾", maxCount: 6, maxLevel: 5 },
      { name: "ホーミング対空地雷", maxCount: 6, maxLevel: 3 },
      { name: "スケルトントラップ", maxCount: 3, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 10 },
      { name: "兵舎", maxCount: 1, maxLevel: 14 },
      { name: "ラボ", maxCount: 1, maxLevel: 10 },
      { name: "呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 9 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 6 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 5 },
      { name: "突破工房", maxCount: 1, maxLevel: 3 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 15 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 12 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 9 },
      { name: "金庫", maxCount: 4, maxLevel: 13 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 13 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 7 },
      { name: "クランの城", maxCount: 1, maxLevel: 8 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 65 },
      { name: "アーチャークイーン", maxLevel: 65 },
      { name: "ガーゴイルプリンス", maxLevel: 40 },
      { name: "グランドウォーデン", maxLevel: 40 }
    ]
  },
  {
    THLevel: "TH13",
    defenses: [
      { name: "大砲", maxCount: 7, maxLevel: 19 },
      { name: "アーチャータワー", maxCount: 8, maxLevel: 19 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 13 },
      { name: "対空砲", maxCount: 4, maxLevel: 11 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 13 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 5, maxLevel: 12 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 8 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 8 },
      { name: "インフェルノタワー", maxCount: 3, maxLevel: 7 },
      { name: "イーグル砲", maxCount: 1, maxLevel: 4 },
      { name: "ギガインフェルノ", maxCount: 1, maxLevel: 5 },
      { name: "投石機", maxCount: 2, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 7, maxLevel: 9 },
      { name: "ばねトラップ", maxCount: 9, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 6, maxLevel: 8 },
      { name: "巨大爆弾", maxCount: 6, maxLevel: 7 },
      { name: "ホーミング対空地雷", maxCount: 7, maxLevel: 4 },
      { name: "スケルトントラップ", maxCount: 3, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 11 },
      { name: "兵舎", maxCount: 1, maxLevel: 15 },
      { name: "ラボ", maxCount: 1, maxLevel: 11 },
      { name: "呪文工場", maxCount: 1, maxLevel: 7 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 10 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 7 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 6 },
      { name: "突破工房", maxCount: 1, maxLevel: 5 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 15 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 15 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 9 },
      { name: "金庫", maxCount: 4, maxLevel: 14 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 14 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 8 },
      { name: "クランの城", maxCount: 1, maxLevel: 9 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 75 },
      { name: "アーチャークイーン", maxLevel: 75 },
      { name: "ガーゴイルプリンス", maxLevel: 50 },
      { name: "グランドウォーデン", maxLevel: 50 },
      { name: "ロイヤルチャンピオン", maxLevel: 25 }
    ]
  },
  {
    THLevel: "TH14",
    defenses: [
      { name: "大砲", maxCount: 7, maxLevel: 20 },
      { name: "アーチャータワー", maxCount: 8, maxLevel: 20 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 14 },
      { name: "対空砲", maxCount: 4, maxLevel: 12 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 14 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 5, maxLevel: 13 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 9 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 9 },
      { name: "インフェルノタワー", maxCount: 3, maxLevel: 8 },
      { name: "イーグル砲", maxCount: 1, maxLevel: 5 },
      { name: "ギガインフェルノ", maxCount: 1, maxLevel: 5 },
      { name: "投石機", maxCount: 2, maxLevel: 3 },
      { name: "大工の小屋", maxCount: 5, maxLevel: 4 }
    ],
    traps: [
      { name: "爆弾", maxCount: 8, maxLevel: 10 },
      { name: "ばねトラップ", maxCount: 9, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 7, maxLevel: 9 },
      { name: "巨大爆弾", maxCount: 7, maxLevel: 8 },
      { name: "ホーミング対空地雷", maxCount: 8, maxLevel: 4 },
      { name: "スケルトントラップ", maxCount: 4, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 11 },
      { name: "兵舎", maxCount: 1, maxLevel: 16 },
      { name: "ラボ", maxCount: 1, maxLevel: 12 },
      { name: "呪文工場", maxCount: 1, maxLevel: 7 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 11 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 8 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 7 },
      { name: "突破工房", maxCount: 1, maxLevel: 6 },
      { name: "ペット小屋", maxCount: 1, maxLevel: 4 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 16 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 16 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 10 },
      { name: "金庫", maxCount: 4, maxLevel: 15 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 15 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 9 },
      { name: "クランの城", maxCount: 1, maxLevel: 10 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 80 },
      { name: "アーチャークイーン", maxLevel: 80 },
      { name: "ガーゴイルプリンス", maxLevel: 60 },
      { name: "グランドウォーデン", maxLevel: 55 },
      { name: "ロイヤルチャンピオン", maxLevel: 30 }
    ]
  },
  {
    THLevel: "TH15",
    defenses: [
      { name: "大砲", maxCount: 7, maxLevel: 21 },
      { name: "アーチャータワー", maxCount: 8, maxLevel: 21 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 15 },
      { name: "対空砲", maxCount: 4, maxLevel: 13 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 15 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 5, maxLevel: 14 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 10 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 10 },
      { name: "インフェルノタワー", maxCount: 3, maxLevel: 9 },
      { name: "イーグル砲", maxCount: 1, maxLevel: 6 },
      { name: "ギガインフェルノ", maxCount: 1, maxLevel: 5 },
      { name: "投石機", maxCount: 2, maxLevel: 4 },
      { name: "大工の小屋", maxCount: 5, maxLevel: 5 },
      { name: "呪文タワー", maxCount: 2, maxLevel: 3 },
      { name: "モノリス", maxCount: 1, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 8, maxLevel: 11 },
      { name: "ばねトラップ", maxCount: 9, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 7, maxLevel: 10 },
      { name: "巨大爆弾", maxCount: 7, maxLevel: 9 },
      { name: "ホーミング対空地雷", maxCount: 8, maxLevel: 5 },
      { name: "スケルトントラップ", maxCount: 4, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 12 },
      { name: "兵舎", maxCount: 1, maxLevel: 17 },
      { name: "ラボ", maxCount: 1, maxLevel: 13 },
      { name: "呪文工場", maxCount: 1, maxLevel: 8 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 11 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 9 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 8 },
      { name: "突破工房", maxCount: 1, maxLevel: 7 },
      { name: "ペット小屋", maxCount: 1, maxLevel: 8 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 16 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 16 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 10 },
      { name: "金庫", maxCount: 4, maxLevel: 16 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 16 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 10 },
      { name: "クランの城", maxCount: 1, maxLevel: 11 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 90 },
      { name: "アーチャークイーン", maxLevel: 90 },
      { name: "ガーゴイルプリンス", maxLevel: 70 },
      { name: "グランドウォーデン", maxLevel: 65 },
      { name: "ロイヤルチャンピオン", maxLevel: 40 }
    ]
  },
  {
    THLevel: "TH16",
    defenses: [
      { name: "大砲", maxCount: 7, maxLevel: 21 },
      { name: "アーチャータワー", maxCount: 8, maxLevel: 21 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 16 },
      { name: "対空砲", maxCount: 4, maxLevel: 14 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 16 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 5, maxLevel: 15 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 11 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 11 },
      { name: "インフェルノタワー", maxCount: 3, maxLevel: 10 },
      { name: "イーグル砲", maxCount: 1, maxLevel: 7 },
      { name: "投石機", maxCount: 2, maxLevel: 5 },
      { name: "大工の小屋", maxCount: 5, maxLevel: 6 },
      { name: "呪文タワー", maxCount: 2, maxLevel: 3 },
      { name: "モノリス", maxCount: 1, maxLevel: 3 },
      { name: "跳弾大砲", maxCount: 2, maxLevel: 2 },
      { name: "マルチアーチャータワー", maxCount: 2, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 8, maxLevel: 12 },
      { name: "ばねトラップ", maxCount: 9, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 7, maxLevel: 11 },
      { name: "巨大爆弾", maxCount: 7, maxLevel: 10 },
      { name: "ホーミング対空地雷", maxCount: 8, maxLevel: 6 },
      { name: "スケルトントラップ", maxCount: 4, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 12 },
      { name: "兵舎", maxCount: 1, maxLevel: 18 },
      { name: "ラボ", maxCount: 1, maxLevel: 14 },
      { name: "呪文工場", maxCount: 1, maxLevel: 8 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 11 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 10 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 9 },
      { name: "突破工房", maxCount: 1, maxLevel: 8 },
      { name: "ペット小屋", maxCount: 1, maxLevel: 10 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 16 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 16 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 10 },
      { name: "金庫", maxCount: 4, maxLevel: 17 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 17 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 11 },
      { name: "クランの城", maxCount: 1, maxLevel: 12 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 95 },
      { name: "アーチャークイーン", maxLevel: 95 },
      { name: "ガーゴイルプリンス", maxLevel: 80 },
      { name: "グランドウォーデン", maxLevel: 70 },
      { name: "ロイヤルチャンピオン", maxLevel: 45 }
    ]
  },
  {
    THLevel: "TH17",
    defenses: [
      { name: "大砲", maxCount: 3, maxLevel: 21 },
      { name: "アーチャータワー", maxCount: 5, maxLevel: 21 },
      { name: "迫撃砲", maxCount: 4, maxLevel: 17 },
      { name: "対空砲", maxCount: 4, maxLevel: 15 },
      { name: "ウィザードの塔", maxCount: 5, maxLevel: 17 },
      { name: "エアスイーパー", maxCount: 2, maxLevel: 7 },
      { name: "かくしテスラ", maxCount: 5, maxLevel: 16 },
      { name: "ボムタワー", maxCount: 2, maxLevel: 12 },
      { name: "巨大クロスボウ", maxCount: 4, maxLevel: 12 },
      { name: "インフェルノタワー", maxCount: 3, maxLevel: 10 },
      { name: "インフェルノ砲", maxCount: 1, maxLevel: 5 },
      { name: "投石機", maxCount: 2, maxLevel: 6 },
      { name: "大工の小屋", maxCount: 5, maxLevel: 6 },
      { name: "呪文タワー", maxCount: 2, maxLevel: 3 },
      { name: "モノリス", maxCount: 1, maxLevel: 3 },
      { name: "跳弾大砲", maxCount: 3, maxLevel: 3 },
      { name: "マルチアーチャータワー", maxCount: 3, maxLevel: 3 },
      { name: "マルチギアタワー", maxCount: 1, maxLevel: 2 },
      { name: "竜炎砲", maxCount: 2, maxLevel: 2 }
    ],
    traps: [
      { name: "爆弾", maxCount: 8, maxLevel: 13 },
      { name: "ばねトラップ", maxCount: 9, maxLevel: 5 },
      { name: "対空爆弾", maxCount: 7, maxLevel: 12 },
      { name: "巨大爆弾", maxCount: 8, maxLevel: 11 },
      { name: "ホーミング対空地雷", maxCount: 9, maxLevel: 7 },
      { name: "スケルトントラップ", maxCount: 4, maxLevel: 4 },
      { name: "トルネードトラップ", maxCount: 1, maxLevel: 3 },
      { name: "ギガ爆弾", maxCount: 1, maxLevel: 3 }
    ],
    armies: [
      { name: "アーミーキャンプ", maxCount: 4, maxLevel: 12 },
      { name: "兵舎", maxCount: 1, maxLevel: 18 },
      { name: "ラボ", maxCount: 1, maxLevel: 15 },
      { name: "呪文工場", maxCount: 1, maxLevel: 8 },
      { name: "闇の兵舎", maxCount: 1, maxLevel: 11 },
      { name: "ヒーローホール", maxCount: 1, maxLevel: 11 },
      { name: "闇の呪文工場", maxCount: 1, maxLevel: 6 },
      { name: "鍛冶屋", maxCount: 1, maxLevel: 9 },
      { name: "突破工房", maxCount: 1, maxLevel: 8 },
      { name: "ペット小屋", maxCount: 1, maxLevel: 10 }
    ],
    resources: [
      { name: "金山", maxCount: 7, maxLevel: 16 },
      { name: "エリクサーポンプ", maxCount: 7, maxLevel: 16 },
      { name: "ダークエリクサーポンプ", maxCount: 3, maxLevel: 10 },
      { name: "金庫", maxCount: 4, maxLevel: 18 },
      { name: "エリクサータンク", maxCount: 4, maxLevel: 18 },
      { name: "ダークエリクサータンク", maxCount: 1, maxLevel: 12 },
      { name: "クランの城", maxCount: 1, maxLevel: 13 }
    ],
    heroes: [
      { name: "バーバリアンキング", maxLevel: 100 },
      { name: "アーチャークイーン", maxLevel: 100 },
      { name: "ガーゴイルプリンス", maxLevel: 90 },
      { name: "グランドウォーデン", maxLevel: 75 },
      { name: "ロイヤルチャンピオン", maxLevel: 50 }
    ]
  }
]