import styles from "../style.module.css";

const EditButton = ({ editMode, setEditMode }) => {
  
  const handleClick = (event) => {
    event.preventDefault();
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }
    
  return (
    <div>
      <button onClick={handleClick} className={styles.editbutton}>Edit List</button>
    </div>
  )
}

export default EditButton;