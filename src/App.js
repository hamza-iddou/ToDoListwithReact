import SelectUser from "./Components/SelectUser";
import Task from "./Components/Task";

function App() {
  return (
    <>
      <div className="container align-center ">
        <h1>Liste Des Todos</h1>
        <p>15 todo(s)</p>
        <hr />
        <SelectUser/>
        <Task />
        
      </div>
    </>
  );
}

export default App;
