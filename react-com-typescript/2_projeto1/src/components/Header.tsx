import styles from './Header.module.css'
import logo from '../assets/rocket.svg'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="Logo do projeto" />
        <p className={styles['text-decoration']}>todo</p>
    </div>
  )
}

export default Header