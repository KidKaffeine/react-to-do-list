import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../pages/root";
import AddTask from "../pages/addTask";
import Error from "../pages/error";
import { handleAddTask } from "../actions";

//default error page

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route path="addTask" element={<AddTask />} action={handleAddTask} />
    </Route>
  )
);

export default router;
