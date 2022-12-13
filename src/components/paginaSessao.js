import axios from "axios";
import React, { useState } from "react";
import { Principal, AssentosSessao, Status } from "../assets/css/style";


export default function Sessao({idDia}){
    const [seats, setSeats] = useState([])
    const [disable, setDisable] = useState("")
    const [selecionado, setSelecionado] = useState("")

    const promise  = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idDia}/seats`)
    .then((res) => {
        setSeats(res.data.seats)
    })
    .catch(err => console.log(err.response.data))

    return(
        <div>
            <Principal><div><p>{`Selecione o(s) assento(s)`}</p></div></Principal>
            
            <AssentosSessao>
                {seats.map(s => <Assentos numero={s.name} />)}
            </AssentosSessao>
           
            <Status>
                <div>
                    <div variant={{ main: 'disponivel' }}/>
                    <p>Selecionado</p>
                </div>

                <div>
                    <div />
                    <p>Disponível</p>
                </div>

                <div>
                    <div color={{ main: 'indisponivel' }}/>
                    <p>Indisponível</p>
                </div>
            </Status>

            
        </div>
    )
}
function clicado(){
    console.log("click")
}

function Assentos(props){
    return( 
        <button onclick={clicado}>{props.numero}</button>
    )
}
