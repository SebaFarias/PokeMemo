import { Context, createContext, } from "react";
import { PokeState, defaultPokeState } from "./Provider";

const PokeContext: Context<[PokeState,{}]> = createContext([defaultPokeState,{}]) 

export default PokeContext