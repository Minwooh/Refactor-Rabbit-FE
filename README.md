# 🐰 RABBIT – 개발자 가치 거래 플랫폼

<p>개발자의 역량과 성장 가능성을 데이터 기반으로 시각화하는 서비스로 <br/>
Next.js 기반의 도메인 중심 아키텍처, 상태관리, 성능 최적화에 초점을 두고 개발하였습니다.</p>

<br/>

## RABBIT 스토리
<img width="1409" height="468" alt="Image" src="https://github.com/user-attachments/assets/16ac8a85-9734-47f2-8ce2-fac47e9ea18e" />
<p></p>

```<story>``` <br/>
개발자는 자신의 잠재력과 역량을 가지고 있지만, 아직 출발점인 지구에 머물러 있습니다.<br/>
달은 더 넓은 가능성이 펼쳐진 곳으로 개발자의 목표, 커리어 성취, 시장에서 인정받는 가치를 의미하기 때문에 토끼는 달에 도달하고 싶어합니다.<br/>
달에 도달하려면 우주선이 필요합니다. 그 우주선이 바로  RABBIT 플랫폼입니다.<br/>
RABBIT은 개발자가 가지고 있는 역량을 데이터화하고, 코인화하며, 성장으로 연결시켜 지구에서 달까지 향하는 여정을 실현할 수 있도록 도와줍니다.<br/>
```<story/>```

<br/>

## ✅ 사용 기술 및 개발 환경
| Category	| Stack |
| ----- | ----- |
Language |	TypeScript 
Framework | 	Next.js (App Router)
State Management |	Zustand
Styling	| Styled-components
Data Visualization |	ECharts
UI Interaction	| Swiper
Infra	| Docker, Nginx

<br/>

## 🎨 주요 페이지 UI
#### ``` 메인 페이지 ```
<img width="248" height="133" alt="Image" src="https://github.com/user-attachments/assets/57c76dfe-4395-4168-8a94-c088e2a23cb2" />
<img width="244" height="132" alt="Image" src="https://github.com/user-attachments/assets/92d8ff19-d97e-4220-a429-696857252e73" />
<img width="249" height="134" alt="Image" src="https://github.com/user-attachments/assets/cce59562-f817-41a0-b0e2-9cb5f5c5fc46" />
<img width="244" height="132" alt="Image" src="https://github.com/user-attachments/assets/6c0db048-16ae-4719-b7f7-35efec80048d" />

#### ``` 마이 페이지 : 개발자 가치 지표 대시보드```
<img width="244" height="132" alt="Image" src="https://github.com/user-attachments/assets/1a24b94d-59b0-4f4f-9e4e-f8c51609700a" />

#### ``` 마이 페이지 : 보유 코인 목록```
<img width="244" height="132" alt="Image" src="https://github.com/user-attachments/assets/3cd66cb9-f516-4cec-bfeb-4be741c27a68" />

<br/>

## 🧱 Architecture

도메인 중심 구조 + 상태/데이터 흐름 일관성 확보

| Structure	| 설명 |
| --- | --- |
/app/login	| 인증/세션 기반 라우팅
/app/personal	| 개인 대시보드 및 가치 데이터
/app/company	| 기업 계정 관련
_store/userStore	| Zustand 상태 관리

<br/>

## 📌 내 역할 : 전체 FE 아키텍처 설계 및 구현 리딩

#### ```🗂 데이터 시각화```
| Feature	| Description |
| ---- | ---- |
사용자 가치 지표(ECharts) |	Reliability / Growth / Stability / Value / Popularity
UI 책임 분리 |	SRP 기반 컴포넌트 |
차트 | Dynamic Import + 코드스플리팅 |`

#### ```🧩 주요 기능 및 FE 로직```
기능	| FE 처리 방식 |
| --- | --- |
개인 정보 수정 (Personal Info Edit) | useForm + FormProvider + useFormContext 기반 폼 구조 재사용 및 검증 일원화
폼 필드 구조 분할	하위 | Input 컴포넌트가 Context 기반으로 폼 메타데이터 자동 접근
마이페이지 데이터 시각화	| ECharts 
무한 슬라이드 구조	 | Swiper loop 구조 재설계

#### ```👉 기술적 고민과 해결 과정 ```

| 문제	| 해결 |
| --- | --- |
초기 번들 과다, 렌더 블로킹	ECharts CDN 제거 | Dynamic Import / Code Splitting
이미지 로딩 지연	| WebP 적용, LCP 개선, CDN 삭게
슬라이드 전환시 재마운트 끊김	| Swiper 구조 분석 및 loop 재설계
FE 코드 일관성 부족	| CSS/컴포넌트 컨벤션 문서화 & 팀 적용

<br/>

## 📈 성능 개선 결과 (~ing)
| 항목	| Before |	After |	개선
| --- | --- | --- | --- |
LCP	| 7.7s | 3.9s |	49%↓
Lighthouse : Best Practices |	54 | 70	| +14점
Lighthouse : Performance	| 68 | 75 | +7점

<br/>

## 🏆 프로젝트 성과
최종 팀 프로젝트 우수상 수상

<br/>

## 👤 My Contribution (FE Lead)

* UX/IA 설계 → FE 구조 설계 → UI 디자인 → 개발 → 성능 최적화

* Zustand 기반 인증/데이터 로직 일원화

* CSS/컨벤션 문서화 및 팀 프론트 개발 문화 정착 리딩

* 전체 FE 품질 책임(CSS 최종검수)

<br/>

## 🚀 실행 방법

```javascript
npm install
npm run dev
```
