import { useRef } from "react";
function AddRefresh() {
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    // 👇️ clear all input values in the form
    event.target.reset();
  };

  return (
    <>
      <h4>AddRefresh</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={firstRef} id="first_name" name="first_name" type="text" />
          <input ref={lastRef} id="last_name" name="last_name" type="text" />

          <button type="submit">Submit form</button>
        </form>
      </div>
    </>
  );
}

export default AddRefresh;
