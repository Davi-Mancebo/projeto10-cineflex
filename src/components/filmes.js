import React, { useEffect } from "react";
import { useState } from "react";
import { Conteudo } from "../assets/css/style";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Filmes({setId}){
    const [filme, setFilme] = useState([])

    useEffect(() =>{
    const Url = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const promise = axios.get(Url);
    promise.then(res => setFilme(res.data))
    promise.catch(err => console.log(err.response.data))
    }, [])
    
    return(
        <Conteudo>
                {filme.map(i => <ImprimeCartaz image={i.posterURL} id={i.id} setId={setId}/>)}  
        </Conteudo>
    )


}

function ImprimeCartaz(props){
    return(
        <div>
            <Link to={`/sessoes/${props.id}`}>
                <img src={props.image} onClick={() => 
                    {
                        props.setId(props.id) 
                        console.log(props.id)
                    }
                }/>
            </Link>
        </div>
    )
}
