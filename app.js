import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
function Card(pros) {
  return (
    <div className="card">
      <h3>{pros.author}</h3>
      <img src={pros.authorImage} style={{ width: "100%" }} />
      <h3>{pros.category}</h3>
      <p>{pros.quote}</p>
    </div>
  );
}
let list = [];
fetch("https://dummy-json.mock.beeceptor.com/quotes")
  .then((res) => res.json())
  .then((result) => {
    root.render(
      <div className="cards">
        {list = result.map((product) => {
          return (
            <Card
              author={product.author}
              authorImage={product.authorImage}
              category={product.category}
              quote={product.quote}
            />
          );
        })}{console.log(list)}
      </div>
      
    );
  });
