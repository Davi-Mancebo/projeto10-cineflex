import React, { useState } from "react";
import PrimeiraPagina from "./primeiraPagina"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "../assets/css/style";
import PaginaFilme from "./paginaFilme";
import Sessao from "./paginaSessao";

export default function App(){
    const [id, setId] = useState(0);
    const [idDia, setIdDia] = useState(0)

    return(
        <BrowserRouter>
            <Link to="/"><Header>CINEFLIX</Header></Link>
        
            <Routes>
                <Route path="/" element={<PrimeiraPagina setId = {setId}/>} />
                <Route path='/sessoes/:idFilme' element={<PaginaFilme id = {id} setIdDia = {setIdDia}/>}/>
                <Route path='/assentos/:idSessao' element={<Sessao idDia = {idDia}/>}/>
            </Routes>
        </BrowserRouter>
    )
}