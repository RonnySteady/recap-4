import "./Form.css";

export default function Form({ onAddActivity }) {
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <p className="formHeader">Add new Activity: </p>
      <div className="inputSection">
        <label htmlFor="activityInput" className="label">
          Name:&nbsp;
        </label>
        <input
          type="text"
          name="activityInput"
          className="activityInput"
          id="activityInput"
          placeholder="Type here"
        />
      </div>
      <div className="input">
        <label htmlFor="checkboxInput" className="label">
          Good-weather activity:
        </label>
        <input
          type="checkbox"
          name="checkboxInput"
          // className="checkboxInput"
          // id="checkboxInput"
        />
      </div>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );

  function handleOnSubmit(event) {
    console.clear();
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity({
      activityInput: data.activityInput,
      checkboxInput: event.target.elements.checkboxInput.checked,
    });
    event.target.reset();
    event.target["activityInput"].focus();
  }
}
