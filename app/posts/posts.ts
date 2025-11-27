import { Post } from '@/lib/type'

const posts = [
  {
    slug: 'the-magic-of-react-concurrency',
    title: '코드 한 줄로 경험하는 React 동시성의 마법',
    description: '인간의 인지 방식을 관찰해 설계된 기술',
    date: '2025-04-16',
    tags: ['React', 'Concurrency'],
    readingTime: 40,
  },
  {
    slug: 'tanstack-form-v1-release',
    title: 'TanStack Form v1 출시 기념 둘러보기',
    description: '이세계에서 폼 라이브러리로 전생했더니 너무 강했다',
    date: '2025-03-16',
    tags: ['TanStack Form'],
    readingTime: 22,
  },
  {
    slug: 'eslint-how-it-works',
    title: 'ESLint 동작 방식 이해',
    description: '태초에 AST가 있었는데요,',
    date: '2023-03-02',
    tags: ['eslint', 'AST'],
    readingTime: 13,
  },
  {
    slug: 'nested-feature-branch-workflow',
    title: 'Nested Feature Branch Workflow 전략으로 브랜치 관리',
    description: '브랜치를 브랜치에 싸서 드셔보세요',
    date: '2023-03-02',
    tags: ['git'],
    readingTime: 4,
  },
  {
    slug: 'component-without-self-and-oop-component',
    title: '자아가 없는 컴포넌트와 객체지향 컴포넌트',
    description: '공통 컴포넌트는 허상이다.',
    date: '2023-03-02',
    tags: ['React', 'OOP', 'Component'],
    readingTime: 17,
  },
  {
    slug: 'open-graph-twitter-card',
    title: '오픈그래프(Open Grape) 태그와 트위터 카드(Twitter Card)',
    description: 'OG 이미지 그게 뭔데',
    date: '2022-06-03',
    tags: ['Open Graph', 'Twitter Card'],
    readingTime: 13,
  },
] as Post[]

export { posts }
