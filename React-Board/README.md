# 리액트 게시판 프로젝트

CRUD 기능을 포함한 리액트 기반의 게시판 프로젝트 입니다.  
현재는 블로그 용도로 사용하기 위한 목적으로 기능들을 추가하고 있습니다.

# 프로젝트 정보

## 개발 현황

현재 기본적인 로그인/로그아웃, 게시글 수정/작성/삭제 구현 완료된 상태이며  
태그 기능, 사진 업로드, 회원 정보 수정 기능을 추가로 넣을 계획입니다.

기존에 완료했던 프론트 (board-frontend.old)를  
타입스크립트로 교체했고 계속해서 보완중입니다. (board-frontend)

백엔드 버전 1.2.0

-   1.0.0 배포 시작
-   1.1.0 댓글 모델 추가, 댓글 등록 기능 추가
-   1.2.0 댓글 수정, 삭제 기능 추가
-   1.3.0 사진 업로드 기능 개선(base64 -> FormData 전송)

프론트엔드 버전 1.2.0

-   1.0.0 배포 시작
-   1.1.0 댓글 기능 추가, 댓글 리스트 기능 추가
-   1.2.0 댓글 수정과 삭제, 그에 따른 라우터 추가
-   1.3.0 사진 업로드 기능 추가, multer 패키지 추가

추후 구현 사항들

-   왼쪽 태그 기반의 카테고리
-   계정 권한 기능 추가
-   댓글 답글

## 설치와 진행

프론트에서 빌드 후 백엔드에서 접근이 가능합니다.  
./board-frontend/

```
yarn install
yarn build
```

./board-backend/

```
yarn install

// 개발용
yarn start:dev
// 배포
yarn start
```

프론트엔드 빌드 후, 백엔드 경로(http://localhost:3003)를 접속하면,  
프론트엔드 build 폴더를 통해 프론트가 실행됩니다.

## 개발 환경

프론트는 타입스크립트 기반의 리액트로, 백엔드는 koa 웹프레임워크를 사용한 Node.js 기반의 API 서버로 만들었습니다.

## 배포 환경

~~노트북으로 구동되는 개인 서버에서 구동중입니다.  
본격적인 사용이 가능하다고 판단되면 도메인을 사용할 예정입니다.  
주소: http://121.168.76.254:3003/~~

*더 이상 사용하지 않는 저장소 입니다.*