<template>
  <div class="bg-background text-primary overflow-x-hidden">
    <Navbar />
    <canvas ref="cursorCanvas" class="cursor-particles" aria-hidden="true" />
    <div class="hero h-screen w-screen flex justify-center items-center relative isolate overflow-hidden">
      <div class="hero-video" aria-hidden="true">
        <iframe
          v-if="pageOrigin"
          :src="heroVideoUrl"
          title="AutumnLeaves video background"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          tabindex="-1"
        />
      </div>
      <div class="hero-wash" aria-hidden="true" />
      <h1 id="title" class="relative z-10 text-5xl leading-normal text-center font-oswald text-primary">
        <span class="s">SYSTEM</span> <span class="s">ENGINEER</span> <span class="s">/</span> <span class="s">DIRECTOR</span>
        <br />
        <span class="s">WEB</span> <span class="s">CREATOR</span>
        <br />
        <span class="s">YODA</span> <span class="s">TATSUYA</span>
      </h1>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-sm text-primary/70">
        <div class="flex items-center gap-2">
          <UIcon name="i-simple-icons-nuxtdotjs" class="w-4 h-4" />
          Built with Nuxt 4
        </div>
        <a href="https://github.com/tatsugooon" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
          <UIcon name="i-simple-icons-github" class="w-4 h-4" />
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-20 py-20 mx-auto max-w-2xl relative">
      <section id="about" class="fade-up z-10">
        <img src="/assets/img/ellipse-1.svg" alt="ellipce" id="ellipce-1" class="z-[-1] absolute w-[30vw] min-w-[300px] right-[50vw]" />
        <div id="section-content-1" class="flex flex-col items-center mx-4 my-8 gap-8">
          <h2 class="text-3xl font-oswald">About.</h2>
          <div class="text-left flex gap-8 mx-auto">
            <div class="w-48 object-cover">
              <img src="/assets/img/profile_icon.jpg" alt="Yoda Tatsuya" class="rounded-xl" />
            </div>
            <div class="flex flex-col items-start gap-4">
              <h3 class="font-bold text-xl">依田 達哉</h3>
              <div>
                <h4 class="text-sm">Occupation</h4>
                <p>
                  開発 / ディレクション / プロジェクトマネジメント
                  <br />
                  UI/UXデザイン / 写真撮影 / 動画編集
                </p>
              </div>
              <div>
                <h4 class="text-sm">Development</h4>
                <p>Vue.js / Nuxt.js / React / TypeScript / Python / PHP</p>
              </div>
              <div>
                <h4 class="text-sm">Video Editing</h4>
                <p>サプライズムービー / 結婚式余興ムービー / ゲームOP・PV</p>
              </div>
              <div>
                <h4 class="text-sm">Certification</h4>
                <p>応用情報技術者試験 / WEBデザイン検定3級</p>
              </div>
            </div>
          </div>
          <p class="bg-white/30 p-4">
            私は山梨県在住のWEBエンジニア・クリエイターです。2児の父。
            <br />
            WEBシステムもビデオコンテンツも、クライアントの望んだものが実際に見る人の望むものとは限りません。
            <br />
            ストーリーを重視して明確かつシンプルに構成することを心がけています。
          </p>
          <NuxtLink to="/career" class="underline flex gap-2">
            More Profile
            <img src="/assets/img/arrow.svg" alt="arrow" />
          </NuxtLink>
        </div>
      </section>
      <section id="works" class="fade-up z-10">
        <img src="/assets/img/ellipse-2.svg" alt="ellipce" id="ellipce-2" class="z-[-1] absolute w-[40vw] min-w-[300px] left-[50vw]" />
        <div id="section-content-2" class="flex flex-col items-center mx-4 my-8 gap-8">
          <h2 class="text-3xl font-oswald">Works.</h2>
          <div class="flex flex-col items-center">
            <div class="w-full flex justify-center items-center gap-8">
              <div class="flex shrink-0 justify-center w-30 h-48">
                <img src="/assets/img/mockup/HASH-TRIP.png" alt="HASH TRIP" />
              </div>
              <div class="flex-grow">
                <h3 class="text-xl">HASH TRIP</h3>
                <p>Trip information and trivia blog in Japan and 9 countries around the world</p>
                <p>日本国内・世界9カ国の旅情報や雑学のブログ</p>
                <a href="https://t-hsn.com/" class="underline flex gap-2">
                  View<img src="/assets/img/arrow.svg" alt="arrow" />
                </a>
              </div>
            </div>
            <div class="w-full flex justify-center items-center gap-8 md:-mt-8">
              <div class="flex-grow">
                <h3 class="text-xl">HASH TECH</h3>
                <p>Knowledge and technology sharing site for engineers</p>
                <p>エンジニアのための知識・技術共有サイト</p>
                <a href="https://tech.t-hsn.com/" class="underline flex gap-2">View<img src="/assets/img/arrow.svg" alt="arrow" /></a>
              </div>
              <div class="flex shrink-0 justify-center w-30 h-48">
                <img src="/assets/img/mockup/HASH-TECH.png" alt="HASH TECH" />
              </div>
            </div>
            <!-- <div class="w-full flex justify-center items-center gap-8 md:-mt-8">
              <div class="flex shrink-0 justify-center w-30 h-48">
                <img src="/assets/img/mockup/Riwa.png" alt="Riwa" />
              </div>
              <div class="flex-grow">
                <h3 class="text-xl">Riwa</h3>
                <p>Accessories brand Official web site</p>
                <p>アクセサリーブランド 『Riwa』 公式サイト</p>
                <a href="https://riwa.jp/" class="underline flex gap-2">View<img src="/assets/img/arrow.svg" alt="arrow" /></a>
              </div>
            </div> -->
          </div>
        </div>
      </section>
      <section id="video" class="fade-up z-10">
        <img src="/assets/img/ellipse-3.svg" alt="ellipce" id="ellipce-3" class="z-[-1] absolute w-[30vw] min-w-[300px] right-[50vw]" />
        <div id="section-content-3" class="flex flex-col items-center mx-4 my-8 gap-8">
          <h2 class="text-3xl font-oswald">Video.</h2>
          <div class="flex flex-col md:flex-row justify-start items-center gap-8 w-full">
            <div class="w-64">
              <iframe width="256" height="144" src="https://www.youtube.com/embed/jQL02mu0AFI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div>
              <h3>#1 AutumnLeaves</h3>
              <a href="https://www.youtube.com/watch?v=jQL02mu0AFI&t=1s" class="underline flex gap-2">View<img src="/assets/img/arrow.svg" alt="arrow" /></a>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-start items-center gap-8 w-full">
            <div class="w-64">
              <iframe width="256" height="144" src="https://www.youtube.com/embed/zL8imA_s7Kw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div>
              <h3>#2 Mt. Fuji</h3>
              <a href="https://www.youtube.com/watch?v=zL8imA_s7Kw" class="underline flex gap-2">View<img src="/assets/img/arrow.svg" alt="arrow" /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="experiences" class="fade-up z-10">
        <img src="/assets/img/ellipse-4.svg" alt="ellipce" id="ellipce-4" class="z-[-1] absolute w-[30vw] min-w-[300px] left-[50vw]" />
        <div id="section-content-4" class="flex flex-col items-center mx-4 my-8 gap-8">
          <h2 class="text-3xl font-oswald">Experiences.</h2>
          <div class="max-w-xs w-full">
            <h3 class="text-sm">株式会社TENTIAL</h3>
            <p class="text-xl">System Engineer</p>
            <p class="text-sm">2023 -</p>
          </div>
          <div class="max-w-xs w-full">
            <h3 class="text-sm">リマールエステート株式会社</h3>
            <p class="text-xl">Project manager and ui designer</p>
            <p class="text-sm">2022 - 2023</p>
          </div>
          <div class="max-w-xs w-full">
            <h3 class="text-sm">株式会社ノートスペース</h3>
            <p class="text-xl">System Engineer</p>
            <p class="text-sm">2019 - 2022</p>
          </div>
          <div class="max-w-xs w-full">
            <h3 class="text-sm">株式会社クレスト</h3>
            <p class="text-xl">Programmer</p>
            <p class="text-sm">2017 - 2019</p>
          </div>
        </div>
      </section>
      <section id="contact" class="flex flex-col items-center my-8 gap-8 fade-up">
        <h2 class="text-3xl font-oswald">Contact.</h2>
        <div>
          <a href="https://t-hsn.com/form/" class="underline flex gap-2 mb-8">Contact form<img src="/assets/img/arrow.svg" alt="arrow" /></a>
          <div class="flex justify-center items-center gap-2">
            <p>Social</p>
            <a href="https://www.instagram.com/tatsugooon/">
              <img src="/assets/img/icon/instagram.svg" alt="Instagram">
            </a>
            <a href="https://twitter.com/tatsugooon">
              <img src="/assets/img/icon/twitter.svg" alt="Twitter">
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const pageOrigin = ref('')
const cursorCanvas = ref<HTMLCanvasElement | null>(null)
type CursorParticle = { x: number, y: number, vx: number, vy: number, radius: number, life: number, maxLife: number, tone: string, phase: number, wobble: number, opacity: number }
let cursorParticles: CursorParticle[] = []
let cursorFrame = 0
let cursorContext: CanvasRenderingContext2D | null = null
let cursorMotionAllowed = true
let lastPointer = { x: 0, y: 0 }
const heroVideoUrl = computed(() => {
  const params = new URLSearchParams({
    si: 'mzK3Jevj-sWkzt9T',
    autoplay: '1',
    mute: '1',
    controls: '0',
    loop: '1',
    playlist: 'jQL02mu0AFI',
    playsinline: '1',
    rel: '0',
    origin: pageOrigin.value,
  })
  return `https://www.youtube.com/embed/jQL02mu0AFI?${params.toString()}`
})

