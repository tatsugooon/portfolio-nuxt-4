import type { Company } from '~/types/career'

export const careerHistory: Company[] = [
  {
    id: 'tential',
    name: '株式会社TENTIAL',
    period: '2023年8月-現在',
    description: 'リカバリーウェア「BAKUNE」をはじめとするコンディショニング製品の開発・販売を通じて「健康に前向きな社会を創り、人類のポテンシャルを引き出す」ことを目指すウェルネス・ヘルステック企業。2025年2月東証グロース上場。',
    projects: [
      {
        id: 'tential-ec',
        title: 'フルスクラッチECサイト開発',
        role: '6名/EM, PM',
        environment: {
          '言語': 'GraphQL, TypeScript, Nuxt.js'
        },
        description: [
          'フルスクラッチのECサイト開発。優位性のある新機能開発から顧客の声を反映した機能改善まで、自社データとAIを最大限に活用したデータドリブンな開発を行う。',
          'チームリーダーとしてメンバーの育成とチーム運営にも取り組む。',
        ]
      }
    ]
  },
  {
    id: 'real-estate',
    name: 'リマールエステート株式会社',
    period: '2022年10月-2023年7月',
    description: 'BtoBにおける不動産業務のDX推進を目的とした、非公開の不動産の売買を支援するプラットフォームを開発・提供する不動産テック企業。',
    projects: [
      {
        id: 'real-estate-system',
        title: '不動産売買システム開発',
        role: '3名/PM',
        environment: {
          '言語': 'React, Nest.js, Nuxt.js, TypeScript, Python',
          'OS': 'Mac',
          '管理ツール': 'Backlog'
        },
        description: [
          '現行システムの保守改修をしながら、リプレース作業を行う。（バックエンド：Python→Nest.js、フロントエンド：Nuxt2系+TypeScript→React+TypeScript）'
        ]
      }
    ]
  },
  {
    id: 'notespace',
    name: '株式会社ノートスペース',
    period: '2019年7月-2022年9月',
    description: '不動産、医療、エンタメ、教育など幅広いジャンルのWEBシステム・アプリの請負開発実績があり、可用性と汎用性の高いインフラ構成のノウハウも豊富。',
    projects: [
      {
        id: 'notespace-property',
        title: '不動産管理システムおよび利用者用アプリ開発',
        period: '2021年11月-2022年7月',
        role: '6名/PM',
        environment: {
          '言語': 'Nuxt.js, TypeScript, Python',
          'OS': 'Mac',
          '管理ツール': 'Backlog'
        },
        description: [
          '管理会社向けの不動産管理システムと、それに連携した物件所有者・居住者向けのスマートフォンアプリの開発。アジャイル開発で顧客の細かい要望に応えつつ機能改善の提案も積極的に行い、依頼された以上の成果を収めた。'
        ]
      },
      {
        id: 'notespace-energy',
        title: '大手エネルギー会社 家事代行サービス開発',
        period: '2021年9月-2021年10月',
        role: '6名/SE',
        environment: {
          '言語': 'Nuxt.js, TypeScript, Nest.js',
          'OS': 'Mac'
        },
        description: [
          '納品前のサービスのスタイル実装・UI改善・リファクタリングを担当。',
          'サービス開始に伴い対象地域（広島県）へ出張し、リリース立ち会いやトラブル対応を行った。'
        ]
      },
      {
        id: 'notespace-school',
        title: '私立中学・高等学校 公式サイト開発',
        period: '2021年6月-2021年10月',
        role: '1名/SE',
        environment: {
          '言語': 'Nuxt.js, TypeScript, Nest.js',
          'OS': 'Mac'
        },
        description: [
          '学校公式サイトのリニューアルに伴い、WordPressから弊社自作CMSに移行。',
          '生徒ログインの機構を追加し、実際の先生や生徒・保護者の声を反映しながら、オペレーションに沿ったシステムを実現した。'
        ]
      },
      {
        id: 'notespace-property-sales',
        title: '不動産売買支援システム開発',
        period: '2020年4月-2021年1月',
        role: '5名/SE',
        environment: {
          '言語': 'Nuxt.js, TypeScript, Python',
          'OS': 'Mac'
        },
        description: [
          '不動産オーナーと投資家をマッチングするサービスの開発。',
          '物件や顧客の数が多く、フロントエンドとバックエンド両方のパフォーマンス改善が求められ、高速化の知見を深めた。'
        ]
      },
      {
        id: 'notespace-english',
        title: '大手新聞社 英語学習サービス開発',
        period: '2019年8月-2019年12月',
        role: '2名/SE',
        environment: {
          '言語': 'Nuxt.js, TypeScript, Python 3',
          'OS': 'Mac'
        },
        description: [
          '英語ニュース音読アプリ（自社製の既存iOSアプリ）のWEB版への移植開発。',
          'SEとして企画から設計の打合せ、開発、試験まで全般を行った。'
        ]
      },
      {
        id: 'notespace-resort',
        title: '大手リゾートホテル運営会社 予約システム開発',
        period: '2019年7月-2020年3月',
        role: '10名/PG',
        environment: {
          '言語': 'Nuxt.js, TypeScript, Angular.js, CoffeeScript, Java',
          'OS': 'Mac, Windows',
          '管理ツール': 'Trello, Backlog, Kintone'
        },
        description: [
          '施設の情報、空室状況を横断的に検索できるサービス、および宿泊予約サービスの開発。',
          'スクラム開発を本格的に導入しているチームに参画し、フロント開発や試験を行う。'
        ]
      },
      {
        id: 'notespace-anime',
        title: 'TVアニメ公式サイト制作・運用',
        period: '2019年7月-2022年9月',
        role: '1-2名/PM',
        environment: {
          '言語': 'React, TypeScript, Python, Nest.js, PHP（WordPress）',
          'OS': 'Mac'
        },
        description: [
          '複数のアニメ公式サイトの制作と運用を担当。',
          '短い製作期間の中、デザイン性・更新頻度・同時アクセス負荷の高さに耐えられるWEBサイトを確実に提供している。ニュースやストーリー情報の更新に独自CMSを使用。'
        ]
      }
    ]
  },
  {
    id: 'crest',
    name: '株式会社クレスト',
    period: '2017年4月-2019年6月',
    description: 'ソフトウェア開発会社。客先常駐業務をメインに、自社製品開発も行う。',
    projects: [
      {
        id: 'crest-government',
        title: '官庁向け大規模ネットワークシステム開発',
        period: '2019年3月-2019年6月',
        role: '30名/PG',
        environment: {
          '言語': 'C# 7, PowerShell',
          'OS': 'Windows'
        },
        description: [
          '官庁内大規模ネットワークにおける、動静監視システムの開発。',
          '既存のJavaソースをC#/SharePointで再構成。セキュアなバックエンド構成について理解を深める。'
        ]
      },
      {
        id: 'crest-energy',
        title: '大型工場向けエネルギー管理システム開発',
        period: '2018年7月-2019年2月',
        role: '6名/PG',
        environment: {
          '言語': 'Java 10/JSP, jQuery 3',
          'OS': 'Windows'
        },
        description: [
          '短期間・少人数のチームでフロントエンド経験者がいない中、JSP部分のUI設計と、非同期（Ajax）通信部分の開発を担う。',
          '機能設計から客先レビュー、プログラム、結合試験まで携わり、全般的な開発業務を経験する。'
        ]
      },
      {
        id: 'crest-line',
        title: 'LINE@連携 WEB予約システム',
        period: '2018年4月-2018年6月',
        role: '4名/PG',
        environment: {
          '言語': 'PHP 7.2, HTML/CSS',
          'OS': 'Windows, Linux'
        },
        description: [
          '自社製品として、医院や小売業をターゲットとしたWEB予約システムの開発。',
          'UI仕様とデザインモック作成、Illustratorでのアイコン作成を手掛ける。'
        ]
      },
      {
        id: 'crest-infrastructure',
        title: '公共インフラ業の地図システム開発/保守',
        period: '2017年7月-2018年6月',
        role: '1名/PG',
        environment: {
          '言語': 'C# 5.0, JavaScript',
          'OS': 'Windows',
          '管理ツール': 'Salesforce'
        },
        description: [
          '地理空間情報ソフト、タッチパネル機器組み込みソフトにおける保守改修。',
          '新卒で初めての現場だったが、既存開発メンバーも不在で開発資料もなくリバースエンジニアリングを行いながら一人で保守・開発を担い、課題解決やタスク管理の能力を磨く。'
        ]
      }
    ]
  }
]
