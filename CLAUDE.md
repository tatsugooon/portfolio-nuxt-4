# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際にClaude Code (claude.ai/code)にガイダンスを提供します。

## プロジェクト概要

Nuxt 4で構築された依田達哉の個人ポートフォリオサイトです。職歴、プロジェクト、GSAPを使用したアニメーションを特徴とする静的ウェブサイトです。日本のIT業界でのウェブ開発スキルとキャリアの進歩を紹介することを目的としています。

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番用ビルド
npm run build

# 静的ファイル生成
npm run generate

# 本番ビルドのプレビュー
npm run preview

# Nuxtの準備（インストール後実行）
npm run postinstall
```

## アーキテクチャと構造

### 技術スタック
- **フレームワーク**: Nuxt 4
- **TypeScript**: 厳密な型付けを伴う完全なTypeScriptサポート
- **UIフレームワーク**: カスタムテーマ設定を持つNuxt UI
- **スタイリング**: カスタムカラースキームを持つTailwind CSS
- **フォント**: Google Fonts (Oswald, Sawarabi Gothic)
- **アニメーション**: 微妙なアニメーション用のGSAP
- **リンティング**: Nuxt設定を使用するESLint

### 主要ディレクトリ
- `pages/` - ファイルベースルーティング (index.vue, career.vue)
- `components/` - 再利用可能なVueコンポーネント (Navbar.vue)
- `data/` - 静的データファイル (職歴を含むcareer.ts)
- `types/` - TypeScript型定義 (career.ts)
- `assets/` - ソースアセット (CSS、画像)
- `public/` - 直接配信される静的ファイル

### 設定ファイル
- `nuxt.config.ts` - モジュールとメタ設定を含むメインNuxt設定
- `app.config.ts` - アプリ固有の設定 (UIフォント)
- `eslint.config.mjs` - Nuxtデフォルトを拡張するESLint設定
- `tsconfig.json` - TypeScript設定 (Nuxt生成設定を参照)

## データ構造

### 職歴データ (`data/career.ts`)
職歴は企業の配列として構造化されており、各企業は以下を含みます：
- 企業情報（名前、期間、説明）
- 詳細な技術情報を含むプロジェクト配列
- 環境仕様（言語、OS、ツール）

### 型定義 (`types/career.ts`)
以下の包括的なTypeScriptインターフェース：
- `Company` - 企業と雇用の詳細
- `Project` - 個別プロジェクト情報
- `Environment` - 技術スタック情報

## スタイリングとテーマ

### カスタムテーマ設定
- カラーモードを無効にしたNuxt UIを使用
- カスタムカラースキーム：primary、accent、background
- Google Fontsモジュールを通じたフォント統合
- Tailwindユーティリティを使用したレスポンシブデザイン

### カラーモード
Nuxt UI設定でカラーモードが明示的に無効化（`colorMode: false`）されており、固定カラースキームを示しています。

## 開発ノート

### 言語サポート
コンテンツは主に日本語で、対象読者と市場を反映しています。

### パフォーマンスの考慮事項
最適なパフォーマンスとホスティング互換性のため、静的生成（`npm run generate`）を使用しています。

### アセット管理
画像は`assets/img/`（処理済み）と`public/assets/img/`（静的）の両方のディレクトリで整理されています。

## リンティングとコード品質

プロジェクトはNuxtの推奨設定でESLintを使用します。コード品質を保証するため、コミット前にリンティングを実行してください。

```bash
npx eslint .
```

## デプロイメント

サイトは任意の静的ファイルサーバーでのホスティングに適した静的ファイルを生成します。本番URLは`https://t-hsn.com/portfolio/`でホストされています。