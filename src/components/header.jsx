import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
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
                        <li
                            className="cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                        >
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
