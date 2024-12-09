/*Import para a biblioteca de ícones */
import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'


const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
          className={styles.cover}
          src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
    
        <div className={styles.profile}>
          <img className={styles.avatar} src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


          <strong>User Name</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
    
    </aside>
  )
}

export default Sidebar