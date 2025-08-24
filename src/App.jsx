
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App(){
  // first accssing from local storage and updating todoItems
   const [todoItems, setTodoItems]=useState(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || [];
   });


   // updating and checking duplication and empty input

   const handleNewItem = (itemName, itemDueDate) => {
    if (!itemName || !itemDueDate) {
      Swal.fire("Please fill in all fields.");
      return;
    }
    if (!todoItems.some((item) => item.name === itemName && item.dueDate === itemDueDate)) {
      setTodoItems((prev) => [...prev, { name: itemName, dueDate: itemDueDate }]);
    } else {
      Swal.fire("Duplicate item. Please enter a different to-do.");
    }
  };
  
  // deleteing item
      const handleDeleteItem= (todoItemName)=>{
        Swal.fire({
          title: "Are you sure?",
          text: "This action cannot be undone.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, keep it"
        }).then((result) => {
          if (result.isConfirmed) {
            const newTodoItems=todoItems.filter(item=>item.name !==todoItemName);
            setTodoItems(newTodoItems);
            Swal.fire("Deleted!", "Your todo item has been deleted.", "success");
          }
        });
      }

  // when todoItems get updates we store in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems])
  
  return (
    <>
      <div className="container mx-auto mt-5 text-center">
      <h1 className="text-center  d-inline-block">React To-Do List</h1>
        <div className="row">
          <div className="col-md-6 bg-dark  min-height">
            <AddTodo onNewItem={handleNewItem}></AddTodo>
            <TodoItems
              todoItems={todoItems}
              onDeleteClick={handleDeleteItem}
            ></TodoItems>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;