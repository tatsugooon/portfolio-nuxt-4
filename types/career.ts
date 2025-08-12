// 職務経歴の型定義

export interface Project {
  id: string
  title: string
  period?: string
  role: string
  environment: Record<string, string>
  description: string[]
}

export interface Company {
  id: string
  name: string
  period: string
  description: string
  projects: Project[]
}

export interface CareerHistory {
  companies: Company[]
}

// 開発環境の型定義
export interface Environment {
  '言語'?: string
  'OS'?: string
  '管理ツール'?: string
  'フレームワーク'?: string
  'データベース'?: string
  'インフラ'?: string
  [key: string]: string | undefined
}

// プロジェクト期間の型定義
export interface ProjectPeriod {
  start: string
  end?: string
}

// 会社情報の型定義
export interface CompanyInfo {
  id: string
  name: string
  industry: string
  description: string
  website?: string
}
