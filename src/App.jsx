import { useEffect, useState } from "react";
import styles from "./App.module.css";
import InputBox from "./components/inputbox/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
    setAmount(0);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(() => {
    convert();
  }, [amount, from, to]);

  return (
    <div className={styles.main_backdrop}>
      <div className={styles.input_container}>
        <InputBox
          label={"From"}
          amount={amount}
          currencyOption={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={from}
        />
        <div className={styles.swap}>
          <button onClick={swap}>Swap</button>
        </div>
        <InputBox
          label={"To"}
          amount={convertedAmount}
          currencyOption={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          amountDisabled={true}
        />
      </div>
    </div>
  );
}

export default App;
