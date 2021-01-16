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
          <Button onClick={sortByRanking}>Rating</Button>
          <Button onClick={sortByPrice}>Price</Button>
        </ButtonGroup>
      </div>
      <div>
      <span> Filter By </span> <br />
        
        <ButtonGroup>
          <Button onClick={filterByNonVeg}>Non-Veg</Button>
          <Button onClick={filterByVeg}>Veg</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SortAndFilterPizzas;
