import axios from "axios";

export const getPizzas = () => {
  return {
    type: "GET_PIZZAS",
  };
};

export const getPizzasSuccess = (data) => {
  return {
    type: "GET_PIZZAS_SUCCESS",
    payload: data,
  };
};

export const getPizzasFailure = (data) => {
  return {
    type: "GET_PIZZAS_FAILURE",
    payload: data,
  };
};

export const fetchPizzas = () => {
  const BASE_URL =
    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  let URI = BASE_URL;
  return (dispatch) => {
    dispatch(getPizzas());
    axios
      .get(URI)
      .then((res) => {
        const pizzaList = res.data;

        dispatch(getPizzasSuccess(pizzaList));
      })
      .catch((err) => {
        const pizzaList = err.data;
        dispatch(getPizzasFailure(pizzaList));
      });
  };
};
