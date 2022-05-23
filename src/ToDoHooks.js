import React, { useEffect ,useState } from "react";

const ToDoHooks = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [changeAlert,setChangeAlert] = useState(0);

  const handleclick = (value) => {
    let temp = {
      name: value,
      status: false,
    };
    let arr = [];
    arr.push(temp);
    setTodoList([...todoList, ...arr]);
    setTask('');
  };
  const handleChangeStatus = (value) => {
    todoList.map((data) => {
      if (data.name == value.name) {
        data.status = !value.status;
        setChangeAlert(changeAlert+1);
      }
    });
    console.log("i", value);
  };

  const handleRemove = (value) => {
      let arr = []
      todoList.map((i)=>{
        if(value.name != i.name){
            arr.push(i);
        }
      }
      )
    setTodoList(arr);

  }
  
  useEffect(() => {
    console.log("todoList", todoList);
  }, [todoList,changeAlert]);

  return (
    <div>
      <input type="text" value={task} onChange={(value) => setTask(value.target.value)}></input>
      <button onClick={() => handleclick(task)}>click</button>
      <div>
        {todoList.map((value,index) => {
          if (value.status)
            return (
              <div>
                <h2 onClick={() => handleChangeStatus(value)}>
                  <del>{value?.name}</del>
                </h2>
                <button>remove</button>
              </div>
            );
          else
            return (
              <div>
                <h2 onClick={() => handleChangeStatus(value)}>{value?.name}</h2>
                <button onClick={() => handleRemove(value)}>remove</button>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default ToDoHooks;
