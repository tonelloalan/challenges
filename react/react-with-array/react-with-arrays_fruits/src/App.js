import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍐 Pear",
      color: "green",
    },
    {
      id: 4,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 5,
      name: "🍇 Grapes",
      color: "purple",
    },
  ];

  // using array method map() to create Card component
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card color={fruit.color} key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}

// previous code
// export default function App() {
//   const fruits = [];

//   return (
//     <div className="app">
//       <Card name="🍌 banana" />
//     </div>
//   );
// }
