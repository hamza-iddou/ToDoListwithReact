import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SelectUser = ({ Users }) => {
  return (
    <>
      <p>
        <FontAwesomeIcon icon={faUser} />
        Selectioner un utilisateur
      </p>
      <select className="form-select" aria-label="Default select example">
        <option value="-1" defaultValue>
          Tous les utlisateurs
        </option>
        {Users.map((user, index) => (
          <option key={index} value={user}>User {user}</option>
        ))}
      </select>
    </>
  );
};

export default SelectUser;
