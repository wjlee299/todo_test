import Item from "./Item";
// import styles from "../style.module.css";


const List = ({ todoList, setTodoList, editMode}) => {
  return (
    <div>
      {todoList.map((item, index) => <Item
        key={item.id}
        todoitem={item}
        todoList={todoList}
        setTodoList={setTodoList}
        editMode={editMode}
      ></Item>)}
    </div>
  )
}

export default List;