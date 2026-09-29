import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

const router = createBrowserRouter([
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
]);

function App() {    
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}

export default App
