export const addTaskAction=(taskObj)=>{
    return{
        type:"ADD_TASK",
        content:taskObj
    }
}