import * as styles from './page.css'
import Footer from '@/components/shared/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | 성정민',
  description: '5년차 프론트엔드 엔지니어 성정민 이력서',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Resume() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <h1 className={styles.headerTitle}>
                안녕하세요
                <br />
                5년차 프론트엔드 엔지니어
                <br />
                성정민입니다.
              </h1>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Blog:</span>
                <a
                  href="https://ikki-kki.dev/"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ikki-kki.dev
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Github:</span>
                <a
                  href="https://github.com/ikki-kki"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ikki-kki
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a
                  href="mailto:hellojeongmin@gmail.com"
                  className={styles.contactLink}
                >
                  hellojeongmin@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone:</span>
                <span>010-8858-8650</span>
              </div>
            </div>
          </header>

          <div className={styles.introduction}>
            <p>
              종합 비즈니스 플랫폼 리멤버앤컴퍼니에서 웹 프론트엔드 개발자로
              일하며, 비즈니스의 지속 가능성과 개발 생산성 사이의 균형을
              치열하게 고민해왔습니다. 맹목적인 완벽함보다는 당면한 문제를
              해결하는 데 가장 적합한 실용적인 기술을 추구합니다. 기술적 부채를
              선제적으로 관리하고 자동화하여, 제품의 성장을 뒷받침하는 단단한
              기술적 토대를 만드는 데 주력하고 있습니다.
              <br />
              <br />
              디자이너의 언어로 소통하고 엔지니어의 견고함으로 구현하는 과정을
              즐깁니다. 투명한 소통과 적극적인 지식 공유가 이루어질 때 팀은
              최고의 퍼포먼스를 낸다고 믿으며, 나를 넘어 우리가 함께 성장하는
              문화를 만들어가고 있습니다.
              <br />
              <br />
              개인의 성장을 멈추지 않기 위해 끊임없이 학습합니다. 주도적으로
              스터디를 조직해 다양한 배경의 동료들과 경험을 나누고 치열하게
              토론하며, 지식의 경계를 넓혀가는 과정을 즐깁니다.
            </p>
          </div>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Career</h2>
              <span className={styles.sectionDuration}>5년 4개월</span>
            </div>

            <div className={styles.careerItem}>
              <div className={styles.careerHeader}>
                <h3 className={styles.careerTitle}>
                  리멤버앤컴퍼니 | Frontend Engineer
                </h3>
                <span className={styles.careerPeriod}>2021.05 - 재직 중</span>
              </div>
              <p className={styles.careerSubtitle}>
                국내 최대 500만 종합 비즈니스 플랫폼
              </p>
              <ul className={styles.careerList}>
                <li className={styles.careerListItem}>
                  디자인시스템 기여 및 공용 라이브러리 제작
                </li>
                <li className={styles.careerListItem}>
                  성장통을 해결하기 위한 아키텍처 개선
                </li>
                <li className={styles.careerListItem}>레거시 시스템 현대화</li>
                <li className={styles.careerListItem}>
                  함께 성장하는 개발 문화와 협업 프로세스 정착
                </li>
              </ul>
            </div>

            <div className={styles.careerItem}>
              <div className={styles.careerHeader}>
                <h3 className={styles.careerTitle}>
                  주식회사퀘스처너스 | Frontend Engineer
                </h3>
                <span className={styles.careerPeriod}>2020.09 - 2021.05</span>
              </div>
              <p className={styles.careerSubtitle}>
                동네 학원 상담부터 결제까지 에듀테크 솔루션
              </p>
              <ul className={styles.careerList}>
                <li className={styles.careerListItem}>
                  성과 대시보드 구현 및 백오피스 유지보수
                </li>
                <li className={styles.careerListItem}>
                  웹뷰 비대면 결제 시스템 구현
                </li>
                <li className={styles.careerListItem}>
                  React 도입 및 공용 라이브러리 구축
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>

            <div className={styles.educationItem}>
              <div>
                <span className={styles.educationName}>Wecode</span>
                <span className={styles.educationDetail}>
                  수료 | 사설 교육 | Advanced
                </span>
              </div>
              <span className={styles.educationPeriod}>2020.04 - 2020.07</span>
            </div>

            <div className={styles.educationItem}>
              <div>
                <span className={styles.educationName}>
                  내일배움캠프 java 백엔드
                </span>
                <span className={styles.educationDetail}>
                  수료 | 사설 교육 | Advanced
                </span>
              </div>
              <span className={styles.educationPeriod}>2019.11 - 2020.03</span>
            </div>

            <div className={styles.educationItem}>
              <div>
                <span className={styles.educationName}>건국대학교</span>
                <span className={styles.educationDetail}>
                  졸업 | 대학교(학사) | 커뮤니케이션디자인
                </span>
              </div>
              <span className={styles.educationPeriod}>2014.03 - 2019.02</span>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Activities</h2>
            </div>

            <div className={styles.educationItem}>
              <div>
                <span className={styles.educationName}>
                  건국대학교 제 47대 총학생회 건대에 물들다
                </span>
                <span className={styles.educationDetail}>디자인 팀장</span>
              </div>
              <span className={styles.educationPeriod}>2017</span>
            </div>

            <div className={styles.educationItem}>
              <div>
                <span className={styles.educationName}>
                  대학생 한글 타이포그래피 소모임 연합회 한울
                </span>
                <span className={styles.educationDetail}>부회장</span>
              </div>
              <span className={styles.educationPeriod}>2016</span>
            </div>

            <div className={styles.educationItem}>
              <div>
                <span className={styles.educationName}>
                  건국대학교 커뮤니케이션디자인 타이포그래피 소모임
                </span>
                <span className={styles.educationDetail}>동아리장</span>
              </div>
              <span className={styles.educationPeriod}>2015 - 2016</span>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.skillsGrid}>
              <ul className={styles.skillsList}>
                <li className={styles.skillItem}>
                  Javascript, Typescript, HTML, CSS
                </li>
                <li className={styles.skillItem}>React, Next.js, Vite</li>
                <li className={styles.skillItem}>
                  React-Query, Zustand, Tanstack Form, React Router
                </li>
              </ul>
              <ul className={styles.skillsList}>
                <li className={styles.skillItem}>yarn berry, pnpm</li>
                <li className={styles.skillItem}>AWS, Github-Action</li>
                <li className={styles.skillItem}>
                  Git, Jira, Confluence, Slack, Notion
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Work Experiences</h2>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                1. 폴리레포 설정 파일 통합 관리
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 파운데이션크루
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    10개의 폴리레포 환경에서 분산되고 중복 관리되는 설정 파일로
                    인한 일관성 저하
                  </li>
                  <li className={styles.workExperienceListItem}>
                    Lint(oxc), 환경변수 생성 스크립트 등이 레포지토리 간
                    동기화되지 않아 변경 시마다 반복 작업 발생
                  </li>
                  <li className={styles.workExperienceListItem}>
                    설정 파일 유지보수에 과도한 리소스 투입 및 휴먼 에러 위험
                    증가
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      Git Submodule 기반 중앙 집중식 설정 관리 시스템
                    </span>{' '}
                    아키텍처 설계 및 구현
                  </li>
                  <li className={styles.workExperienceListItem}>
                    husky를 활용한 pre-push 단계에서 서브모듈 커밋 해시 검증으로{' '}
                    <span className={styles.highlight}>
                      최신 상태 자동 강제
                    </span>{' '}
                    파이프라인 구축
                  </li>
                  <li className={styles.workExperienceListItem}>
                    예외 상황 대응을 위한 CLI 인터페이스 제공으로 개발자 경험
                    개선
                  </li>
                  <li className={styles.workExperienceListItem}>
                    ESLint, TypeScript Config 등 핵심 패키지 버전을 서브모듈에서
                    단일 소스로 관리
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    분산되어 있던 10+ 설정 파일을{' '}
                    <span className={styles.highlight}>
                      단일 저장소에서 중앙 관리
                    </span>
                    하여 유지보수 공수 감소
                  </li>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      10개 제품의 개발 환경 및 의존성을 자동으로 동기화
                    </span>
                    하여 일관성 보장 및 설정 drift 방지
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                2. 레거시 로그인 시스템 모던화
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 파운데이션크루
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    Ruby on Rails, AngularJS, React가 혼재된 레거시 로그인
                    시스템으로 인한 기술 부채 누적
                  </li>
                  <li className={styles.workExperienceListItem}>
                    파편화된 기술 스택으로 인해 유지보수 및 신규 기능 추가에
                    높은 리스크 발생
                  </li>
                  <li className={styles.workExperienceListItem}>
                    점진적 개선이 불가능한 구조로 인해 전면 재구축 필요성 대두
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      React, Vite, Zustand 기반의 모던 프론트엔드 스택
                    </span>
                    으로 로그인 시스템 완전 재구축
                  </li>
                  <li className={styles.workExperienceListItem}>
                    기존 Rails 시스템을{' '}
                    <span className={styles.highlight}>
                      단순 웹 서버 역할로 재정의
                    </span>
                    하여 프론트엔드 환경 완전 분리
                  </li>
                  <li className={styles.workExperienceListItem}>
                    API 호출 레이어를 추상화하여 향후 신규 백엔드 서버로 교체
                    가능하도록 인터페이스 설계
                  </li>
                  <li className={styles.workExperienceListItem}>
                    점진적 마이그레이션이 가능한 아키텍처 구축으로 무중단 전환
                    전략 수립
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      기술 부채 해소를 위한 전환 가능한 구조
                    </span>{' '}
                    완성으로 향후 레거시 완전 제거 가능
                  </li>
                  <li className={styles.workExperienceListItem}>
                    프론트엔드 독립 환경 구축으로 개발 생산성 향상 및 배포
                    프로세스 개선
                  </li>
                  <li className={styles.workExperienceListItem}>
                    모던 스택 도입으로 신규 개발자 온보딩 시간 단축 및
                    유지보수성 향상
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                3. 디자인 시스템 재구축
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 코어크루
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    기존 remember-ui 디자인 시스템이 특정 제품에 과도하게
                    의존하여 범용성 부족
                  </li>
                  <li className={styles.workExperienceListItem}>
                    Props 기반 설계로 유연성이 떨어져 단순한 컬러 변경조차
                    어려운 구조적 한계
                  </li>
                  <li className={styles.workExperienceListItem}>
                    여러 레포지토리에 아이콘 자산이 산재되어 관리 복잡도 증가 및
                    중복 발생
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      Radix 기반 Headless Compound Component 패턴
                    </span>{' '}
                    도입으로 디자인 제약 없는 확장 가능한 시스템 구축
                  </li>
                  <li className={styles.workExperienceListItem}>
                    웹 접근성(a11y) 표준을 준수하면서도 완전한 커스터마이징이
                    가능한 컴포넌트 아키텍처 설계
                  </li>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      svgr 기반 자동화 파이프라인
                    </span>{' '}
                    구축으로 SVG를 S, M, L 사이즈별 React 컴포넌트로 변환 및
                    패키지화
                  </li>
                  <li className={styles.workExperienceListItem}>
                    폰트 및 파비콘을 CDN으로 중앙 관리하여 브랜드 일관성 확보 및
                    리소스 최적화
                  </li>
                  <li className={styles.workExperienceListItem}>
                    GitHub Actions 기반 Storybook 자동 배포로 PR 병합 시 최신 UI
                    스펙 즉시 반영
                  </li>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>Changesets</span>으로
                    SemVer 기반 버전 관리 및 변경 로그 작성 자동화
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      디자인 시스템 유연성 확보
                    </span>
                    로 다양한 제품 요구사항에 빠르게 대응 가능
                  </li>
                  <li className={styles.workExperienceListItem}>
                    아이콘 자산 중복 제거 및 중앙화로 유지보수 공수 절감
                  </li>
                  <li className={styles.workExperienceListItem}>
                    디자이너-개발자 간 UI 싱크 자동화로 커뮤니케이션 비용 감소
                  </li>
                  <li className={styles.workExperienceListItem}>
                    자동화된 배포 프로세스로 신뢰성 향상 및 릴리즈 사이클 단축
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                4. 모니터링 체계 구축
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 파운데이션크루
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    사용자 경험 품질을 정량적으로 측정할 수 있는 지표 및
                    모니터링 체계 부재
                  </li>
                  <li className={styles.workExperienceListItem}>
                    성능 저하나 에러 발생 시 사후 대응만 가능하여 서비스 안정성
                    확보 어려움
                  </li>
                  <li className={styles.workExperienceListItem}>
                    주요 사용자 경로별 성능 현황 파악 불가로 개선 우선순위 설정
                    곤란
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      Datadog RUM 기반 모니터링 환경
                    </span>{' '}
                    설계 및 구축으로 실사용자 데이터 수집 체계 확립
                  </li>
                  <li className={styles.workExperienceListItem}>
                    프로필 제품의{' '}
                    <span className={styles.highlight}>
                      Core Web Vitals(LCP, INP, CLS)를 SLI로 정의
                    </span>
                  </li>
                  <li className={styles.workExperienceListItem}>
                    Google 권장 Poor 기준 방지를 목표로{' '}
                    <span className={styles.highlight}>
                      75 percentile 기준 SLO 설정
                    </span>{' '}
                    (LCP ≤ 4초, INP ≤ 500ms, CLS ≤ 0.25)
                  </li>
                  <li className={styles.workExperienceListItem}>
                    주요 경로별 성능 모니터링 체계 구축
                  </li>
                  <li className={styles.workExperienceListItem}>
                    Error Budget 25% 설정으로 SLO 초과 시 실시간 알림 및 선제적
                    대응 체계 마련
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      데이터 기반 사용자 경험 정량화
                    </span>
                    로 75%의 사용자가 Good~Needs Improvement 수준 보장
                  </li>
                  <li className={styles.workExperienceListItem}>
                    회원가입 퍼널 각 단계별 성능 모니터링으로 전환율 저하 요인
                    조기 발견 및 개선
                  </li>
                  <li className={styles.workExperienceListItem}>
                    비즈니스 가치 기반 14개 핵심 경로 집중 관리로 리소스 효율적
                    배분 및 우선순위 명확히 보장
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                5. Oxc 도입으로 Lint 성능 15배 개선
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 파운데이션크루
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    JavaScript 기반 ESLint 실행 시간 26초로 개발 생산성 저하 및
                    CI/CD 파이프라인 병목 발생
                  </li>
                  <li className={styles.workExperienceListItem}>
                    10개 폴리레포별 상이한 Lint 룰로 코드 컨벤션 불일치 및
                    일관성 부재
                  </li>
                  <li className={styles.workExperienceListItem}>
                    성능 개선 및 분산된 Lint 설정 통합·표준화 필요
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      1차 마이그레이션 - 10개 폴리레포의 분산된 Lint 룰을 별도
                      패키지로 통합
                    </span>
                    하여 조합형 ESLint 설정 구조 구축
                  </li>
                  <li className={styles.workExperienceListItem}>
                    공통 Lint 룰 모듈을 정의하고 레포별 특성에 맞게 조합
                    가능하도록 설계하여 컨벤션 표준화
                  </li>
                  <li className={styles.workExperienceListItem}>
                    Rust 기반{' '}
                    <span className={styles.highlight}>
                      Oxc(oxlint)와 Biome 비교 분석
                    </span>{' '}
                    후 Vite 생태계 적합성 고려하여 Oxc 선정
                  </li>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      ESLint와 Oxc 병렬 처리 구조 설계
                    </span>
                    로 점진적 마이그레이션 환경 구축 및 과도기 안정성 확보
                  </li>
                  <li className={styles.workExperienceListItem}>
                    통합된 ESLint 룰을 Oxc 규칙으로 매핑하고 호환성 검증 작업
                    수행
                  </li>
                  <li className={styles.workExperienceListItem}>
                    Oxc 사용 중 발견한 버그를 수정 오픈소스 기여{' '}
                    <a
                      href="https://github.com/oxc-project/oxc/pull/13817"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      [Contribution]
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      Lint 실행 시간 26초 → 1.6초로 약 15배 단축
                    </span>{' '}
                    (94% 성능 개선)
                  </li>
                  <li className={styles.workExperienceListItem}>
                    CI/CD 파이프라인 전체 실행 시간 단축으로 배포 속도 및 개발자
                    생산성 향상
                  </li>
                  <li className={styles.workExperienceListItem}>
                    오픈소스 커뮤니티 버그 리포트 및 수정 기여로 Oxc 안정성
                    개선에 기여
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                6. 테스트 및 모킹 환경 구축
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 프로필크루
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    제품 정책과 권한 로직이 비대해지면서, 기획서와 개발자의
                    기억에만 의존하여 수정 사항을 검증하는 방식이 한계에 도달
                  </li>
                  <li className={styles.workExperienceListItem}>
                    다수의 개발자가 협업하는 환경에서 코드 변경 시 영향 범위를
                    예측하기 어려워, 잦은 사이드 이펙트와 프로덕션 에러 발생
                  </li>
                  <li className={styles.workExperienceListItem}>
                    API 개발이 완료될 때까지 프론트엔드 작업이 블로킹되거나,
                    테스트 케이스별 데이터 세팅이 어려워 개발 효율 저하
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      Vitest를 도입하여 중요 비즈니스 로직에 대한 유닛 테스트를
                      작성
                    </span>
                    하고, PR 생성 시 테스트 실패 시 상위 브랜치 머지를 원천
                    차단하는 CI 파이프라인을 구축하여 코드 안정성을 시스템적으로
                    강제
                  </li>
                  <li className={styles.workExperienceListItem}>
                    로그인부터 제품 랜딩까지의{' '}
                    <span className={styles.highlight}>
                      핵심 사용자 플로우를 검증
                    </span>
                    하기 위해 Playwright를 도입하고, 피트스탑 기간을 활용한
                    프론트엔드 챕터 전체 스터디를 통해 팀 내 테스트 주도 개발
                    문화에 기여
                  </li>
                  <li className={styles.workExperienceListItem}>
                    API가 준비되지 않은 상태에서도 개발이 가능하도록{' '}
                    <span className={styles.highlight}>
                      MSW(Mock Service Worker)를 도입
                    </span>
                    하여, 백엔드와의 병렬 작업 환경을 구축하고 핸들러 기반의
                    정교한 모킹 데이터 관리
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    코드 변경 시 발생할 수 있는 사이드 이펙트를 CI 단계에서 사전
                    감지하여{' '}
                    <span className={styles.highlight}>프로덕션 에러 감소</span>
                  </li>
                  <li className={styles.workExperienceListItem}>
                    핵심 기능에 대한 자동화된 검증 수단을 확보하여 배포 시
                    개발자의 심리적 부담 완화 및 신뢰도 향상
                  </li>
                  <li className={styles.workExperienceListItem}>
                    백엔드 API 의존성을 제거하여{' '}
                    <span className={styles.highlight}>
                      병렬 개발을 통한 생산성 향상
                    </span>{' '}
                    및 대기 시간 단축
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                7. API 타입 생성 자동화
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 프론트엔드챕터
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>SITUATION</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    서버 데이터를 수동으로 타이핑하다 보니 타입의 역할 구분이
                    모호해지고 정의가 비대해져, 실제 API 스펙과의 정합성을
                    유지하기 어렵고 유지보수 비용이 지속적으로 증가
                  </li>
                  <li className={styles.workExperienceListItem}>
                    API 변경 시마다 프론트엔드 코드를 일일이 수정해야 하는
                    번거로움과 휴먼 에러 발생 위험 상존
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      OpenAPI(Swagger) 스키마를 기반으로 타입과 통신 로직을 자동
                      생성
                    </span>
                    해주는 Orval을 3개 프로젝트에 도입하여, 수동 타이핑의
                    비효율을 제거하고 코드 일관성 확보
                  </li>
                  <li className={styles.workExperienceListItem}>
                    자동화의 전제 조건인 API Docs 품질 유지를 위해 서버 팀의
                    공수가 늘어나는 이슈가 있었으나,{' '}
                    <span className={styles.highlight}>
                      명세의 정확성이 전체 제품 안정성에 미치는 영향을 기반으로
                      설득
                    </span>
                    하여 문서 현행화의 R&R을 서버 개발자로 이관하고 협업 기준
                    재정립
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    수동 타입 정의 및 동기화에 들던 리소스를 제거하여 기간 내{' '}
                    <span className={styles.highlight}>
                      비즈니스 로직 구현에 집중
                    </span>
                    할 수 있는 환경 조성
                  </li>
                  <li className={styles.workExperienceListItem}>
                    명확한 API 명세를 기반으로 프론트엔드와 백엔드 간의 불필요한
                    커뮤니케이션 비용 감소 및 개발 생산성 향상
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                8. 학원비 비대면 결제 시스템 구현
                <span className={styles.workExperienceCompany}>
                  주식회사퀘스처너스
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    서비스 초기 매출 모델이 부재한 상황에서 수익 창출을 위해{' '}
                    <span className={styles.highlight}>
                      학원비 비대면 결제 시스템을 웹뷰로 구현
                    </span>
                    하여 나이스페이 PG사 연동
                  </li>
                  <li className={styles.workExperienceListItem}>
                    학원 운영진이 수기 관리로 인해 겪는 비효율을 개선하기 위해{' '}
                    <span className={styles.highlight}>
                      통합 관리 백오피스 구축
                    </span>
                  </li>
                  <li className={styles.workExperienceListItem}>
                    청구서 발행, 수납 관리, 광고 성과 분석 기능을 개발하고
                    복잡한 필터링과 리스트 기능 구현
                  </li>
                </ul>
              </div>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>RESULT</h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    서비스 출시 5개월 만에{' '}
                    <span className={styles.highlight}>
                      누적 결제액 2억 원 달성
                    </span>
                    하며 비즈니스 목표 달성에 핵심적인 기여
                  </li>
                  <li className={styles.workExperienceListItem}>
                    백오피스를 통한 운영 업무 생산성 향상
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.workExperienceItem}>
              <h3 className={styles.workExperienceTitle}>
                9. 함께 성장하는 개발 문화
                <span className={styles.workExperienceCompany}>
                  리멤버앤컴퍼니 프론트엔드챕터
                </span>
              </h3>

              <div className={styles.workExperienceSection}>
                <h4 className={styles.workExperienceSectionTitle}>
                  WHAT I DID
                </h4>
                <ul className={styles.workExperienceList}>
                  <li className={styles.workExperienceListItem}>
                    팀 리더십 부재 상황에서{' '}
                    <span className={styles.highlight}>
                      이력서 검토 및 기술 면접을 주도
                    </span>
                    하여 3명의 채용 TO 달성. 채용 홍보 목적의{' '}
                    <a
                      href="https://tech.remember.co.kr/%EC%BD%94%EB%93%9C-%ED%95%9C-%EC%A4%84%EB%A1%9C-%EA%B2%BD%ED%97%98%ED%95%98%EB%8A%94-react-%EB%8F%99%EC%8B%9C%EC%84%B1%EC%9D%98-%EB%A7%88%EB%B2%95-5ff18aee148d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      기술 블로그 글 작성
                    </a>
                  </li>
                  <li className={styles.workExperienceListItem}>
                    <span className={styles.highlight}>
                      4년간 회고 리더 역할을 자처
                    </span>
                    하여 팀 내 사일로 현상 방지 및 서로의 업무 성향과 고민을
                    투명하게 공유하는 심리적 안전감 높은 팀 문화를 구축함.
                    연차에 무관한 수평적 소통을 유도하고 팀의 안살림을 챙기는
                    중간 관리자 역할 수행
                  </li>
                  <li className={styles.workExperienceListItem}>
                    GitHub Action을 사용한 PR 사이즈별 라벨 자동 부착 및 리뷰어
                    자동 할당 워크플로우 구현
                  </li>
                  <li className={styles.workExperienceListItem}>
                    FSD 마이그레이션 진행률 시각화를 위해 PR 생성 시
                    마이그레이션 지표를 자동 댓글로 표시하는 워크플로우 구현
                  </li>
                  <li className={styles.workExperienceListItem}>
                    개인의 시행착오 휘발 방지를 위해{' '}
                    <span className={styles.highlight}>
                      Public 웹 디버깅 히스토리 채널을
                    </span>{' '}
                    신설해 버그 발생부터 해결까지 과정을 실시간 기록·공유하여 팀
                    내 암묵지 자산화 및 기술 해결책 교류 문화 정착
                  </li>
                  <li className={styles.workExperienceListItem}>
                    기술적 이해도 평준화를 위해{' '}
                    <span className={styles.highlight}>웹로세움</span>(진영
                    토론) 코너 기획
                  </li>
                  <li className={styles.workExperienceListItem}>
                    이번 주 최고의 PR 자랑 시간 운영으로 변경 사항 300줄 미만
                    문화 정착 및 코드 리뷰 피드백 문화 조성
                  </li>
                  <li className={styles.workExperienceListItem}>
                    신규 입사자 적응 지원을 위해 프론트앤트 챕터 내{' '}
                    <span className={styles.highlight}>My User Manual</span>{' '}
                    작성 문화 및 헬스체크 세션 도입
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Tech Talks & Writing</h2>
            </div>
            <div className={styles.talkItem}>
              <h3 className={styles.talkTitle}>
                코드 한 줄로 경험하는 React 동시성의 마법
              </h3>
              <p className={styles.talkDescription}>
                React Concurrent Mode의 원리를 분석하고 실무 적용 사례를 들어
                사내 발표 및 기술 블로그에 기고
              </p>
              <div className={styles.talkLinks}>
                <a
                  href="https://www.youtube.com/watch?v=gAKBoJwxNWk&list=PLsiHsr2oErkibU9ZFanQf1zHLR8ifc7Od&index=26"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  사내 발표 영상
                </a>
                <span className={styles.talkLinkDivider}>|</span>
                <a
                  href="https://tech.remember.co.kr/%EC%BD%94%EB%93%9C-%ED%95%9C-%EC%A4%84%EB%A1%9C-%EA%B2%BD%ED%97%98%ED%95%98%EB%8A%94-react-%EB%8F%99%EC%8B%9C%EC%84%B1%EC%9D%98-%EB%A7%88%EB%B2%95-5ff18aee148d"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  블로그 포스팅
                </a>
              </div>
            </div>

            <div className={styles.talkItem}>
              <h3 className={styles.talkTitle}>ESLint 동작 원리 분석</h3>
              <p className={styles.talkDescription}>
                ESLint의 병목 원인을 AST 레벨에서 분석한 내용을 공유
              </p>
              <div className={styles.talkLinks}>
                <a
                  href="https://ikki-kki.dev/posts/eslint-how-it-works"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  블로그 포스팅
                </a>
              </div>
            </div>

            <div className={styles.talkItem}>
              <h3 className={styles.talkTitle}>
                TLS(Transport Layer Security)의 이해
              </h3>
              <p className={styles.talkDescription}>
                웹 보안의 핵심인 TLS의 동작 원리에 대해 발표
              </p>
              <div className={styles.talkLinks}>
                <a
                  href="youtube.com/watch?v=EVb-eIKz4Yk&list=PLsiHsr2oErkibU9ZFanQf1zHLR8ifc7Od&index=43"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  사내 발표 영상
                </a>
              </div>
            </div>

            <div className={styles.talkItem}>
              <h3 className={styles.talkTitle}>Open Graph와 UX</h3>
              <p className={styles.talkDescription}>
                링크 공유 시 사용자 경험을 높이는 OG 태그 전략에 대해 발표하고
                글을 작성
              </p>
              <div className={styles.talkLinks}>
                <a
                  href="https://www.youtube.com/watch?v=exzrY2LP2vo&list=PLsiHsr2oErkibU9ZFanQf1zHLR8ifc7Od&index=60"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  사내 발표 영상
                </a>
                <span className={styles.talkLinkDivider}>|</span>
                <a
                  href="https://ikki-kki.dev/posts/open-graph-twitter-card"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  블로그 포스팅
                </a>
              </div>
            </div>

            <div className={styles.talkItem}>
              <h3 className={styles.talkTitle}>
                Warp로 IDE와 CLI 전환 불편함 최소화하기
              </h3>
              <p className={styles.talkDescription}>
                생산성을 높이는 개발 도구 활용법을 공유
              </p>
              <div className={styles.talkLinks}>
                <a
                  href="https://www.youtube.com/watch?v=BN7TjqP5nP0&list=PLsiHsr2oErkibU9ZFanQf1zHLR8ifc7Od&index=53"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  사내 발표 영상
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
