import React,{useState} from "react";
import { Basket } from "./Basket";
import { Button } from "./Button";
import Counter from "./Counter";
import leftArrow from "./assets/left_arrow.png";
import rightArrow from "./assets/right_arrow.png";




const App = () => {
  const totalAppleCount = 10;
  let [leftAppleCount, setLeftAppleCount] = useState(0);
  let [rightAppleCount, setRightAppleCount] = useState(
    totalAppleCount - leftAppleCount
  );

  const leftArrowClick = () => {
    if (rightAppleCount > 0) {
      setLeftAppleCount((prev) => prev + 1);
      setRightAppleCount((prev) => prev - 1);
    }
  };

const rightArrowClick = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount((prev) => {
        return prev - 1;
      });
      setRightAppleCount((prev) => {
        return prev + 1;
      });
    }
  };
  console.log("app rendering");
  return (
    <>
      <div className="box">
        <Basket basket="basket 1" apple_count={rightAppleCount} />
        <Button src={rightArrow} alt="right arrow" fun={rightArrowClick} />
        <Button src={leftArrow} alt="left arrow" fun={leftArrowClick} />
        <Basket basket="basket 2" apple_count={leftAppleCount} />
      </div>
      <Counter/>
    </>
  );
};

export default App;
