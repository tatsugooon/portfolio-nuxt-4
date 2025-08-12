<template>
  <div class="min-h-screen bg-background text-primary flex items-center justify-center">
    <div class="text-center max-w-md mx-auto px-4">
      <div class="mb-8">
        <UIcon 
          :name="error.statusCode === 404 ? 'i-heroicons-exclamation-triangle' : 'i-heroicons-exclamation-circle'" 
          class="w-24 h-24 mx-auto text-primary/60 mb-4" 
        />
        <h1 class="text-6xl font-bold font-oswald mb-4">{{ error.statusCode }}</h1>
        <h2 class="text-2xl font-bold font-oswald mb-4">
          {{ error.statusCode === 404 ? 'ページが見つかりません' : 'エラーが発生しました' }}
        </h2>
        <p class="text-lg mb-8 text-primary/80">
          {{ error.message || '申し訳ございませんが、お探しのページは存在しないか、移動された可能性があります。' }}
        </p>
      </div>
      
      <div class="space-y-4">
        <button 
          @click="handleError" 
          class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          ホームに戻る
        </button>
        
        <div class="flex justify-center space-x-4">
          <a 
            href="https://t-hsn.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary/70 hover:text-primary transition-colors flex items-center gap-2"
          >
            <UIcon name="i-heroicons-globe-alt" class="w-5 h-5" />
            HASH TRIP
          </a>
          <a 
            href="https://tech.t-hsn.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary/70 hover:text-primary transition-colors flex items-center gap-2"
          >
            <UIcon name="i-heroicons-code-bracket" class="w-5 h-5" />
            HASH TECH
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  error: {
    statusCode: number
    message: string
  }
}

const props = defineProps<ErrorProps>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
