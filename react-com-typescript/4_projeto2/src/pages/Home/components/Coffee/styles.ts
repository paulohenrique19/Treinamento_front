import styled from "styled-components";

export const CoffeeContainer = styled.div`
    width: 16rem;
    background: rgb(255,254,239);
    background: linear-gradient(0deg, rgba(255,254,239,1) 0%, rgba(251,243,255,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img {
        margin-top: -1rem;
    }
    
`

export const Label = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    gap: 0.5rem;

    p {
        border-radius: 1rem;
        background-color: #F1E9C9;
        font-size: 0.7rem;
        padding: 0.3rem;
        color: #C47F17;
    }
`

export const Descricao = styled.div`
    
    display: flex;
    flex-direction: column; /* Mudando para coluna */
    justify-content: center; /* Alinha o conteúdo verticalmente */
    align-items: center; /* Alinha o conteúdo horizontalmente */
    text-align: center; /* Centraliza o texto no eixo horizontal */
    width: 100%; /* Garante que ocupe toda a largura do container */

    p {
        color: #8D8686;
    }


`

export const Separator = styled.div`
    display: flex;
    gap: 0.5;
`

export const Preco = styled.div`
    display: flex;
    gap: 0.2rem;
    p {
        font-size: 2rem;
        font-family: "Baloo 2", serif;
        font-weight: 800;
        color: #574F4D;
    }
`

export const AddRemove = styled.div`
    display: flex;
    gap: 0.2rem;
    padding: 0.5rem;

    background-color: #E6E5E5;

`