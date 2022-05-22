import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const DeletePage = ({ items }) => {
  const [value, setValue] = useState({
    id: "",
  });

  const [deletedValue, setDeletedValue] = useState({
    id: "",
  });

  const [deletedItems, setDeletedItems] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/items/deleted")
      .then((response) => response.json())
      .then((data) => setDeletedItems(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(value);

  const deleteItem = (evt) => {
    // evt.preventDefault();

    fetch(`http://localhost:5000/items/${value.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        //   alert(json.message);
        setValue({
          id: "",
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  const unDeleteItem = () => {
    fetch(`http://localhost:5000/items/undelete/${deletedValue.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...deletedValue, is_deleted: false }),
    })
      .then((response) => response.json())
      .then((json) => {
        //   alert(json.message);
        setDeletedValue({
          id: "",
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  return (
    <>
      <Header />
      <form class="form-inline" onSubmit={deleteItem}>
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">
            Enter ID
          </label>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control"
            id="inputPassword2"
            placeholder="ID"
            value={value.id}
            onChange={(e) => setValue({ ...value, id: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-danger mb-2">
          DELETE
        </button>
      </form>

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

      <h1>Deleted Items</h1>
      <form class="form-inline" onSubmit={unDeleteItem}>
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">
            Enter ID
          </label>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control"
            id="inputPassword2"
            placeholder="ID"
            value={deletedValue.id}
            onChange={(e) =>
              setDeletedValue({ ...deletedValue, id: e.target.value })
            }
          />
        </div>
        <button type="submit" class="btn btn-danger mb-2">
          UNDELETE
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">id</th>
          </tr>
        </thead>
        {deletedItems.map((item, i) => (
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
    </>
  );
};

export default DeletePage;

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const DeletePage = ({ items }) => {
//   const [value, setValue] = useState("");
//   // setValue(items);
//   // useEffect(() => {
//   //   setValue(items);
//   // }, []);

//   console.log("---------->");
//   console.log(value);
//   const deleteItem = () => {
//     fetch(`http://localhost:5000/items/${value}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         alert(json.message);
//         setValue("");
//         console.log(value);
//       })
//       .catch((err) => {
//         console.log(`Error ${err}`);
//       });
//   };

//   return (
//     <>
//       <h1>ItemsList</h1>
//       <form class="form-inline" onSubmit={deleteItem}>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">name</th>
//               <th scope="col">price</th>
//               <th scope="col">description</th>
//               <th scope="col">category</th>
//               <th scope="col">quantity</th>
//             </tr>
//           </thead>
//           {items.map((item, i) => (
//             <tbody key={i}>
//               <tr>
//                 <th scope="row">{i + 1}</th>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.description}</td>
//                 <td>{item.category}</td>
//                 <td>{item.quantity}</td>
//                 <td>
//                   {" "}
//                   <button
//                     type="button"
//                     class="btn btn-danger"
//                     onClick={() => {
//                       // setValue(item);
//                       setValue(item._id);
//                       // deleteItem(item._id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           ))}
//         </table>
//       </form>
//     </>
//   );
// };

// export default DeletePage;

// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const DeletePage = ({ items }) => {
//   const [value, setValue] = React.useState("");
//   const handleChange = (event) => setValue(event.target.value);
//   console.log("----->" + value);

//   const onCreateAccount = (evt) => {
//     evt.preventDefault();
//     // console.log(value);
//     fetch(`http://localhost:5000/items/${value}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify(value),
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         alert(json.message);
//         // setValue({
//         //   id: "",
//         // });
//       })
//       .catch((err) => {
//         console.log(`Error ${err}`);
//       });
//   };

//   return (
//     <div>
//       <h1>DeletePage</h1>
//       <h1> {value.name}</h1>
//       <h1> {value.id}</h1>
//       <div>
//         <form action="" onSubmit={onCreateAccount}>
//           <label>
//             which item you want to delete?
//             <select value={value} onChange={handleChange}>
//               {items.map((item, i) => (
//                 <option value={item._id} key={i}>
//                   {item.name}
//                   {/* {item._id} */}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <button type="submit" className="btn btn-danger">
//             delete
//           </button>
//         </form>
//         <br />

//         {/* <form action="" onSubmit={onCreateAccount}>
//           wanna delete
//           <input value={value} />?
//           <button type="submit" className="btn btn-danger">
//             delete
//           </button>
//         </form> */}
//       </div>
//     </div>
//   );
// };

// export default DeletePage;
