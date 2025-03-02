# 프로젝트 제목
 React-SocialWeb_Project
 
# 주요 기능 설명
 사용자가 회원가입, 로그인 후에 사용자 메인 페이지에서 나와 팔로워, 팔로우 된 친구들의 피드들이 보여지고 사용자가 사진을 save할 경우 피드에 맨 위로 업로드 sort된다. <br/>
 
 ---------------------------------------------------------------
## Context API
전반적인 사이트의 구현을 하기 위해서 React 컴포넌트 트리의 상위에서 하위 컴포넌트로<br/> 데이터를 
전달하는 방법을 제공하며, 중간에 있는 중간 컴포넌트들은 해당 데이터를 <br>  직접 전달하지 않고도 접근할 수 있는 **Context API**를 사용해 전역적인 상태 관리를 하였다.<br/>  
이 Context API를 사용함으로써  Prop drilling을 피할 수 있으며, 컴포넌트 간의 데이터 전달을 보다 효율적으로 처리하고, 상태관리를 더 효율적으로 할 수 있었다.

## REST API
회원가입과 로그인, 프로필/친구 관리, 게시물관리 등에 있어 서버 간의 통신을 효율적으로 처리 할 수 있었고, 데이터 교환을 용이하게 해주었다.

## Postman
RESTful API를 테스트하고 문서화하는 데 사용되는 API 개발 도구로써 사용했으며
HTTP요청들을 수행 할 수 있었고, 응답을 확인할 수 있었다.

## React Query
React 애플리케이션에서 데이터를 관리하기 위한 도구로 사용했으며, 사용자 프로필정보, 포스트 등의 데이터를 불러올때 API요청과 데이터 캐싱을 자동으로 처리 할 수 있었으며 중복되는 API요청을 방지하고 빠르게 데이터를 렌더링 할 수 있었다.

## Material UI
웹 사이트의 페이지 구성부분에서 Topbar, Sidebar 등에 사용하여 다양한 컴포넌트와 스타일링 도구를 제공받을 수 있었고, 별도의 스타일링 작업 없이도 쉽고 빠르게 사용자 인터페이스를 구성할 수 있습니다.

---------------------------------------------
 
# 화면 구성
<img src="https://user-images.githubusercontent.com/96070681/231950827-f21de395-827c-4139-9617-17b88d69a03d.png" width="50%"><img src="https://user-images.githubusercontent.com/96070681/231950832-74b87269-8fe7-4067-81b5-e5e745740817.png" width="50%">  

<img src="https://user-images.githubusercontent.com/96070681/231950382-471c4c62-ef62-46fe-b842-a74f9decacf0.png" width="50%"><img src="https://user-images.githubusercontent.com/96070681/231951221-ac0e7d81-6d21-4417-a21c-16c4c5b607a5.png" width="50%">  
#### 로그인 사용자가 파일을 업로드시킬 수 있다 업로드된 사진 파일은 내림차순으로 정렬된다.

<img src="https://user-images.githubusercontent.com/96070681/231945267-69819d33-b33a-4acb-89f3-3d123a831528.png">
<img src="https://user-images.githubusercontent.com/96070681/234468900-2934989f-4c0c-4cb5-8f90-5a480b9c8d9c.gif" width="900" height="450">
 로그인한 사용자의 친구들의 피드와 프로필을 볼 수 있으며, 각 게시물 포스터에 좋아요를 누르고 삭제 할 수 있다.

------------------------------------------------------

### 사이트의 전반적인 구조
<img src="https://user-images.githubusercontent.com/96070681/231964417-b1538ae4-e92a-43c2-9414-b958e4ad48a0.png">



### 프로젝트 후 얻은 점
그저 여러 강의와 구굴링해서 배웠던 부분을 웹 사이트를 만들며 적용시키는 과정에서 많은 에러들이 발생했고 에러를 해결하면서 어려운 부분이었던 반응형 웹 디자인, SPA, Hook함수적용, 상태관리와 여러 라이브러리 부분을 프로젝트에 적용시키고, 에러를 해결하기 위한 고민 과정에서 많은 것을 배운 프로젝트였다. 

----------------------------------------------------
<div align=center><h1>📚 STACKS</h1></div>
<div align=center> 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>


