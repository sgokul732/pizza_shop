import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./style.css";
const SortAndFilterPizzas = (props) => {
  const { sortByRanking, sortByPrice, filterByNonVeg, filterByVeg } = props;

  return (
    <div className="sortBy">
      <div>
        <span> Sort By </span> <br />
        <ButtonGroup>
          <Button onClick={sortByPrice}>Price</Button>
          <Button onClick={sortByRanking}>Rating</Button>
        </ButtonGroup>
      </div>
      <div>
        <span> Filter By </span> <br />
        <ButtonGroup>
          <Button onClick={filterByVeg}>Veg</Button>
          <Button onClick={filterByNonVeg}>Non-Veg</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SortAndFilterPizzas;
