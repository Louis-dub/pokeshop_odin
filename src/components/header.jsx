import Logo from "../assets/logo.png";

export default function Header() {
    return (
        <>
            <nav className="flex justify-between bg-gray-900 items-center p-4">
                <div className="flex justify-center items-center gap-4 cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-10 rounded-[50%]"
                    />
                    <h1 className="text-white text-2xl font-bold">PokeShop</h1>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-8 text-white text-xl mr-8">
                        <li
                            className="cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                        >
                            Home
                        </li>
                        <li
                            className="cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                        >
                            Shop
                        </li>
                        <li
                            className="cursor-pointer hover:scale-110 active:scale-95 transition-all ease-out"
                        >
                            Cart
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
