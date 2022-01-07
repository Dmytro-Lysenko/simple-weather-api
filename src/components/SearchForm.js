import { useRef } from "react";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const searchInputRef = useRef();

  const inputChangeHandler = (event) => {
    event.preventDefault();
    const enteredSearch = searchInputRef.current.value;
    props.InputClick(enteredSearch);
  };

  return (
    <form className={classes.form} onSubmit={inputChangeHandler}>
      <label>Search</label>
      <input type="text" minLength="4" ref={searchInputRef} />
      <input className={classes.actions} type="reset" value="Reset" />
      <button className={classes.actions}>go</button>
    </form>
  );
};

export default SearchForm;
