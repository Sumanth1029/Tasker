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
  console.log(action)
  return state
};

export default deletereducer;
