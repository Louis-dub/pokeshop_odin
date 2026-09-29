import Logo from "../assets/logo.png";

export default function Header() {
    return (
        <>
            <nav className="flex between bg-gray-900 items-center p-4">
                <div className="flex justify-center items-center gap-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-10 rounded-[50%]"
                    />
                    <h1 className="text-white text-xl font-bold">PokeShop</h1>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-8 text-white">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
