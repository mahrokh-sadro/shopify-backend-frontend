import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to="/items" class="btn btn-primary">
            List of Items
          </Link>

          <Link to="/create" class="btn btn-success">
            {" "}
            Create an Item
          </Link>

          <Link to="/delete" class="btn btn-danger">
            Delete/Undelete an Item
          </Link>

          <Link to="/update" class="btn btn-warning">
            Update an Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
