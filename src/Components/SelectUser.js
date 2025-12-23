import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SelectUser = () => {
  return (
    <>
      <p>
        <FontAwesomeIcon icon={faUser} />
        Selectioner un utilisateur
      </p>
      <select class="form-select" aria-label="Default select example">
        <option selected value="-1">Tous les utlisateurs</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
};

export default SelectUser;
