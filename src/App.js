import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
// import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import Loading from "./Components/Loading";
import { loadingSubscription } from "./redux/slices/loadingSlice";

function App() {
  // const potentials = useSelector(selectPotentials);
  // console.log(potentials);

  const currentDisplay = useSelector(selectDisplay);
  console.log("DISPLAY", currentDisplay);

  const currentLoading = useSelector(loadingSubscription);

  return (
    <div className="App font-link">
      <Header />
      {currentLoading && <Loading />}
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
