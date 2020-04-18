const initState = {
  existingTasks: [
    {
      taskType: "task",
      taskTitle: "task1",
      taskDesc: [
        "Bring milk",
        "bring oi8l",
        "bring oil",
        "bring oil",
        "bring oil",
        "bring oil",
      ],
    },
    {
      taskType: "notes",
      taskTitle: "task2",
      taskDesc: ["Bring milk ffdfcs fesr ewfsdf wesfr "],
    },
    {
      taskType: "notes",
      taskTitle: "task3",
      taskDesc: ["Bring milk ffdfcs fesr ewfsdf wesfr "],
    },
    {
      taskType: "notes",
      taskTitle: "task4",
      taskDesc: ["Bring milk ffdfcs fesr ewfsdf wesfr "],
    },
  ],
};

const deletereducer = (state = initState, action) => {
    
    if(action.type==='DELETE_TASK'){
        let newTasks=state.existingTasks.filter(task=>{
            return action.taskTitle!== task.taskTitle
        })

        return{
            ...state,
            existingTasks:newTasks
        }
    }
    return state
};

export default deletereducer;
