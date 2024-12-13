import Header from './components/Header'
import MainArea from './components/MainArea'
import './global.css'
import styles from './App.module.css'


const tasks = [
  "Task 1",
  "Task 2",
  "Task 3",
  "Task 4",
  "Task 5"
]

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainArea tasks={tasks}/>
      </div>
    </>
  )
}

export default App
