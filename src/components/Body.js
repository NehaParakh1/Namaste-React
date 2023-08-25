import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
const[filteredRestaurant, setFilteredRestaurant]=useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
           const filteredRestaurant= restaurantList.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);

          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.0
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
