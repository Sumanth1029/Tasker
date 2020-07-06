const initState = {
  existingTasks: [
    {
      taskType: "task",
      taskTitle: "task1",
      taskDesc: [
        "Bring milk",
        "bring oi8l",
        "bring efoil",
        "bring feoil",
        "bring efefoil",
        "bring esfsoil",
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
    {
      taskType: "notes",
      taskTitle: "task5",
      taskDesc: ["Bring milk ffdfcs fesr ewfsdf wesfr "],
    },{
      taskType: "notes",
      taskTitle: "task6",
      taskDesc: ["Bring milk ffdfcs fesr ewfsdf wesfr "],
    },
    {
      taskType: "notes",
      taskTitle: "task7",
      taskDesc: ["Bring milk ffdfcs fesr ewfsdf wesfr "],
    }
  ],
};

const deletereducer = (state = initState, action) => {
    
    if(action.type==='DELETE_TASK'){
        let newTasks=state.existingTasks.filter(task=>{
            return action.id!== task.id
        })

        return{
            ...state,
            existingTasks:newTasks
        }
    }

    if(action.type==="ADD_TASK"){
      return {
        ...state,
        existingTasks:[...state. existingTasks,action.content]
    }
    }


    return state
};

export default deletereducer;
