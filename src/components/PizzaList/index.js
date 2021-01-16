import PizzaCard from "../PizzaCard";
import React, { useEffect, useState } from "react";
import "./style.css";

import { connect } from "react-redux";

import { fetchPizzas } from "../../actions/GetPizzas";
import loadingImg from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import SortAndFilterPizzas from "../SortAndFilterPizzas";


const PizzaList = (props) => {

  const { pizzaList, getPizzaList, loading, error,getFromCart, setCartSize } = props;

  const [ modifiedList, setModifiedList]=useState([]);
 
  useEffect(() => {
    getPizzaList();
  },[]);
  
  useEffect(() => {
    pizzaList && PizzaList.length && setModifiedList([...pizzaList]);
  },[pizzaList]);
   
const sortByRanking=()=>{
  const data=pizzaList && [...pizzaList];
  const newPizzaList=data.sort((a,b)=>a.rating-b.rating);
  setModifiedList(newPizzaList);
}

const sortByPrice=()=>{
  const data=pizzaList && [...pizzaList];
  const newPizzaList=data && data.sort((a,b)=>a.price-b.price);
  setModifiedList(newPizzaList);
}

const filterByNonVeg=()=>{
  const data=pizzaList && [...pizzaList];
  const newPizzaList= data && data.filter((a)=>!a.isVeg);
  setModifiedList(newPizzaList);
}

const filterByVeg=()=>{
  const data=pizzaList && [...pizzaList];
  const newPizzaList= data && data.filter((a)=>a.isVeg);
  setModifiedList(newPizzaList);
}

  if (loading) {
    return <img className="invalid" src={loadingImg} alt="Loading" />;
  }
  if (error)
    return <img className="invalid" src={noData} alt="No Data Available" />;
  if (modifiedList && modifiedList.length)
    return <>
    <SortAndFilterPizzas sortByRanking={sortByRanking} sortByPrice={sortByPrice}
    filterByVeg={filterByVeg} filterByNonVeg={filterByNonVeg}></SortAndFilterPizzas>
    {modifiedList.map((entry, i) => {
      return (
        <div key={i}>
        <PizzaCard
         id={entry.id}
          name={entry.name}
          description={entry.description}
          img_url={entry.img_url}
          rating={entry.rating}
          price={entry.price}
          type={entry.isVeg}
          size={entry.size}
          toppings={entry.toppings}
          getFromCart={getFromCart}
          setCartSize={setCartSize}
        />
      
        </div>
      );
    })}
   </>
  return null;
};
const mapStateToProps = (state) => {
  return {
    pizzaList: state.PizzaListReducer.data,
    loading: state.PizzaListReducer.loading,
    error: state.PizzaListReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPizzaList: () => dispatch(fetchPizzas()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);
