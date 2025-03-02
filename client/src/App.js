import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


function App() {

  const {user} = useContext(AuthContext);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact  element={user ? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}



// v6 부터 Redirect X ===> Navigate사용으로 변경!!

// 페이지이동이 안됨..
// "리소스 로드 실패: net::ERR_BLOCKED_BY_CLIENT" 에러 발생
// Google 크롬의 일반적인 범인은 캐시!!. Chrome 캐시를 재설정하려면 chrome 설정으로 이동. 개인 정보 및 보안 섹션을 찾은 다음 검색 데이터 지우기를 선택-> 전체시간 -> 지우기 -> 해결 완료

// 페이지 이동은 되는데 이미지가 안 나옴 문제...
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })); 사용해서 이미지 이제 나옴 .. 
// const helmet  = require('helmet'); 여기에 const {helmet} = require... 이렇게 오타로 안 돼었음
export default App;
