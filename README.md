# Svelte 시작

## 설치

`yarn berry` 를 사용하기 때문에 yarn 을 최신버전으로 설치해주셔야 합니다.

`zero-install` 을 사용하는 프로젝트로 `yarn install` 을 사용하지 않아도 됩니다.

```cmd
// 설치
npx degit sveltejs/template svelte-study

// 폴더 이동
cd svelte-study

// yarn 설치
npm install -g yarn

// 패키지 설치 (yarn berry 사용), zero-install 을 사용함으로 설치 하지 않아도 됨.
// yarn

// 실행
yarn dev
```

## 특징

1. Write less code
- 높은 가독성 유지
- 개발 시간 단축
- 쉬운 리팩토링
- 쉬운 디버깅
- 더 작은 번들 (SPA 최적화)
- 낮은 러닝 커브

2. No Virtual DOM (react, vue 와 다르게 가상돔을 사용하지 않음.)
- No Diffing (가상돔을 사용하지 않기 때문에 diffing 을 하지 않음.)
- No Overhead (가상돔을 사용하지 않기 때문에 리소스를 아낄 수 있음.)
- 빠른 성능

Diffing - 기존에 Vue 에서는 데이터가 변경되면 현재 돔과 가상 돔의 차이점을 비교하는 것.

만약 차이점이 있다면 현재 돔의 해당 부분만 변경해줌.

Overhead - 어떤 처리를 위해 들어가는 간접적인 시간이나 메모리 등을 말함.

실제로 React 와 런타임에서 메모리 사용관련하여 테스트 하였는데 2~3배가 넘는 차이를 보여줌.

3. Truly reactive
- Framework-less VanillaJS
- only use devDependencies
- 명시적 설계 (창의적 작업)

스벨트는 우리는 가상돔을 쓰지 않은 찐 반응형 이다라고 주장함.

스벨트에서 만든 코드를 순수 바닐라 JS 로 변형해서 사용하게 됩니다.

스벨트의 자유도가 비교적 높기 떄문에 호출 스택이나 데이터의 메모리 참조 등 자바스크립트 등의 동작 원리들을 이해하는 것이 중요함.

## 블로그

<https://white-blank.tistory.com/70?category=1029326>
