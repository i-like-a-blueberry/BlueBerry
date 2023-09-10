import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Everyones from './pages/Everyones';
import Trend from './pages/Trend';
import NotFound from './pages/NotFound';
import NavBar from './component/NavBar';
import { Box } from '@chakra-ui/react';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Box p="32px 16px">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/everyones' element={<Everyones />} />
					<Route path='/trend' element={<Trend />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Box>
		</div>
	)
}

export default App;
