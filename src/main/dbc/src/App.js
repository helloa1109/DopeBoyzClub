import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Hyuk from "./Component/hyuk";
import Left from "./Component/left";
import Right from "./Component/right";
import Main from "./Component/album";
import Up from "./Component/up";

function App() {

  const [currentPage, setCurrentPage] = useState('main');

  const handleKeyDown = (event) =>{
    switch (event.keyCode) {
      case 37: // 왼쪽
        setCurrentPage('left');
        break;
      case 38: // 위
        setCurrentPage('up');
        break;
      case 39: // 오른쪽
        setCurrentPage('right');
        break;
      case 40: // 아래
        setCurrentPage('down');
        break;
      case 13:
        setCurrentPage('main');
      default:
        break;
    }
  };

  const getPageComponent = () =>{
    switch (currentPage){
      case 'main':
        return Main;
      case 'up':
        return Up;
      case 'left':
        return Left;
      case 'right':
        return Right;
      case 'down':
        return Hyuk;
      default:
        return Main;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown); // 이벤트 리스너 추가

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // 이벤트 리스너 제거
    };
  }, []);

  const RenderComponent = getPageComponent();

  return (
    <div className="App">
      <Router>
        <div tabIndex="0"> {/* 키보드 초점을 받을 수 없는 div,span 도 초점 받을 수 있게 해줌*/}
          <Routes>
            <Route path="/" element={<RenderComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
