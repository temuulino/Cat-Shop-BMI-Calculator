import "./styles.css";
import BMICalculator from "./BMICalculator";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BMICalculator />
      <Footer />
    </div>
  );
}
