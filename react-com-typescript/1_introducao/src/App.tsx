import Post from './Post.tsx'
import Header from './components/Header.tsx'

import styles from './App.module.css'
import './global.css'
import Sidebar from './components/Sidebar.tsx'

function App() {
  return (
    <>

      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author = "Teste"
            content = "Auto-explicativo"
          />
          <Post 
            author = "Teste"
            content = "Auto-explicativo"
          />
        </main>
      </div>
    </>
  )
}

export default App
