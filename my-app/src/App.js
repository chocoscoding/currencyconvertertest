import './App.css';
import CurrrencyInput from './CurrencyInput';
import { useState, useEffect } from "react";
import axios from "axios"

function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("NGN");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=3ee75da46bbed49d7301c1f4901377bc').then((res) => {
      setRates(res.data.rates)
    })
  }, [])


  useEffect(() => {
    if(!!rates){
      handleAmount1Change(1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates])

  function approxNo(number){
    return number.toFixed(3)
  }

  function handleAmount1Change(amount1){
    setAmount2(approxNo(amount1 * rates[currency2]/ rates[currency1]))
    setAmount1(amount1)

  }

  function handleCurrency1Change(currency1){
    setAmount2(approxNo(amount1 * rates[currency2]/ rates[currency1]))
    setCurrency1(currency1)
  }
  function handleAmount2Change(amount2){
    setAmount1(approxNo(amount2 * rates[currency1]/ rates[currency2]))
    setAmount2(amount2)

  }

  function handleCurrency2Change(currency2){
    setAmount1(approxNo(amount2 * rates[currency1]/ rates[currency2]))
    setCurrency2(currency2)
  }
  return (
    <div className='main'>
      <h2>Get the latest and most accurate conversion rates now!</h2>
      <h1>Pick Your Currency</h1>
      <CurrrencyInput onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} currencies={Object.keys(rates)} amount={amount1} currency={currency1} />
      <br></br>
      <CurrrencyInput onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2} />
    </div>
  );
}

export default App;