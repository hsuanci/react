import "./App.css";
import Expense from "./components/Expenses/Expense";

function App() {
  const expenses = [
    { title: "bookOutOne", amount: 20, date: new Date(2022, 1, 28) },
    { title: "bookOutTwo", amount: 30, date: new Date(2022, 2, 28) },
    { title: "bookOutThree", amount: 40, date: new Date(2022, 3, 28) },
  ];

  return (
    <div className="App">
      <Expense items={expenses} />
    </div>
  );
}

export default App;
