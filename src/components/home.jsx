import Logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-4">
                <img
                    src={Logo}
                    alt="Logo"
                    className="rounded-[50%] h-36"
                />
                <h1 className="text-8xl font-bold">PokeShop</h1>
            </div>
            <p className="text-3xl text-center">
                <span className="font-bold">Welcome to the PokeShop.</span>
                <br />
                If you mention the website to anyone, we’ll track you down !!!
            </p>
        </div>
    );
}
