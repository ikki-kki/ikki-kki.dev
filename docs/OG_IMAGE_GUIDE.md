# OG 이미지 생성 가이드

## 개요

이 프로젝트는 Vercel Edge Function 크기 제한(1MB)을 준수하기 위해 OpenGraph 이미지를 **정적 WebP 파일**로 사전 생성하여 서빙합니다.

## 새 포스트 추가 시 OG 이미지 생성 방법

### 방법 1: 자동화 스크립트 사용 (추천)

#### 1단계: 포스트 작성 완료

새 포스트를 `app/posts/[slug]/page.mdx`에 작성합니다.

#### 2단계: OG 이미지 템플릿 생성

```bash
pnpm og:template <post-slug> "<포스트 제목>"
```

예시:

```bash
pnpm og:template my-new-post "My New Post Title"
```

이 명령은 `app/posts/[slug]/opengraph-image.tsx` 파일을 자동으로 생성합니다.

#### 3단계: 개발 서버 실행

```bash
pnpm dev
```

#### 4단계: OG 이미지 생성

새 터미널을 열고:

```bash
pnpm og:generate <post-slug>
```

예시:

```bash
pnpm og:generate my-new-post
```

개발 서버가 다른 포트에서 실행 중인 경우:

```bash
pnpm og:generate my-new-post 3001
```

생성된 이미지는 `public/images/og-[slug].webp`에 저장됩니다 (자동으로 WebP로 변환).

#### 5단계: 빌드 및 배포

```bash
pnpm build
```

---

### 방법 2: 수동 생성 (여러 포스트를 한 번에 생성)

### 방법 2: 수동 생성 (여러 포스트를 한 번에 생성)

#### 1단계: 포스트 작성 완료

새 포스트를 `app/posts/[slug]/page.mdx`에 작성합니다.

#### 2단계: OG 이미지 생성 스크립트에 포스트 정보 추가

`scripts/generate-og-images.mjs` 파일을 열고 `posts` 배열에 새 포스트 정보를 추가:

```javascript
const posts = [
  // ... 기존 포스트들
  {
    name: 'your-post-slug', // 포스트 디렉토리 이름
    title: '포스트 제목', // OG 이미지에 표시될 제목
    description: '포스트 설명', // OG 이미지에 표시될 설명
  },
]
```

#### 3단계: opengraph-image.tsx 파일 생성

새 포스트 디렉토리에 `opengraph-image.tsx` 파일을 생성:

```typescript
export const runtime = 'edge'
export const alt = '포스트 제목'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const imageData = await fetch(
    new URL('../../../public/images/og-your-post-slug.webp', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
```

#### 4단계: 개발 서버 실행

```bash
pnpm dev
```

#### 5단계: 모든 OG 이미지 생성

개발 서버가 실행 중인 상태에서 새 터미널을 열고:

```bash
pnpm og:generate-all
```

또는:

```bash
node scripts/generate-og-images.mjs
```

생성된 이미지는 `public/images/og-[slug].webp`에 저장됩니다.

#### 6단계: 생성된 이미지 확인

```bash
ls -lh public/images/og-*.webp
```

#### 7단계: 빌드 및 배포

```bash
pnpm build
```

빌드가 성공하면 Vercel에 배포합니다.

---

## 사용 가능한 스크립트

### `pnpm og:template <slug> "<title>"`

새 포스트의 `opengraph-image.tsx` 템플릿을 생성합니다.

```bash
pnpm og:template my-new-post "My New Post Title"
```

### `pnpm og:generate <slug> [port]`

단일 포스트의 OG 이미지를 생성합니다.

```bash
pnpm og:generate my-new-post
pnpm og:generate my-new-post 3001  # 다른 포트 사용
```

### `pnpm og:generate-all`

스크립트에 등록된 모든 포스트의 OG 이미지를 생성합니다 (자동으로 WebP로 변환).

```bash
pnpm og:generate-all
```

