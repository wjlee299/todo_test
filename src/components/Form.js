import styles from "../style.module.css";
import shortid from "shortid";

const Form = ({newTask, setNewTask, todoList, setTodoList}) => {

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: newTask, id: shortid.generate() }]);
    setNewTask("");
  }
  
  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input className={styles.todoinput} type="text" value={newTask} onChange={handleChange} placeholder="New Task"></input>
        <button className={styles.todobutton} type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default Form;