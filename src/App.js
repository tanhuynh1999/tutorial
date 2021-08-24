import Todolist from "./components/TodoList";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { useCallback, useState } from "react";
import { v4 } from "uuid";

function App() {

  
  const [todoList, setTodoList] =  useState([]);
  const [textInput, setTextInput] = useState('');
  
  const onTextIputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []); 

  const onAddBtnClick = useCallback((e) => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false},
      ...todoList,]);
      setTextInput('');
  }, [todoList,textInput]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) => 
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true} : todo
      ));
  }, []);

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield 
      name='add-todo' 
      placeholder='Thêm việc cần làm...'
      elemAfterInput={
        <Button 
        isDisabled={!textInput} 
        appearance='primary' 
        onClick={onAddBtnClick}>Thêm</Button>
      }
      style={{ padding: '5px' }}
      value={textInput}
      onChange={onTextIputChange}></Textfield>
      <Todolist todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
    </>
  );
}

export default App;
