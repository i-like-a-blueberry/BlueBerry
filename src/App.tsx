import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Everyones from './pages/Everyones';
import Trend from './pages/Trend';
import NotFound from './pages/NotFound';
import NavBar from './component/NavBar';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/everyones' element={<Everyones />} />
				<Route path='/trend' element={<Trend />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App;
