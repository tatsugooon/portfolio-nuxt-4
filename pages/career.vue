<template>
  <div class="min-h-screen bg-white text-gray-800 animate-fade-in">
    <!-- メインコンテンツ -->
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- ヘッダー -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">
          <UIcon name="i-heroicons-code-bracket" class="text-primary mr-3 w-8 h-8" />
          職務経歴書
        </h1>
        <p class="text-right text-gray-600">
          2025年8月現在
        </p>
      </div>
      
      <!-- プロフィール -->
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">｛ プロフィール ｝</h2>

      <blockquote class="my-6 p-6 bg-gray-50 rounded-lg">
        開発経験7年目のフルスタックエンジニアとして、技術とビジネスの両面から価値創造とチームビルディングに取り組んでいます。<br />
        大規模システム開発から自社プロダクト開発まで幅広い領域で経験を積み、PG → SE → PMとしてキャリアを発展させてきました。<br />
        不動産・教育・医療・ECなどの多様なドメインで、技術選定からチームマネジメント、プロダクト設計、クロージングまで一気通貫で担当。<br />
        現在はフルスクラッチECサイト開発チームのリーダーとして、開発とデータドリブン（自社蓄積データとN1分析）なプロダクト改善を推進し、事業成長に直結する技術的価値を提供しています。
      </blockquote>
      
      <!-- プロフィールテーブル -->
      <div class="space-y-6">
        <table class="w-full border-collapse">
          <tbody>
            <tr class="border-b border-gray-200">
              <th class="w-1/4 bg-primary text-white p-3 text-left font-semibold">名前</th>
              <th class="w-1/4 bg-primary text-white p-3 text-left font-semibold">生年月日</th>
              <th class="w-1/4 bg-primary text-white p-3 text-left font-semibold">趣味</th>
              <th class="w-1/4 bg-primary text-white p-3 text-left font-semibold">WEBサイト</th>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-3" data-label="名前">
                <small class="text-gray-600">よだ たつや</small><br />
                <span class="text-xl font-bold">依田 達哉</span><br />
              </td>
              <td class="p-3" data-label="生年月日">
                1994年11月1日
                （{{ age }}歳）
              </td>
              <td class="p-3" data-label="趣味">
                写真、育児
              </td>
              <td class="p-3" data-label="WEBサイト">
                HASH TRIP
                <small class="block">
                  (<a href="https://t-hsn.com/" class="text-primary hover:underline">
                    t-hsn.com
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 inline-block ml-1" />
                  </a>)
                </small>
                HASH TECH
                <small class="block">
                  (<a href="https://tech.t-hsn.com/" class="text-primary hover:underline">
                    tech.t-hsn.com
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 inline-block ml-1" />
                  </a>)
                </small>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full border-collapse">
          <tbody>
            <tr class="border-b border-gray-200">
              <th class="w-1/2 bg-primary text-white p-3 text-left font-semibold">得意なこと</th>
              <th class="w-1/2 bg-primary text-white p-3 text-left font-semibold">資格</th>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-3" data-label="得意なこと">
                <ul class="list-disc list-inside space-y-1">
                  <li>エンジニアマネジメント</li>
                  <li>事業課題の本質改善</li>
                  <li>UI/UXデザインとマークアップ</li>
                  <li>画像・動画編集</li>
                  <li>AIを活用した開発・業務効率化</li>
                </ul>
              </td>
              <td class="p-3" data-label="資格">
                <ul class="list-disc list-inside space-y-1">
                  <li>応用情報技術者試験</li>
                  <li>ウェブデザイン技能検定 3級</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 class="text-xl font-bold text-center mb-4 relative p-2">
          フレームワーク・経験技術
          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </h3>
        
        <table class="w-full border-collapse">
          <tbody>
            <tr class="border-b border-gray-200">
              <th class="bg-primary text-white p-3 text-left font-semibold">言語・フレームワーク</th>
              <th class="bg-primary text-white p-3 text-left font-semibold">AWS</th>
              <th class="bg-primary text-white p-3 text-left font-semibold">デザイン/編集</th>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-3" data-label="言語・フレームワーク">
                <ul class="list-disc list-inside space-y-1">
                  <strong>フロントエンド</strong>
                  <li>TypeScript</li>
                  <li>Vue.js (2, 3)</li>
                  <li>Nuxt.js (2, 3, 4)</li>
                  <li>React</li>
                  <strong>バックエンド</strong>
                  <li>Next.js</li>
                  <li>urql（GraphQL）</li>
                  <strong>データベース</strong>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </td>
              <td class="p-3" data-label="AWS">
                <ul class="list-disc list-inside space-y-1">
                  <li>Route53</li>
                  <li>CloudFront</li>
                  <li>EC2</li>
                  <li>ECS</li>
                  <li>ALB</li>
                  <li>SES</li>
                  <li>S3</li>
                  <li>RDS</li>
                  <li>Lambda</li>
                  <li>CloudWatch</li>
                </ul>
              </td>
              <td class="p-3" data-label="デザイン/編集">
                <ul class="list-disc list-inside space-y-1">
                  <strong>UI/UXデザイン</strong>
                  <li>Adobe XD</li>
                  <li>Figma</li>
                  <strong>画像編集</strong>
                  <li>Adobe Lightroom</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <strong>動画編集</strong>
                  <li>Adobe After Effects</li>
                  <li>Adobe Premiere Pro</li>
                  <li>AviUtl</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 職務経歴 -->
      <h2 class="text-2xl font-bold text-center my-8 text-gray-800">｛ 職務経歴 ｝</h2>

      <!-- 職務経歴をループで表示 -->
      <section v-for="(company, index) in careerHistory" :key="company.id" class="mb-8">
        <h3 :class="['text-xl font-bold text-center mb-2 relative p-2', { 'mt-16': index > 0 }]">
          {{ company.name }}
          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </h3>
        <p class="text-center font-bold text-gray-800 mb-4">{{ company.period }}</p>
        <blockquote class="my-6 p-6 bg-gray-50 rounded-lg">{{ company.description }}</blockquote>

        <div v-for="project in company.projects" :key="project.id" class="mb-6">
          <h4 class="flex justify-between items-center mt-6 mb-2 pb-2 border-b-2 border-primary">
            <span class="text-lg font-semibold">{{ project.title }}</span>
            <small v-if="project.period" class="text-sm font-bold text-gray-800">{{ project.period }}</small>
          </h4>
          <table class="w-full border-collapse">
            <tbody>
              <tr class="border-b border-gray-200">
                <th class="w-1/5 bg-primary text-white p-2 text-left font-semibold">規模/役割</th>
                <td class="w-4/5 p-2" data-label="規模/役割">{{ project.role }}</td>
              </tr>
              <tr class="border-b border-gray-200">
                <th class="bg-primary text-white p-2 text-left font-semibold">開発環境</th>
                <td class="p-2" data-label="開発環境">
                  <div v-for="(env, key) in project.environment" :key="key" class="mb-1">
                    【{{ key }}】 {{ env }}
                  </div>
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <th class="bg-primary text-white p-2 text-left font-semibold">業務内容</th>
                <td class="p-2" data-label="業務内容">
                  <div v-for="(content, index) in project.description" :key="index" class="mb-2">
                    {{ content }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Company } from '~/types/career'
import { careerHistory as careerData } from '~/data/career'

const age = ref(0)

// 職務経歴データ
const careerHistory = ref<Company[]>(careerData)

onMounted(() => {
  // 年齢計算
  const birthday = { year: 1994, month: 11, date: 1 }
  const getAge = (birthday: { year: number, month: number, date: number }) => {
    const today = new Date()
    const thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date)
    let age = today.getFullYear() - birthday.year
    if (today < thisYearsBirthday) age--
    return age
  }
  age.value = getAge(birthday)
})
</script>

<style scoped>
/* レスポンシブ対応 */
@media screen and (max-width: 640px) {
  table th {
    display: none;
  }
  
  table tr, table td {
    display: block;
    width: 100%;
    position: relative;
  }
  
  table td:before {
    content: attr(data-label);
    background: #2581c4;
    color: white;
    font-weight: bold;
    height: 40px;
    padding: 10px;
    display: block;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 4px;
  }
  
  table tr {
    margin-bottom: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
  }
  
  table.main th,
  table.main td {
    border: none;
    padding: 0;
  }
}
</style>