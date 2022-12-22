

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import EditButton from "./components/EditButton";
import { useState } from "react";
// import styles from "./style.module.css";


function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);

  return <div className="App">
    <Header></Header>
    <Form
      newTask={newTask}
      setNewTask={setNewTask}
      todoList={todoList}
      setTodoList={setTodoList}
    ></Form>
    <EditButton
      editMode={editMode}
      setEditMode={setEditMode}
    ></EditButton>
    <List
      todoList={todoList}
      setTodoList={setTodoList}
      editMode={editMode}
    ></List>
  </div>;
}

export default App;
