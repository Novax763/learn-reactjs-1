import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function Cont() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const plusMap = products.map((value) => {
      return value.id === productId ? {...value, count: value.count + 1} : value
    })
    setProducts(plusMap)
  }
  // console.log(products.length)
  // console.log(pro)
  // console.log(pro)
  function handClick(prodId) {
    let pro = [];
    pro.splice(pro, pro.length)
    products.map((value) => {
      if (value.id == prodId) {
        if (value.count > 0 ) {
          let iin = {...value, count: value.count - 1}
          pro.push(iin)
        }
      } else {
        let va = value;
        pro.push(va)
      }
    })
    setProducts(pro)
  }



  

  const productsMap = products.map((products) => {
    return <li key={products.id} > {products.name} <b> { "(" + products.count + ')' } </b> <button onClick={() => {
              handleIncreaseClick(products.id);
            }} > + </button> <button style={{padding: "0px 5px",margin: "2px"}} onClick={() => {handClick(products.id)}} > - </button> </li>
  })

  return (
    <ul>
      {productsMap}
    </ul>
  );
}
