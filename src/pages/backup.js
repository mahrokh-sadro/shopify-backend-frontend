// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const DeletePage = ({ items }) => {
//   const [value, setValue] = useState({
//     id: "",
//   });

//   console.log(value);

//   const deleteItem = (evt) => {
//     // evt.preventDefault();

//     fetch(`http://localhost:5000/items/${value.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         //   alert(json.message);
//         setValue({
//           id: "",
//         });
//       })
//       .catch((err) => {
//         console.log(`Error ${err}`);
//       });
//   };

//   return (
//     <>
//       <form class="form-inline" onSubmit={deleteItem}>
//         <div class="form-group mb-2">
//           <label for="staticEmail2" class="sr-only">
//             Enter ID
//           </label>
//         </div>
//         <div class="form-group mx-sm-3 mb-2">
//           <input
//             type="text"
//             class="form-control"
//             id="inputPassword2"
//             placeholder="ID"
//             value={value.id}
//             onChange={(e) => setValue({ ...value, id: e.target.value })}
//           />
//         </div>
//         <button type="submit" class="btn btn-danger mb-2">
//           DELETE
//         </button>
//       </form>

//       <h1>ItemsList</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">name</th>
//             <th scope="col">id</th>
//           </tr>
//         </thead>
//         {items.map((item, i) => (
//           <tbody key={i}>
//             <tr>
//               <th scope="row">{i + 1}</th>
//               <td>{item.name}</td>
//               <td>{item._id}</td>

//               <td></td>
//             </tr>
//           </tbody>
//         ))}
//       </table>
//     </>
//   );
// };

// export default DeletePage;
