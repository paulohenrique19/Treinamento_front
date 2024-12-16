import styles from './MainArea.module.css'
import plus from '../assets/plus.svg'
import Taskk from './Taskk.tsx'
import { useState } from 'react';


interface Task {
  id: number;
  task: string;
  done: boolean;
}


interface MainAreaProps {
  tasks: Task[];  // Tipando tasks como um array de Task
}



const MainArea: React.FC<MainAreaProps> = ({ tasks }) => {


  const [createdTaskNumber, setCreatedTaskNumber] = useState(0);
  
  const [doneTaskList, setDoneTaskList] = useState(0)

  const [tasksList, setTasksList] = useState(tasks)

  function deleteTask(taskToDelete : number) {
    const tasksWithoutDeletedOne = tasksList.filter(task => {
        return task.id !== taskToDelete;
    })

    setTasksList(tasksWithoutDeletedOne);

     // Conta as tarefas concluídas
     const updatedDoneTaskCount = tasksWithoutDeletedOne.filter(task => task.done).length;

     // Atualiza o estado de tarefas concluídas
     setDoneTaskList(updatedDoneTaskCount);

  }

  function markedTask(taskMarked : Task) {
    const updatedTasks = tasksList.map(task => {
      if (task.id === taskMarked.id) {
        // Retorna uma nova tarefa com o valor alterado de 'done'
        return { ...task, done: !task.done };  // Inverte o valor de 'done'
      }
      return task; // Se não for a tarefa, retorna o objeto original
    });

    setTasksList(updatedTasks);

     // Conta as tarefas concluídas
    const updatedDoneTaskCount = updatedTasks.filter(task => task.done).length;

    // Atualiza o estado de tarefas concluídas
    setDoneTaskList(updatedDoneTaskCount);   

  }




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
          <p>{tasksList.length}</p>
        </div>
        <div className={styles.completedTasksNumber}>
          <p>Concluídas</p>
          <p>{doneTaskList} de {tasksList.length}</p>
        </div>
      </div>

      <div className={styles.taskListArea}>
        {tasksList.map((task: Task) => {
          return (
            <Taskk 
              key={task.id} 
              task={task}
              onDeleteTask={deleteTask}
              onMarkedTask={markedTask}
              />
          )
        })}
      </div>

    </div>
  )
}

export default MainArea