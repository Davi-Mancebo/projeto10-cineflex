import React from "react";
import { Div, Principal } from "../assets/css/style";
import Filmes from "./filmes";


export default function PrimeiraPagina({setId}){

    return(
        <Div>
            <Principal>
                <div><p>Selecione o filme</p></div>
                <Filmes setId = {setId}/>             
            </Principal>
            
        </Div>
    )
}
