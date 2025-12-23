import axios from "axios";
import SelectUser from "./Components/SelectUser";
import Task from "./Components/Task";
import { useEffect, useState } from "react";

const api = axios.create({ baseURL: "http://localhost:3001" });

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    setLoading(true);
    api
      .get("/todos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setMsg("Error");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container align-center ">
        <h1>Liste Des Todos</h1>
        <p>15 todo(s)</p>
        <hr />
        <SelectUser data={data}/>

        {data.map((d , index) => (
          <Task key={d.id}
            userId={d.userId}
            id={d.id}
            title={d.title}
            completed={d.completed}
            number = {index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
