/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-shorthand */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Navbar from '../components/Navbar';
import Exchange from '../components/Exchange';


export default function Home({ toggleTheme, crypto }) {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} />
      <Exchange crypto={crypto}/>
    </div>
  );
}
export async function getStaticProps() {
 const res = await fetch(
   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
 );
 const json = await res.json();
 return {
   props: {
     crypto: json
   },
   revalidate: 60 * 60 * 12
 };
}