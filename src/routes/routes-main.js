import MainLayout from "../components/Main-Layout";
import Updating from "../Page/updating";
import ProductsScreen from "../Page/AllProduct/screenProducts";
import Home from "../Page/Home/index";
import NotFound from "../Page/NotFound";

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
                path: "updating",
                element: <Updating/>
            },
            {
                path: "screen-products/:id",
                element: <ProductsScreen/>
            },
            { 
                path: "*", 
                element: <NotFound />
            }
        ]
    }
]