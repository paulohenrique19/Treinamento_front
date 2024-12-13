import styles from './MainArea.module.css'
import plus from '../assets/plus.svg'

const MainArea = ( {tasks}: string ) => {
  return (
    <div className={styles.mainArea}>
      <div className={styles.textArea}>
        <form action="" className={styles.taskForm}>
          <textarea 
            placeholder="Adicione uma nova tarefa"
            
          />
          <button>
            <p>
              Criar
            </p>
            <img src={plus} alt="" />
          </button>
          
        </form>
      </div>
      <div className={styles.taskList}>
        <div className={styles.createdTaskNumber}>
          <p>Tarefas criadas</p>
          <p>1</p>
        </div>
        <div className={styles.completedTasksNumber}>
          <p>Concluídas</p>
          <p>1</p>
        </div>
      </div>

      <div>
        {tasks.map( task => {
          return (
            <p key={task}>{task}</p>
          )
        })}
      </div>

    </div>
  )
}

export default MainArea