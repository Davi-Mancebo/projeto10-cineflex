import styled from "styled-components";


export const Header = styled.div`
    position: fixed;
    top: 0;


    background-color: #C3CFD9;

    width: 100%;
    height: 67px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #E8833A;
    font-size: 34px;
    font-family: 'Roboto', sans-serif;
`;
export const Principal = styled.div`
    align-items: center;
    justify-content: center;
    align-items: center;
    margin-top: 67px;

    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #293845;

    flex-direction: column;
    div, p{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 110px;
    }
`
export const Conteudo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 27px 46px;
    div{
        width: 149px;
        height: 209px;

        background-color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: center;
        
        filter: drop-shadow(4px, 0px, 2px rgba(0, 0, 0, 0.1))
    }
    img{
        width: 129px;
        height: 193px;
    }
    
`
export const Base = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 117px;
    
    position: fixed;
    bottom: 0;
    img{
        width: 48px;
        height: 78px;
    }
    h1{

    }
`

export const Horarios = styled.div`
    font-family: 'Roboto', sans-serif;

    margin-bottom: 23px;
    margin-left: 24px;
    h1{
        color: #293845;
        font-size: 20px;

        margin-bottom: 22px;
    }

    div{
        display: flex;
    }
    button{
        background-color: #E8833A;
        
        border-radius: 3px;

        color: #FFFFFF;

        width: 82px;
        height: 43px;

        margin-right: 8px;

        border: 0px;
    }
`
export const AssentosSessao = styled.div`
    width: 90%;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px 8px;

    flex-wrap: wrap;

    margin-bottom: 16px;
    button{
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        line-height: 13px;
        line-height: 100%;
        letter-spacing: 4%;

        background-color: #C3CFD9;

        border: 1px solid #808F9D;
        border-radius: 12px;
        width: 26px;
        height: 26px;
    }
`
export const Status = styled.div`
    display: flex;

    div{
        display: flex;
        flex-direction: column;

        width: 100%;

        align-items: center;
        justify-content: center;
        align-items: center;
        justify-content: space-around;
    }
    div>div{
        background-color: red;

        border: 1px solid darkred;
        border-radius: 12px;
        width: 26px;
        height: 26px;

        margin-bottom: 5px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        color: #4E5A65;
        font-size: 13px;
    }
`
export const dados = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;
    margin-left: auto;
    margin-right: auto;
    
    input{
        border: 1px solid #D4D4D4;

        width: 90%;
        height: 51px;

        align-items: center;
    }
`