import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

function Layout() {
    return (
        <div className="h-screen flex flex-col overfow-hidden">
            <Header />
            <main className="flex-1 min-h-0 overflow-y-auto bg-[#5E1200]">
                <Outlet />
            </main>
        </div>
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
