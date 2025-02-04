import styled from "styled-components";


export const CoffeeListContainer = styled.div`
    margin: auto;
    width: auto;

    display: flex;
    flex-direction: column;

    gap: 3rem;
    
    max-width: 80rem;

    padding: 1rem;

    border: 1px solid ;
`

export const Title = styled.div`
    font-size: 2rem;
    font-family: "Baloo 2", serif;
    font-weight: 800;
    color: #403937;
`

export const Coffees = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`