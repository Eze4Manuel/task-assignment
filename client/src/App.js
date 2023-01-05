import Home from "./pages/home";
import Header from './components/header';

const App = () => {
  return (
    <div className="bg-orange-100 pt-4 h-screen">
      <div className="w-3/4 m-auto">
        <Header
          className={"text-4xl text-center m-10"}
          text={"English Word Checker"} />
        <Home />
      </div>
    </div>
  );
}
export default App;
