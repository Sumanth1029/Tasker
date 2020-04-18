export const deleteTasks=(taskTitle)=>{
    return{
        type:"DELETE_TASK",
        taskTitle
    }
}