import { useReducer, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Products from "./components/Product/Products";
import { reducer } from "./reducer";

const defaultState = {

  products: [],
  isAlert: false,
  alertMessage: '',
  editProduct:{}
}

function App() { 

  const [ state, dispatch ] = useReducer( reducer, defaultState );
  const [ newPeoduct, setNewProduct ] = useState({});

  console.log("From App()");

  const handleProductAdded = (product) => {

    setNewProduct(product);
  }


  return (
    <div className="App">
      <Header state={state} dispatch={dispatch} />

      <Form
      state={state}
      dispatch={dispatch} 
      productAdded={handleProductAdded} />

      <Products 
      state={state}
      dispatch={dispatch}  />
    </div>
  );
}

export default App;
