import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4 w-1/3">
      <h2 className="text-xl">Number of cakes - {numOfCakes}</h2>
      <div className="flex gap-4">
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
      </div>
    </div>
  );
};

export default CakeView;
