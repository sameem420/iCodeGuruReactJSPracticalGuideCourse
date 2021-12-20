import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("hafizasjad");
  // neero0x01;
  // const URL = "https://api.github.com/users/sameem420";

  useEffect(() => {
    const userSearch = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          console.table(data);
          const userData = [...user, data];
          setUser(userData);
        });
    };
    // if (username.length > 5) {
    //   userSearch();
    // }

    const timeoutId = setTimeout(() => {
      userSearch();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [username]);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Github Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Github username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <h1>{username}</h1>
      <div className="row">
        {user?.map((user, index) => {
          return (
            <div className="col-md-3 mt-2" key={index}>
              <img src={user.avatar_url} width="240" alt={user.name} />
              <h1>{user.name}</h1>
              <h2>{user.location}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// import TodosList from "./components/TodosList";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   useEffect(() => {
//     const todoss = localStorage.getItem("todosItems");
//     todoss && setTodos(JSON.parse(todoss));
//   }, []);

//   const addTodo = () => {
//     if (!text) {
//       return;
//     } else {
//       const todosData = [...todos, text];
//       // (prevState) => [...prevState, text];
//       setTodos(todosData);
//       setText("");
//       // sessionStorage.setItem("todosItems", JSON.stringify(todosData));
//       localStorage.setItem("todosItems", JSON.stringify(todosData));
//     }
//   };

//   const deleteTodo = (index) => {
//     const todosData = [...todos];
//     todosData.splice(index, 1);
//     setTodos(todosData);
//     // sessionStorage.setItem("todosItems", JSON.stringify(todosData));
//     localStorage.setItem("todosItems", JSON.stringify(todosData));
//   };

//   return (
//     <div className="container">
//       <div className="mt-5">
//         <label className="form-label">Enter Todo</label>
//         <input
//           type="text"
//           className="form-control"
//           value={text}
//           onChange={handleChange}
//         />
//         <button className="btn btn-success mt-2" onClick={addTodo}>
//           Add Todo
//         </button>
//       </div>
//       <h1>Todo Text : {text}</h1>
//       <TodosList todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// };

// export default App;
