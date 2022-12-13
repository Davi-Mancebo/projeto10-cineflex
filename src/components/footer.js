import React from "react"
import { Base } from "../assets/css/style"

export default function Footer(img, nome, horarios){

    return(
        <Base>
            <img src={img} />
            <div>
                <h1>{nome}</h1>
                <h1>{horarios}</h1>
            </div>
        </Base>
    )
}