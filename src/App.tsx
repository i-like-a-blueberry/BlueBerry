import { useRoutes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const App: React.FC = () => {
    const router = useRoutes([
            {
                path: '/',
                element: <Home />,
                children: [
                  {
                    path: '*',
                    element: <NotFound />
                  }
                ]
            }
        ])

    return router;
}

export default App;