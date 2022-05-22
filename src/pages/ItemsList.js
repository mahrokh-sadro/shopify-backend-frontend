import React from "react";
import Header from "../components/Header";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <>
      <Header />
      <h1>ItemsList</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">description</th>
            <th scope="col">category</th>
            <th scope="col">quantity</th>
          </tr>
        </thead>
        {items.map((item, i) => (
          <tbody>
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default ItemsList;
