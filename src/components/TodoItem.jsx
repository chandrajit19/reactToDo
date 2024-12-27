// eslint-disable-next-line react/prop-types
function TodoItem({todoName, todoDate, onDeleteClick }){
   
return (<>
        <div className="d-flex align-items-center justify-content-between">
                <p className="w-50  mb-0 " >{todoName}</p>
                <p className="mb-0 ">{todoDate}</p>
                <button type="button" className="btn btn-danger  " onClick={()=> onDeleteClick(todoName)}  >Delete</button>

        </div>
        
</>

     

);
}
export default TodoItem;