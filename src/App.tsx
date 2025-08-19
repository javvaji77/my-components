import React from "react";
import { Button, Table } from "./components";

const data = [
  { Name: "Alice", Age: 25, Country: "USA" },
  { Name: "Bob", Age: 30, Country: "UK" },
  { Name: "Charlie", Age: 22, Country: "Canada" },
];

function App() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Components Demo</h1>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      <Table data={data} />
    </div>
  );
}

export default App;
