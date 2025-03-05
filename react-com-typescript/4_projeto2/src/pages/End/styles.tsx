import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  max-width: 80rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 21rem
`;

export const Image = styled.div`

`

export const Data = styled.div`
 display: flex;
 flex-direction: column;
 width: auto;
 gap: 1rem;
 padding: 2.5rem;
 min-width: 26.5rem;
 border: 3px solid transparent;  /* Transparente para a borda */
 border-image:  linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(158,116,230,1) 100%);
 border-image-slice: 1;  /* Necessário para o gradiente preencher a borda */
 

`

