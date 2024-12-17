import TodoItem from "./TodoItem";

const TodoItems=({todoItems, onDeleteClick})=>{
 
    return (<>
    
        <div className="container-item">
       
        <table className="table table-bordered table-striped table-hover table-dark">
            <tbody>
                {

               todoItems.map((item ,i)=>(

                        (item.dueDate && item.name) ? ( 
                            <tr key={`${item.name}-${item.dueDate}`}>
                            <td className="align-middle">
                            <TodoItem  todoDate={item.dueDate}  todoName={item.name} onDeleteClick={onDeleteClick} ></TodoItem>
                            </td>
                        </tr>

                        ) : null
                      
                             ))
                 
                }
            </tbody>
         
    
        </table>
       
          
   </div>
    </>
    );
}
export default TodoItems;
