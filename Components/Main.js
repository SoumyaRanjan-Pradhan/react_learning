import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Main() {
  const [query, SetQuery] = useState("");
  const [data, SetData] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(data);
      SetData(result);
      console.log(data);
    }); 
  },[])
  return (
    <main>
      <div className="search-filter-container">
        <Search SetQuery={SetQuery} />
        <Filter />
      </div>
      <div className="countries-container">
        {console.log(data)}
        {data
          .filter((val) => {
            return val.name.common.toLowerCase().includes(query.toLowerCase());
          })
          .map((val, id) => {
            return (
              <CountryCard
                key={id}
                name={val.name.common}
                flag={val.flags.svg}
                population={val.population.toLocaleString("en-IN")}
                region={val.region}
                capital={val.capital}
              />
            );
          })}
      </div>
    </main>
  );
}