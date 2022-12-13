import React, { useState } from "react";
import { DadosConc, Div, Principal2 } from "../assets/css/style";
import axios from "axios";
import Botao from "./botao";
import { Link } from "react-router-dom";

export default function Concluido({assentos, nome, cpf, filmeNome, horario, diaDeFilme}){
        return(
            <Div>
                <Principal2>
                    <div>
                        <p>Pedido feito</p>
                        <p>com sucesso!</p>
                    </div>
                </Principal2>
                <DadosConc>
                    <h1>Filme e sessão</h1>
                    <h2>{filmeNome}</h2>
                    <h2>{diaDeFilme} - {horario}</h2>

                    <h1>Ingressos</h1>
                    {assentos.map(a => <Escolhas assentos={a.id}/>)}

                    <h1>Comprador</h1>
                    <h2>Nome: {nome}</h2>
                    <h2>Comprador: {cpf}</h2>
                </DadosConc>
                
                <Link to='/'>
                <Botao text={'Voltar pra Home'}/>
                </Link>
            </Div>
            )  

}
function Escolhas(props){
    return(
        <h2>{`Assento ${props.assentos}`}</h2>
    )
}