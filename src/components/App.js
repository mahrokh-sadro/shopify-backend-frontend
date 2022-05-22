import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DeletePage from "../pages/DeletePage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
import ItemsList from "../pages/ItemsList";

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((response) => response.json())
      .then((data) => setItems(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/create" element={<CreatePage items={items} />} />
          <Route exact path="/delete" element={<DeletePage items={items} />} />
          <Route exact path="/update" element={<UpdatePage items={items} />} />
          <Route exact path="/items" element={<ItemsList items={items} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
