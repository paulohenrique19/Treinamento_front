import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: auto;
    width: auto;
    
    max-width: 80rem;

    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Logo = styled.img.attrs({
    src: 'src/assets/images/Home/logos.svg', // Caminho relativo ao seu `public` (sem o ../../)
  })`
    
`

export const Separator = styled.div`
    display: flex;
    gap: 0.75rem;

`

export const Local = styled.div`
    display: flex;
    width: 8.9rem;
    height: 2.375rem;
    background-color: #EBE5F9;
    border-radius: 0.375rem;
    padding: 0.5rem;

    img {
        margin-right: 0.5rem; /* Espaço entre o ícone e o texto */
    }
    
    p {
        color: #4B2995;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.7;
    }

`

export const CartIcon = styled.button`
    border: none;
    height: 2.375rem;
    width: 2.375rem;
    background-color: #F1E9C9;
    border-radius: 0.375rem;
    padding: 0.5rem;

    
`

export const CartImage = styled.img.attrs({
    src: 'src/assets/images/Home/Icon.svg', // Caminho relativo ao seu `public` (sem o ../../)
  })`
    
`