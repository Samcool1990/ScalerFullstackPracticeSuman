import { useCallback } from "react";

function useCurrencyConverter(baseCurrency, targetCurrency) {
  const convert = useCallback(
    (amount) => {
      if (isNaN(amount)) {
        return null; // Return null if the amount is not a number
      }

      if (baseCurrency === "USD" && targetCurrency === "EUR") {
        return amount * 0.93;
      } else if (baseCurrency === "EUR" && targetCurrency === "USD") {
        return amount * 1.07;
      } else if (baseCurrency === "GBP" && targetCurrency === "USD") {
        return amount * 1.21;
      } else {
        return null; // Return null for unsupported currency pairs
      }
    },
    [baseCurrency, targetCurrency]
  );

  return convert;
}

export default useCurrencyConverter;