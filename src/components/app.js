import React, { useState } from "react";
import PrimeiraPagina from "./primeiraPagina"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "../assets/css/style";
import PaginaFilme from "./paginaFilme";
import Sessao from "./paginaSessao";
import Concluido from "./concluido";

export default function App(){
    const [id, setId] = useState(0);
    const [idDia, setIdDia] = useState(0)

    const [filmeNome, setFilmeNome] = useState("")
    const [horario, setHorario] = useState("")
    const [diaDeFilme, setDiaDeFilme] = useState("")

    const [assentos, setAssentos] = useState([])
    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")

    return(
        <BrowserRouter>
            <Link to="/"><Header>CINEFLIX</Header></Link>
        
            <Routes>
                <Route path="/" element={<PrimeiraPagina setId = {setId}/>} />
                <Route path='/sessoes/:idFilme' element={<PaginaFilme id = {id} setIdDia = {setIdDia}/>} />
                <Route path='/assentos/:idSessao' element={<Sessao idDia = {idDia} assentos = {assentos} nome={nome} cpf={cpf} setNome={setNome} setCpf={setCPF} setFilmeNome={setFilmeNome} setDiaDeFilme={setDiaDeFilme} setHorario={setHorario} />} />
                <Route path='/sucesso' element={<Concluido assentos = {assentos} setAssentos = {setAssentos} nome = { nome } cpf = {cpf} filmeNome={filmeNome} horario={horario} diaDeFilme={diaDeFilme}/>} />
            </Routes>
        </BrowserRouter>
    )
}