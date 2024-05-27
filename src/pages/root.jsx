import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/UI/Card/Card";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="Root">
      <Header title={"shit to do"} />
      <Card>
        <Outlet />
      </Card>
      <Navbar />
    </div>
  );
}

export default Root;
