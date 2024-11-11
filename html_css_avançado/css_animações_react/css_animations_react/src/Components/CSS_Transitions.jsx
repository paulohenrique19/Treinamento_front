import React from 'react'
import '../styles/global.css';
import '../styles/CSS_Transitions.css';

const CSS_Transitions = () => {
  return (
    <div>
        <div className="transitions flex-to-column g-0.5 px-1">
            <h1>Transições CSS</h1>
            <p className='f-1'>
                Suavidade ao mudar o valor de uma propriedade
            </p>
            <h2 className='f-1'>transition-property</h2>
            <p className='f-1'>Define a propriedade da transição</p>
            <h2 className='f-1'>transition-duration</h2>
            <p className='f-1'>Define a duração da transição (s/ms)</p>
            <h2 className="f-1">transition-delay</h2>
            <p className="f-1">Aplica delay para iniciar e terminar animação</p>

            <h2 className="f-1">
              transition-property: opacity
            </h2>
            <p className="f-1">
              Aplica opacidade no elemento em determinado tempo
            </p>
            <h2 className="f-1">
              transition-property: transform
            </h2>
            <p className="f-1">
              Aplica deslocamento no elemento em determinado tempo
            </p>
            <h2 className="f-1">
              transition-property: all
            </h2>
            <p className="f-1">
              Aplica todas as propiedades 
            </p>
            <p className="f-1">Aplicando: transition-property: opacity, transform;
            transition-duration: 1s, 2s; transition-delay: 200ms;</p>
            <p className="f-1">Aplicando no hover: opacity: 1;
            transform: translateX(50px)</p>
            <div className="area">
            </div>
            <p className="f-1">
              OBS: Em multiplas transições com multiplas durações, o CSS entende onde precisa colocar
              o tempo específico da transição específica com base na ordem em que foram declarados em transition-property e transition-duration
            </p>
        </div>
    </div>
  )
}

export default CSS_Transitions;