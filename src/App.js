import './App.css';
import DashBoard from './components/DashBoard';
import LightBox from './components/LightBox';
import Menu from './components/Menu';
import {useLocation} from "react-router-dom"
import NotFound from './components/NotFound';

const allPaths = ["/", "/user/list", "/user/view"]

function App() {
  const { pathname } = useLocation();
  return (
    <>
    {allPaths.includes(pathname)?
    <>
        <Menu/>
        <DashBoard/>
        <LightBox/>
    </>
    :<NotFound/>}
    </>
  );
}

export default App;
