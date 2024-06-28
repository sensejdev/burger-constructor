import Constructor from "./components/constructor";
import Header from "./components/header";
import Ingredients from "./components/ingredients";

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <div className="page__body pl-5 pr-5">
            <Ingredients />
            <Constructor />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
