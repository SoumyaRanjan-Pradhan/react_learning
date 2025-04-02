const Search = ({SetQuery}) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..." onChange ={(e)=>{SetQuery(e.target.value)}}/>
    </div>
  );
};

export default Search
