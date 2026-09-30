import Logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="flex items-center gap-4">
                <img
                    src={Logo}
                    alt="Logo"
                    className="rounded-[50%] h-36"
                />
                <h1 className="text-[#B8B8B6] text-8xl font-bold">PokeShop</h1>
            </div>
        </div>
    );
}
