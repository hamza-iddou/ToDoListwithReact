import axios from "axios";
import SelectUser from "./Components/SelectUser";
import Task from "./Components/Task";
import { useEffect, useState } from "react";

const api = axios.create({ baseURL: "http://localhost:3001" });

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [rendredData, setRendredData] = useState([]);
  const [usersList, setUserList] = useState([]);
  const [selectedUser, setselectedUser] = useState("-1");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await api.get("/todos");
        const todos = response.data;
        setUserList([...new Set(todos.map((item) => item.userId))]);
        setData(todos);
      } catch {
        setMsg("Error");
        console.log(msg);
      } finally {
        setLoading(false);
      }
    };

    if (selectedUser === "-1") {
      setRendredData(data);
    } else {
      setRendredData(data.filter((todo) => todo.userId == selectedUser));
    }

    fetchTools();
  }, [selectedUser, data]);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await api.delete(`/todos/${id}`);
      const todos = response.data;
      setUserList([...new Set(todos.map((item) => item.userId))]);
      setData(todos);
    } catch (error) {
      setMsg("Error");
      console.log(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = async (todo) => {
    try {
      setLoading(true);

      const updatedPost = {
        ...todo,
        completed: !todo.completed,
      };

      await api.put(`/todos/${todo.id}`, updatedPost);
    } catch (error) {
      setMsg("Error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container align-center ">
        <h1>Liste Des Todos</h1>
        <p>{data.length} todo(s)</p>
        <hr />
        <SelectUser Users={usersList} onSelect={setselectedUser} />

        {rendredData.map((d, index) => (
          <Task
            key={d.id}
            userId={d.userId}
            id={d.id}
            title={d.title}
            completed={d.completed}
            number={index}
            Delete={handleDelete}
            update={handleCheck}
          />
        ))}
      </div>
    </>
  );
}

export default App;
