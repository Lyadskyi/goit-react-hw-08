import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchName = e.target.value;
    dispatch(changeFilter(searchName));
  };

  return (
    <div className={css.div}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.searchField}
        placeholder="Enter name"
        name="searchName"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
