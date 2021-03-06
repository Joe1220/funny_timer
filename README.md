# FUNNY TIMER WEB APP

next기반의 timer(clinet)입니다.

- [Server code github 주소](https://github.com/Joe1220/funny_timer_server.git)

###

next관련 보일러 플레이트[https://github.com/Joe1220/next-redux-scss-bp]사용

###

#### install

```bash
yarn
```

#### start

```bash
yarn start # project start
yarn test  # project test
yarn style # start styleguidist for project

```

---

## ** Skill Stack**

### - Language

[Typescript](https://www.typescriptlang.org/), [Javascript](https://www.javascript.com/),
[`React`](https://github.com/facebook/react)
[`Graphql`](https://graphql.org/)

### - State Management

[Redux](https://github.com/reduxjs/redux),
[Redux-Saga](https://github.com/redux-saga/redux-saga)

### - API Library

[Apollo](https://www.apollographql.com/),

### - CSS

[Sass](https://github.com/sass/sass)

### - Design System

[styleguidist](https://github.com/styleguidist/react-styleguidist)

### - Style Guid & Icon

[Styleguidist](https://github.com/styleguidist/react-styleguidist)[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

### - Testing

react-testing-library

[jest](https://jestjs.io/docs/en/getting-started.html), [react-testing-library](https://github.com/testing-library/react-testing-library),
[axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)

---

## Icon 사용

[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
string props를 사용하기 위해 우선 atoms/Icon내에서 import사용 필요. (나머지 Icon md파일 확인)

## **Structure**

참조: [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

```bash
.
├── src
│   ├── setupTests.ts      # for react-testing-library
│   ├── @types             # d.ts file list
│   ├── components
│   │     ├──  atoms       # atom component list.
│   │     ├──  molecules   # molecule component list.
│   │     ├──  organisms   # organisms component list.
│   │     │       ├──  Timermodal/datas.ts # music list
│   │     ├──  templates   # template component list.
│   │     │       ├──  types.ts
│   │     │       ├──  sagas.ts
│   │     │       ├──  actions.ts
│   │     │       ├──  index.tsx
│   ├── interfaces         # 공유할 수 있는 type(todo move)
│   ├── store              # redux store
│   │     ├──  sagas.ts    # root reducer.
│   │     ├──  reducer.ts  # rootReducer
│   │     ├──  index.tsx   # create store root reducer and root saga
│   ├── apollo             # redux store
│   │     ├──  *API        # root reducer.
│   │     │       ├──  index.ts # queires.ts에 정의된 grapuql query function 사용
│   │     │       ├──  queries.ts # set query functions
├─── pages                 # next의 page 목록
├──  next.config.js        # config next webpack
├──  tsconfig.json         # config typescript compiler
├──  tsconfig.paths.json   # config typescript import paths
├──  jest.config.js        # config jest options
├──  jest.config.js        # typescript compiler for jest.config.js file
├──  enzyme.js             # for enzyme library
├──  styleguide.config.js  # for styleguidist library
├── docs
│   ├── webpack.config.js  # styleguidist설정을 위한 webpack
```

![1](https://user-images.githubusercontent.com/30386090/78392229-d869cf00-7622-11ea-8957-0d12b848c8ee.PNG)
![2](https://user-images.githubusercontent.com/30386090/78392231-d9026580-7622-11ea-8b5a-7acfb8a111bb.PNG)
