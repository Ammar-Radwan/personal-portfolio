import { createBrowserRouter } from "react-router-dom";
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import NotFound from '../pages/NotFound'


const MainRouter = createBrowserRouter([
    {
        path: '/personal-portfolio',
        children: 
        [
            {
                path: 'projects',
                element: <Portfolio />
            },
            {
                path: 'about',
                element: <About />
            },
            
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default MainRouter;



