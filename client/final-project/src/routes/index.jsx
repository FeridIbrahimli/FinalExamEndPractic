import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";



export const ROUTES = [
    {
        element: <MainRoot/>,
        path: "/",
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
        ],

    },
]