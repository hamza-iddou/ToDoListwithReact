import axios from "axios";
import SelectUser from "./Components/SelectUser";
import Task from "./Components/Task";
import { useEffect, useState } from "react";

const api = axios.create({ baseURL: "http://localhost:3001" });

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [usersList, setUserList] = useState([]);
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

    fetchTools();
  }, []);
  
  
  return (
    <>
      <div className="container align-center ">
        <h1>Liste Des Todos</h1>
        <p>15 todo(s)</p>
        <hr />
        <SelectUser Users={usersList} />

        {data.map((d, index) => (
          <Task
            key={d.id}
            userId={d.userId}
            id={d.id}
            title={d.title}
            completed={d.completed}
            number={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
