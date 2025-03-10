import styled from "styled-components";

export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme['gray-100']};

    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        background: ${(props) => props.theme['gray-700']};
        padding: 1rem 1rem;
        border-radius: 8px;
    }
`;

export const Separator = styled.div`
    padding: 1rem 0;
    background: ${(props) => props.theme['gray-800']};
    color: ${props => props.theme['green-500']};
    width: 3rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`