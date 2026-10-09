import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleMinus, FaCirclePlus, FaSkull } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";

function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Cart() {
    const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    function handleCart(id, t) {
        const pokemon = pokemons.find(poke => poke.id === id);
        const index = pokemons.indexOf(pokemon);
        const newPokemons = [...pokemons];

        if (t) {
            pokemon.nb++;
            newPokemons.splice(index, 1, pokemon);
        } else {
            pokemon.nb--;
            if (pokemon.nb === 0)
                newPokemons.splice(index, 1);
            else
                newPokemons.splice(index, 1, pokemon);
        }

        setPokemons(newPokemons);
        localStorage.setItem("cart", JSON.stringify(newPokemons));
    }
    
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
                 <>
                     <div className="m-auto flex flex-wrap justify-center gap-4 items-center mt-16 w-[60%]">
                         {pokemons.map(pokemon => (
                             <div
                                 key={pokemon.id}
                                 className="flex items-center justify-center gap-2 border-2 border-black rounded-[15px] p-4"
                             >
                                 <img
                                     src={pokemon.img}
                                     alt={pokemon.name}
                                 />
                                 <div className="flex flex-col items-center w-64">
                                     <h1 className="text-xl font-bold">{upperFirstLetter(pokemon.name)}</h1>
                                     <p>Type : <span className="font-bold">{upperFirstLetter(pokemon.type)}</span></p>
                                     <p>{(pokemon.price * pokemon.nb).toLocaleString('fr-FR')} ₽</p>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                     <button
                                         className="hover:scale-110 active:scale-95 transition-all ease-out"
                                         onClick={() => handleCart(pokemon.id, false)}
                                     >
                                         <FaCircleMinus size={24} />
                                     </button>
                                     <span className="text-xl font-bold">{pokemon.nb}</span>
                                     <button
                                         className="hover:scale-110 active:scale-95 transition-all ease-out"
                                         onClick={() => handleCart(pokemon.id, true)}
                                     >
                                         <FaCirclePlus size={24} />
                                     </button>
                                 </div>
                             </div>
                         ))}
                     </div>
                     <p className="text-xl font-bold m-auto mt-8 text-center">Total : {pokemons.reduce((acc, pokemon) => acc + (pokemon.price * pokemon.nb), 0).toLocaleString('fr-FR')}</p>
                     <div className="m-auto flex justify-center gap-4 mt-8">
                         <button className="font-bold bg-[#B8B8B6] text-[#5E1200] p-2 rounded-[15px] hover:scale-110 active:scale-95 transition-all ease-out">
                             <Link to="/shop" className="flex gap-2 items-center">
                                 Continue Shopping
                                 <FaSkull />
                             </Link>
                         </button>
                         <button className="flex gap-2 items-center font-bold bg-[#B8B8B6] text-[#5E1200] p-2 rounded-[15px] hover:scale-110 active:scale-95 transition-all ease-out">
                             Pay
                             <FaMoneyBillWave />
                         </button>
                     </div>
                 </>
             )}
         </>
    );
}
