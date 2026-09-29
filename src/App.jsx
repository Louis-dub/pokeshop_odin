import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
    }
]);

export default function App() {    
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
