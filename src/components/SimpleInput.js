import {useRef, useState } from "react"


const SimpleInput = (props) => {
  const nameInputRef = useRef();  //ref is one way and better beacuse onSubmit is overkill
  const[enteredNmae, setEnteredName] = useState("");

  const nameInputChangeHandler = event => {

    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event =>{
    event.preventDefault();

    if(enteredNmae.trim() ==="") {
      return;
    }

    console.log(enteredNmae)

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    nameInputRef.current.value=""

    //nameInputRef.current.value=""; => Not Ideal, Don`t manipulate the DOM
    setEnteredName("");
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler} 
        value={enteredNmae}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
