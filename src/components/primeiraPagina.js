import React from "react";
import { Principal } from "../assets/css/style";
import Filmes from "./filmes";

export default function PrimeiraPagina({setId}){

    return(
        <div>
            <Principal>
                <div><p>Selecione o filme</p></div>
                <Filmes setId = {setId}/>             
            </Principal>
            
        </div>
    )
}
