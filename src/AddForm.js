import React, {useState} from "react";
function AddForm({onCreate}) {
    const [value, setValue] = useState(" ");
    function submitHandler(event) {
        if(value.trim()) {
            onCreate(value);
            setValue(" ")
            event.preventDefault()
        }
    }
    return (
        <form style={{marginBottom: "1rem"}} onSubmit={submitHandler}>
            <input value={value} type="text" onChange={event => setValue(event.target.value)}/>
            <button>Add todo</button>
        </form>
    )
};
export default AddForm;