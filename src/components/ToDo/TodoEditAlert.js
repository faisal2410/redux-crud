import Swal from "sweetalert2"
import { EditTodo } from "../../redux/state/todo/todoSlice"
import Store from "../../redux/store/Store"

export const TodoEditAlert=(i,item)=>{
    Swal.fire({
        title: 'Update Task Name',
        input:'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                Store.dispatch(EditTodo({index:i,task:value}))
            }
        }
      })
}