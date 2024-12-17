// eslint-disable-next-line react/prop-types
function TodoItem({todoName, todoDate, onDeleteClick }){
   
return (<>
        <div className="d-flex justify-content-between">
                <p className="w-50" >{todoName}</p>
                <p >{todoDate}</p>
                <button type="button" className="btn btn-danger mb-2" onClick={()=> onDeleteClick(todoName)}  >Delete</button>

        </div>
        
</>

     

);
}
export default TodoItem;