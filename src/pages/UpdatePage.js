// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const UpdatePage = ({ items }) => {
  const [rerender, setRerender] = useState(false);

  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
  });

  const updateItem = (evt) => {
    // evt.preventDefault();
    fetch(
      `https://shopify-backend-backend-.mahrokh.repl.co/items/${item._id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item }),
      }
    )
      .then((res) => {
        res.json();
        // console.log("rerendred");
      })
      .then((json) => {
        console.log("rerendred json");
        setItem({
          id: "",
          name: "",
          price: "",
        });
        // setRerender(!rerender);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <h1>ItemsList</h1>
      <form onSubmit={updateItem}>
        <div>
          <input
            type="text"
            value={item.name}
            onChange={(e) => {
              setItem({ ...item, name: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={item.price}
            onChange={(e) => {
              setItem({ ...item, price: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <br />
          <br />
          <button type="submit">Update Item</button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">id</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        {items.map((item, i) => (
          <tbody key={i}>
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{item.name}</td>
              <td>{item._id}</td>
              <td>{item.price}</td>

              <td>
                {" "}
                <button
                  className="btn btn-warning mb-2"
                  type="submit"
                  onClick={() => {
                    setItem({ ...item });
                    // console.log(item.id);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default UpdatePage;

// // import React from "react";
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";

// const UpdatePage = ({ items }) => {
//   const [item, setItem] = useState(null);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   // const [rerender, setReRender] = useState([]);
//   const [userId, setUserId] = useState(null);

//   console.log(item);

//   // useEffect(() => {
//   //   console.log("rerendred use");
//   // }, [rerender]);

//   const setToDefault = () => {
//     setName("");
//     setPrice("");
//   };

//   function selectItem(item) {
//     setItem(item);
//     setName(item.name);
//     setPrice(item.price);
//   }

//   const updateItem = (evt) => {
//     // evt.preventDefault();
//     fetch(`http://localhost:5000/items/${item._id}`, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...item, name: name, price: price }),
//     })
//       .then((res) => {
//         res.json();
//         // console.log("rerendred");
//       })
//       .then((json) => {
//         console.log("rerendred");
//         setToDefault();
//         // console.log("rerendred");
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <>
//       <Header />
//       <h1>ItemsList</h1>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />{" "}
//         <br />
//         <br />
//         <input
//           type="text"
//           value={price}
//           onChange={(e) => {
//             setPrice(e.target.value);
//           }}
//         />{" "}
//         <br />
//         <br />
//         <br />
//         <br />
//         <button onClick={updateItem}>Update Item</button>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">name</th>
//             <th scope="col">id</th>
//             <th scope="col">price</th>
//           </tr>
//         </thead>
//         {items.map((item, i) => (
//           <tbody key={i}>
//             <tr>
//               <th scope="row">{i + 1}</th>
//               <td>{item.name}</td>
//               <td>{item._id}</td>
//               <td>{item.price}</td>

//               <td>
//                 {" "}
//                 <button
//                   className="btn btn-warning mb-2"
//                   onClick={() => {
//                     selectItem(item);
//                     // console.log(item.id);
//                   }}
//                 >
//                   Update
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         ))}
//       </table>
//     </>
//   );
// };

// export default UpdatePage;
