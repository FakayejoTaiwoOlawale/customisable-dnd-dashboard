import Dashboard from "./components/Dashboard";
import Searchbar from "./components/Searchbar";
import widgets from "./data/widgets";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-center items-center flex-col">

      <h1 className="text-3xl font-bold mb-6">🧱 Drag & Drop Dashboard</h1>
      <Dashboard />
      <Searchbar data={widgets}/>
      </div>
    </main>
  );
}

export default App;
