import { useRef, useState } from "react";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const searchInputRef = useRef();
  const [cssClass, setcssClass] = useState(false);

  const inputChangeHandler = (event) => {
    event.preventDefault();
    const enteredSearch = searchInputRef.current.value;
    props.InputClick(enteredSearch);

    setcssClass(true);
  };
  console.log(cssClass);

  const cssClasses = ["form", cssClass === true ? "formOpen" : "formClosed"];
  console.log(cssClasses);
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
