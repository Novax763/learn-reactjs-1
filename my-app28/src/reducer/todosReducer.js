import { v4 as uuidv4 } from "uuid";

export default function reducer(currentTodos, action) {
  switch (action.type) {
    /// add
    case "addclick": {
      const handle = [
        ...currentTodos,
        {
          id: uuidv4(),
          title: action.payload.add,
          body: "",
          isCompleted: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(handle));
      return handle;
    }
    /// deleted
    case "deletClick": {
      const deletTodo = currentTodos.filter((value) => {
        return value.id !== action.payload.id;
      });
      localStorage.setItem("todos", JSON.stringify(deletTodo));
      return deletTodo;
    }
    /// edit
    case "topa": {
      const notupadte = currentTodos.map((value) => {
        if (value.id === action.payload.id) {
          return {
            ...value,
            title: action.payload.placesTask.place,
            body: action.payload.placesTask.conten,
          };
        } else {
          return value;
        }
      });
      localStorage.setItem("todos", JSON.stringify(notupadte));
      return notupadte;
    }
    // case "iscompletde": {
    //       const updatedTodos = currentTodos.map((value) => {
    //         if (value.id === action.payload.id) {
    //           value.isCompleted = !value.isCompleted; /// mutation
    //           // if (value.isCompleted) {
    //           //   action.payload.handClick();
    //           //   action.payload.set("addTodo");
    //           // } else {
    //           //   action.payload.handlClick();
    //           //   action.payload.set("notAddTodo");
    //           // }
    //         }
    //         return value;
    //       });
    //       localStorage.setItem("todos", JSON.stringify(updatedTodos));
    //   return updatedTodos;
    //   // return currentTodos;
    // }
    case "get": {
      const info = JSON.parse(localStorage.getItem("todos")) ?? [];
      return info;
    }
    default: {
      throw Error("Unkonwn action" + action.type);
    }
  }
}
