
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useEffect, useState } from "react";

function App(){
  // first accssing from local storage and updating todoItems
   const [todoItems, setTodoItems]=useState(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || [];
   });
   
   // updating and checking duplication
   const handleNewItem = (itemName, itemDueDate) => {
    if (!todoItems.some((item) => item.name === itemName && item.dueDate === itemDueDate)) {
      setTodoItems((prev) => [...prev, { name: itemName, dueDate: itemDueDate }]);
    } else {
      alert("Item already exists!");
    }
  };
  
  // deleteing item
          const handleDeleteItem= (todoItemName)=>{
          const newTodoItems=todoItems.filter(item=>item.name !==todoItemName);
          setTodoItems(newTodoItems)

  }
  
  // when todoItems get updates we store in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems])
  
  return (<>
            
            <div className="container ">
              <div className="row">
                    <div className="col-md-6 bg-dark ">
                        <AddTodo onNewItem={handleNewItem}></AddTodo>
                        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
                    </div>
              </div>
            
            </div>

  
  </>
  );
}
export default App;