import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Principal, AssentosSessao, Status, Dados, Div, Button, Verde, Cinza, Amarelo, CinzaEscolha, Escolhido, EscolhidoClick } from "../assets/css/style";
import Botao from "./botao";


export default function Sessao({idDia, assentos, setAssentos, nome, cpf, setNome, setCpf, setFilmeNome, setDiaDeFilme, setHorario}){
    const [seats, setSeats] = useState([])

    const [numeros, setnumeros] = useState([])


    const postURL = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many'

    useEffect(() =>{
        const promise  = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idDia}/seats`)
        .then((res) => {
            setSeats(res.data.seats)
            setHorario(res.data.name)
            setFilmeNome(res.data.movie.title)
            setDiaDeFilme(res.data.day.weekday) 
        })
        .catch(err => console.log(err.response.data))
    }, [])
    const navigate = useNavigate()
    return(
        <Div>
            <Principal><div><p>{`Selecione o(s) assento(s)`}</p></div></Principal>
            
            <AssentosSessao>
                {seats.map(s => <Assentos numero={s.name} avaiable = {s.isAvailable} setAssentos = {setnumeros} assentos = {numeros} />)}
            </AssentosSessao>
           
            <Status>
                <div>
                    <Verde />
                    <p>Selecionado</p>
                </div>

                <div>
                    <Cinza />
                    <p>Disponível</p>
                </div>

                <div>
                    <Amarelo />
                    <p>Indisponível</p>
                </div>
            </Status>

            <Dados>
                <h1>Nome do comprador:</h1>
                <input 
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <h1>CPF do comprador:</h1>
                <input 
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                />
                <div onClick={() => {
                    let dados = 
                    {
                        ids: numeros,
                        name: nome,
                        cpf: cpf
                    };
                    let promise = axios.post(postURL, dados)
                    promise.then((crr) => {
                        console.log("enviados com sucesso")
                        navigate('/sucesso')
                    });
                    promise.catch(err => console.log(err.data.response))
                }}>
                    <Botao text = {'Reservar assento(s)'}/>
                </div>
            </Dados>
        </Div>
    )

}

function Assentos(props){

    if(props.avaiable == true){
        return( 
            <CinzaEscolha onClick={() => {
                props.setAssentos([...props.assentos, props.numero])
                console.log(props.assentos)
            }}>{props.numero}</CinzaEscolha>
        )
    }
    return(
        <Escolhido disabled="true">{props.numero}</Escolhido>
    )
}