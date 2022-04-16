import Header from "./Header";
import Search from "./Search";
import CartControl from "./CartControl";
import Breadcrumb from "./Breadcrumb";
import Jumbotron from "./Jumbotron";
import SelectVehicle from "./SelectVehicle";
import QuickStart from "./QuickStart";
import VinContainer from "./VinContainer";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <CartControl />
      <Breadcrumb />
      <Jumbotron />
      <SelectVehicle />
      <QuickStart />
      <VinContainer />
      <Footer />
    </div>
  );
}

export default App;
