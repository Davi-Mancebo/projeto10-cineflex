import React, { useState } from "react"
import axios from "axios";
import { Horarios, Principal, Div } from "../assets/css/style";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function PaginaFilme({id, setIdDia}){
    const [filme, setFilme] = useState([])
    const [days, setDay] = useState([])

    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
    promise.then(res => {
        setFilme(res.data)
        setDay(res.data.days)
    })
    promise.catch(err => {
        console.log(err.response.data)
        console.log(id)
    })

    return(
        <Div>
            <Principal>
                <div><p>Selecione o Horario</p></div>
            </Principal>
            {days.map(d => <Days dia = {d.weekday} data = {d.date} horarios = {d.showtimes} setIdDia={setIdDia} id1 = {d.showtimes[0].id} id2 = {d.showtimes[1].id}/>)}

        </Div>
    )
}

function Days(props){
    return(
        <Horarios>
            <h1>{props.dia} - {props.data}</h1>
            <div>
                <Link to={`/assentos/${props.id1}`}>
                    <button onClick={() => {
                        props.setIdDia(props.id1)
                        console.log(props.id1)
                    }}>
                        {props.horarios[0].name}
                    </button>
                </Link>

                <Link to={`/assentos/${props.id2}`}>
                    <button onClick={() => {
                        props.setIdDia(props.id2)
                        console.log(props.id2)
                    }
                    }>
                        {props.horarios[1].name}
                    </button>
                </Link>
            </div>
        </Horarios>
    )   
}
