import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSkull } from "react-icons/fa6";

function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Cart() {
    const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    
    return (
        <>
            {pokemons.length === 0
             ? (
                 <div className="flex flex-col items-center justify-center gap-2 mt-[200px]">
                     <p className="font-bold text-2xl">Your cart is empty</p>
                     <button className="font-bold bg-[#B8B8B6] text-[#5E1200] p-2 rounded-[15px] hover:scale-110 active:scale-95 transition-all ease-out">
                         <Link to="/shop" className="flex gap-2 items-center">
                             Shop Now
                             <FaSkull />
                         </Link>
                     </button>
                 </div>
             )
             : (
                 <div>
                     {pokemons.map(pokemon => (
                         <div
                             key={pokemon.id}
                             className="flex gap-2 border-2 border-black rounded-[15px]"
                         >
                             <img
                                 src={pokemon.img}
                                 alt={pokemon.name}
                             />
                             <div className="flex flex-col items-center">
                                 <h1 className="text-xl font-bold">{upperFirstLetter(pokemon.name)}</h1>
                                 <p>Type : <span className="font-bold">{upperFirstLetter(pokemon.type)}</span></p>
                                 <p>{(pokemon.price * pokemon.nb).toLocaleString('fr-FR')} ₽</p>
                             </div>
                         </div>
                     ))}
                 </div>
             )}
         </>
    );
}
