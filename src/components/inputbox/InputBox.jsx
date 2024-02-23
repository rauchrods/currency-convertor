import React, { useId } from "react";
import styles from "./InputBox.module.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id1 = useId();
  const id2 = useId();

  return (
    <div className={`${styles.input_box} ${styles[className]}`}>
      <div className={styles.left_sec}>
        <label htmlFor={id1}>{label}</label>
        <input
          type="number"
          name=""
          id={id1}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className={styles.right_sec}>
        <label htmlFor={id2}>Currency Type</label>

        <select
          name="currency"
          id={id2}
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
            disabled = { currencyDisabled };
          }}
        >
          {currencyOption.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
