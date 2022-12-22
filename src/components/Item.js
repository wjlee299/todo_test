import styles from "../style.module.css";

const Item = ({ todoitem, todoList, setTodoList, editMode }) => {
  const deleteTask = () => {
    setTodoList(todoList.filter((item) => item.id !== todoitem.id));
  }
  
  const doneTask = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };


  return (
    <div>
      <div className={styles.todoitem} onClick={doneTask}>{todoitem.name}</div>
      {editMode ? <button className={styles.deletebutton} onClick={deleteTask} >Delete</button> : <div></div>}
    </div>
  )

}

export default Item;