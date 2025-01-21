import { useReducer} from "react";

const initializeState = { count: 0};

function reducer(state, action)
{
    switch(action.type)
    {
        case "increment":

    }
}


export function Contador() {

    // state: estado atual da variável
    // dispatch: função para enviar ações para o reducer
    // reducer: função que define como o estado será modificado
    // initializeState: valor inicial do estado
    const [state, dispatch] = useReducer(reducer, initializeState)

    return (
        <div>
            <h1>Contador</h1>

            <div>
               
            </div>
        </div>
    )
}