### `pnpm og:convert-webp`

기존 PNG 이미지를 WebP로 변환합니다.

```bash
pnpm og:convert-webp
```

---

## 왜 정적 이미지를 사용하나요?

### 문제점

동적 OG 이미지 생성 방식은 다음 이슈가 있었습니다:

- **번들 크기 초과**: `next/og` (Satori + Resvg WASM) + 폰트 파일(GeistMono TTF) = **~1.5MB**
- **Vercel 무료 플랜 제한**: Edge Function 크기 **1MB** 제한
- **배포 실패**: "The Edge Function 'opengraph-image' size is 1.51 MB"

### 해결 방법

정적 WebP 파일 서빙으로 전환:

- **번들 크기**: ~**10-20 KB** (99% 감소)
- **이미지 크기**: PNG 대비 **87% 감소** (1.4MB → 193KB)
- **빌드 출력**: 각 opengraph-image 엔드포인트 **160 B**
- **성능**: 정적 파일 서빙 + 작은 파일 크기로 더 빠른 로딩

### Before vs After

| 항목               | Before (동적)       | After (정적 WebP) |
| ------------------ | ------------------- | ----------------- |
| Edge Function 크기 | 1.51 MB             | ~10-20 KB         |
| 이미지 파일 크기   | N/A                 | 19-42 KB          |
| 번들 항목          | next/og + 폰트 파일 | fetch + Response  |
| 빌드 성공 여부     | ❌ 실패             | ✅ 성공           |
| 배포 가능 여부     | ❌ 불가능           | ✅ 가능           |
| 로딩 속도          | 보통                | 🚀 매우 빠름      |

## 기술적 세부사항

### 이전 구현 (동적 생성)

```typescript
import { ImageResponse } from 'next/og' // ~700-800 KB

const geistMonoRegular = fetch(
  new URL('../../../public/fonts/GeistMono-Regular.ttf', import.meta.url), // ~250-350 KB
).then((res) => res.arrayBuffer())

const geistMonoBold = fetch(
  new URL('../../../public/fonts/GeistMono-Bold.ttf', import.meta.url), // ~250-350 KB
).then((res) => res.arrayBuffer())

return new ImageResponse(/* JSX */, { fonts: [...] })
// 총 번들 크기: ~1.5 MB
```

### 현재 구현 (정적 WebP 서빙)

```typescript
const imageData = await fetch(
  new URL('../../../public/images/og-post-slug.webp', import.meta.url),
).then((res) => res.arrayBuffer())

return new Response(imageData, {
  headers: {
    'Content-Type': 'image/webp',
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
})
// 총 번들 크기: ~10-20 KB
// 이미지 파일 크기: 19-42 KB (PNG 대비 87% 감소)
```

## 향후 개선 사항

1. **CI/CD 통합**: GitHub Actions에서 자동으로 OG 이미지 생성
2. **템플릿 시스템**: 다양한 OG 이미지 템플릿 지원
3. **자동 감지**: 새 포스트 추가 시 자동으로 스크립트에 추가

## 문제 해결

### 개발 서버가 3000 포트가 아닌 다른 포트에서 실행되는 경우

`scripts/generate-og-images.mjs` 파일에서 포트 번호를 수정:

```javascript
const url = `http://localhost:3001/posts/${post.name}/opengraph-image` // 포트 변경
```

### 인증서 오류가 발생하는 경우

빌드 스크립트에 `NODE_TLS_REJECT_UNAUTHORIZED=0`이 설정되어 있는지 확인:

```json
"build": "NODE_TLS_REJECT_UNAUTHORIZED=0 next build"
```

### 생성된 이미지가 표시되지 않는 경우

1. 이미지 파일이 `public/images/` 디렉토리에 있는지 확인
2. 파일 이름이 `og-[slug].png` 형식인지 확인
3. `opengraph-image.tsx` 파일의 경로가 올바른지 확인
