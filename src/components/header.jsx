import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        function updateCount() {
            const pokemons = JSON.parse(localStorage.getItem("cart")) || [];

            if (pokemons.length === 0)
                setCartCount(0);
            else
                setCartCount(pokemons.reduce((acc, pokemon) => acc + pokemon.nb, 0));
        }

        updateCount();
        window.addEventListener("storage", updateCount);
        window.addEventListener("cartUpdated", updateCount);
        return () => {
            window.removeEventListener("storage", updateCount);
            window.removeEventListener("cartUpdated", updateCount);
        };
    }, []);
    
    return (
        <>
            <nav className="flex justify-between bg-gray-900 items-center p-4">
                <div>
                    <Link
                        to="/"
                        className="flex justify-center items-center gap-4 cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-10 rounded-[50%]"
                        />
                        <h1 className="text-white text-2xl font-bold">PokeShop</h1>
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-8 text-white text-xl mr-8">
                        <li
                            className="cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                        >
                            <Link to="/home">Home</Link>
                        </li>
                        <li
                            className="cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                        >
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li className="relative cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out">
                            <Link to="/cart" className="flex items-center gap-2">
                                Cart
                            </Link>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
