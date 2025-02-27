const Search = ({searchData,data_length}) => {
   if(data_length>1){
   return  <div className="search_input">
   <input
     type="text"
     className="input_form search"
     placeholder="Search username only" onChange={(e)=>{
     searchData(e);
     }}
   /><i className="fa-solid fa-magnifying-glass search_icon"></i>
 </div>
   }
};
export default Search;
