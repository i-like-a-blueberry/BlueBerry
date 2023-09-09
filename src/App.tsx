import { useRoutes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const App: React.FC = () => {
    const router = useRoutes(
	[{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'everyones',
				element: <Home />
			},
			{
				path: 'trend',
				element: <Home />
			},
         	{
               	path: '*',
               	element: <NotFound />
           	}
		]},
	])

    return router;
}

export default App;
