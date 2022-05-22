import React from "react";
import ItemsList from "./ItemsList";
import Header from "../components/Header";

const CreatePage = ({ items }) => {
  const [data, setData] = React.useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    quantity: 0,
  });
  console.log(data);
  const createItem = (evt) => {
    fetch(`https://shopify-backend-backend-.mahrokh.repl.co/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        alert(json.message);
        setData({
          name: "",
          price: 0,
          description: "",
          category: "",
          quantity: 0,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <h1>CreatePage</h1>
      <div>
        <div style={{ marginRight: "50px", marginLeft: "50px" }}>
          <form onSubmit={createItem}>
            <div class="row mb-1">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="1"
                    class="form-control"
                    required
                    placeholder="name"
                    value={data.name}
                    onChange={(evt) =>
                      setData({ ...data, name: evt.target.value })
                    }
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    id="2"
                    class="form-control"
                    required
                    placeholder="price"
                    value={data.price}
                    onChange={(e) =>
                      setData({ ...data, price: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div class="row mb-1">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="number"
                    id="3"
                    class="form-control"
                    required
                    min="0"
                    placeholder="quantity"
                    value={data.quantity}
                    onChange={(e) =>
                      setData({ ...data, quantity: e.target.value })
                    }
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="4"
                    class="form-control"
                    required
                    placeholder="category"
                    value={data.category}
                    onChange={(e) =>
                      setData({ ...data, category: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div class="row mb-1">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="5"
                    class="form-control"
                    required
                    placeholder="description"
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-1">
              Create
            </button>{" "}
          </form>
        </div>

        <h1>ItemsList</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">id</th>
            </tr>
          </thead>
          {items.map((item, i) => (
            <tbody key={i}>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item._id}</td>

                <td></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default CreatePage;