onMounted(() => {
  pageOrigin.value = window.location.origin
  setupCursorParticles()
  gsap.registerPlugin(ScrollTrigger)
  setAnimation()
})

onUnmounted(() => {
  cancelAnimationFrame(cursorFrame)
  window.removeEventListener('pointermove', emitCursorParticles)
  window.removeEventListener('resize', resizeCursorCanvas)
})

function resizeCursorCanvas() {
  const canvas = cursorCanvas.value
  if (!canvas || !cursorContext) return
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  canvas.width = Math.round(window.innerWidth * dpr)
  canvas.height = Math.round(window.innerHeight * dpr)
  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`
  cursorContext.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function setupCursorParticles() {
  const canvas = cursorCanvas.value
  if (!canvas) return
  cursorContext = canvas.getContext('2d')
  if (!cursorContext) return
  cursorMotionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resizeCursorCanvas()
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursorMotionAllowed) {
    window.addEventListener('pointermove', emitCursorParticles, { passive: true })
    window.addEventListener('resize', resizeCursorCanvas, { passive: true })
    cursorFrame = requestAnimationFrame(drawCursorParticles)
  }
}

function emitCursorParticles(event: PointerEvent) {
  if (event.pointerType === 'touch') return
  const dx = event.clientX - lastPointer.x
  const dy = event.clientY - lastPointer.y
  const distance = Math.hypot(dx, dy)
  const count = Math.min(9, Math.max(2, Math.ceil(distance / (7 + Math.random() * 12))))
  for (let i = 0; i < count; i++) {
    const alongTrail = Math.random()
    cursorParticles.push({
      x: lastPointer.x + dx * alongTrail + (Math.random() - 0.5) * 18,
      y: lastPointer.y + dy * alongTrail + (Math.random() - 0.5) * 18,
      vx: (Math.random() - 0.5) * 1.4 - dx * (0.004 + Math.random() * 0.012),
      vy: (Math.random() - 0.5) * 1.4 - dy * (0.004 + Math.random() * 0.012),
      radius: Math.random() ** 0.7 * 8 + 2,
      life: 1,
      maxLife: Math.random() * 72 + 28,
      tone: Math.random() > 0.5 ? '249, 205, 117' : '116, 166, 167',
      phase: Math.random() * Math.PI * 2,
      wobble: Math.random() * 0.09 + 0.015,
      opacity: Math.random() * 0.3 + 0.55,
    })
  }
  if (cursorParticles.length > 360) cursorParticles.splice(0, cursorParticles.length - 360)
  lastPointer = { x: event.clientX, y: event.clientY }
}

function drawCursorParticles() {
  const ctx = cursorContext
  if (!ctx) return
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  cursorParticles = cursorParticles.filter((particle) => {
    particle.x += particle.vx
    particle.y += particle.vy
    particle.phase += particle.wobble
    particle.x += Math.sin(particle.phase) * 0.35
    particle.y += Math.cos(particle.phase * 0.8) * 0.3
    particle.vx *= 0.975 + Math.random() * 0.018
    particle.vy *= 0.975 + Math.random() * 0.018
    particle.life -= 1 / particle.maxLife
    if (particle.life <= 0) return false
    const fade = Math.sin(Math.PI * particle.life) ** 0.65
    const pulse = 0.78 + Math.sin(particle.phase * 1.7) * 0.22
    const alpha = particle.opacity * fade * pulse * 0.28
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius * (0.45 + pulse * 0.55), 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${particle.tone}, ${alpha})`
    ctx.shadowBlur = 8
    ctx.shadowColor = `rgba(${particle.tone}, ${alpha})`
    ctx.fill()
    return true
  })
  ctx.shadowBlur = 0
  cursorFrame = requestAnimationFrame(drawCursorParticles)
}

const setAnimation = () => {
  gsap.fromTo(
    '.s',
    { background: 'white', color: 'transparent' }, //fromの設定
    { //toの設定
      duration: 3,
      ease: 'bounce.in',
      background: 'transparent',
      color: '#004146',
      scrollTrigger: {
        trigger: '#title',
        start: 'top center', //要素のトップが、画面の中央まできたら開始
      },
      stagger: {
        from: 'random', //左からアニメーション start、center、edges、random、endが指定できる
        amount: 2, //1秒ズラしてアニメーション
      },
    },
  )
  gsap.utils.toArray('.fade-up').forEach((wrap: any, index: number) => {
    gsap.fromTo('#section-content-' + (index + 1), { color: 'transparent' }, {
      color: '#004146',
      duration: 1,
      scrollTrigger: {
        trigger: wrap,
        start: 'top center',
        end: 'bottom center',
      },
    })
    gsap.to('#ellipce-' + (index + 1), {
      y: 200,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.2,
      },
    })
  })
}
</script>
