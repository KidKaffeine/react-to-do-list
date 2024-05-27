import { Form } from "react-router-dom";

export default function AddTask() {
  // labels, ids and aria labels
  let date = new Date().toLocaleDateString();

  return (
    <>
      <Form method="post" action="/addTask">
        <label htmlFor="addTask" aria-label="add-task">
          <input type="text" name="addTask" id="addTask" />
        </label>
        <label htmlFor="category" aria-label="category">
          <select>
            <option value="">Category</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="random">Random</option>
            <option value="leisure">Leisure</option>
          </select>
        </label>
        <label htmlFor="date" aria-label="date">
          <input
            type="date"
            name="date"
            id="date"
            min={date}
            max="31-12-2030"
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
