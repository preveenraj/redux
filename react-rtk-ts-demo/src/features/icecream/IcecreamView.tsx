import { useState } from "react";
import { ordered, restocked } from "./icecreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IcecreamView = () => {
  const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col items-center gap-4 w-1/3">
      <h2 className="text-xl">Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          className="p-2 rounded-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => {
          dispatch(restocked(+value))
          setValue('')
        }}>
          Restock ice creams
        </button>
      </div>
    </div>
  );
};

export default IcecreamView;
