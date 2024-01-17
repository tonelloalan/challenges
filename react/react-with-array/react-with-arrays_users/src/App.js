import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

// used array method map to create card for each user
export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card user={USERS[`${user.id}`]} key={user.id} />
        ))}
      </div>
    </main>
  );
}

// export default function App() {
//   return (
//     <main className="app">
//       <Title text="ClientBoard" />
//       <div className="app__card-grid">
//         <Card user={USERS[0]} />
//       </div>
//     </main>
//   );
// }
