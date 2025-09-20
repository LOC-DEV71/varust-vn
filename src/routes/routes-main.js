import MainLayout from "../components/Main-Layout";
import About from "../Page/about";
import Home from "../Page/Home/index";

export const routes = () => [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }, 
            {
                path: "about",
                element: <About/>
            }
        ]
    }
]