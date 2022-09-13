/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import axios from 'axios';
import {
  AiFillStar,
  AiFillCreditCard,
  AiTwotoneIdcard,
  AiOutlineLink
} from 'react-icons/ai';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
// import currency from '../Currency';
import { Container } from './styles';

export default function Exchange({ crypto }) {
  const [amount, setAmount] = useState<number>(1);
  const [coinCurrency, setCoinCurrency] = useState<string>('btc');
  const [destination, setDestination] = useState<string>('btc');
  const [total, setTotal] = useState<number | string>('');
  const [currency, setCurrency] = useState(crypto)
  function handleConvert() {
    if (destination && coinCurrency) {
      const all = currency
        .filter(item => item.symbol === destination)
        .map(item => item.current_price)[0];
      const all2 = currency
        .filter(item => item.symbol === coinCurrency)
        .map(item => item.current_price)[0];
      // setTotal(all)

      setTotal(numberToReal(parseFloat(((amount * all) / all2).toFixed(3))));
      // setTotal(parseFloat(total).toLocaleString('pt-br'))
    }
  }
  function numberToReal(numero) {
    var numero = numero.toFixed(3).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
  }
  const { background } = useContext(ThemeContext);
  console.log(crypto)
  return (
    <Container>
      <section className="exchangeInfo">
        
        <div>
          <h1>
            Find the{' '}
            <span data-text="best_way" className="first">
              best_way
            </span>{' '}
            <br />
            to exhcange
          </h1>
          <h1>
            <span data-text="your_currency_to_crypto" className="second">
              your_currency_to_crypto
            </span>
          </h1>
        </div>
        <p>
          We provide an opportunity to find and analyze more than 10 of the
          world's best cryptos bby 10 parameters
        </p>
      </section>
      <section className="exchangeMenu">
        <div className="country">
          <label htmlFor="country">Country</label>
          <select id="country">
            <option>Brazil</option>
            <option>Ucranie</option>
            <option>United States</option>
            <option>Argentina</option>
            <option>Cameroon</option>
            <option>Canada</option>
            <option>Egypt</option>
          </select>
        </div>

        <div className="amount">
          <div>
            <div>
              <label htmlFor="numberOne">Amount</label>
              <input
                type="number"
                id="numberOne"
                onChange={e => setAmount(parseFloat(e.target.value))}
                value={amount}
              />
            </div>
            <div>
              <label htmlFor="currency">currency</label>
              <select
                id="currency"
                onChange={e =>
                  setDestination(e.target.options[e.target.selectedIndex].text)
                }
              >
                {/* <option>brl</option> */}
                {currency.map((item, index) => (
                  <option key={index}>{item.symbol}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="numberTwo">Amount</label>
              <input
                type="text"
                id="numberTwo"
                className="disable"
                value={total}
                disabled
                onChange={e => setTotal(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="currency">destination</label>
              <select
                id="currency"
                onChange={e =>
                  setCoinCurrency(e.target.options[e.target.selectedIndex].text)
                }
              >
                {/* <option>brl</option> */}
                {currency.map((item, index) => (
                  <option key={index} value={index}>
                    {item.symbol}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="button" onClick={handleConvert}>
            Convert crypto
          </button>
        </div>
      </section>
      <section className="exchangeRanking">
        <ul className="title">
          <div className="nameDiv">
            Name
            {currency.map((item, index) => (
              <li className="name" key={index}>
                <img src={item.image} />

                <h4>{item.name}</h4>
              </li>
            ))}
          </div>

          <div>
            Rating
            {currency.map((item, index) => (
              <li className="star" key={index} color={background}>
                5 <AiFillStar />
              </li>
            ))}
          </div>
          <div className="cardDiv">
            Deposits
            {currency.map((item, index) => (
              <li className="card" key={index}>
                <AiFillCreditCard className="creditcard1" />
                <BsCreditCard2FrontFill className="creditcard2" />
                <AiTwotoneIdcard className="creditcard3" />
              </li>
            ))}
          </div>
          <div className="priceDiv">
            Current Price
            {currency.map((item, index) => (
              <li className="price" key={index}>
                <h4>$ {numberToReal(item.current_price)}</h4>
              </li>
            ))}
          </div>
          <div className="linkDiv">
            Link to Acess
            {currency.map((item, index) => (
              <li className="link" key={index}>
                <AiOutlineLink />
              </li>
            ))}
          </div>
        </ul>
      </section>
    </Container>
  );
}
