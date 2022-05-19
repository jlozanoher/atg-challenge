import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { Bet } from "./components/Bet";
import BetSelect from "./components/BetSelect/BetSelect";
import { VStack } from "./components/commons/Containers/Containers";
import { Spinner } from "./components/Spinner/Spinner";
import { fetchBets } from "./slices";

const options = [`V75`, `V86`, `GS75`];

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { bets, status } = useSelector((state: RootState) => state.bets);

  const handleSelect = (betType: string) => {
    dispatch(fetchBets(betType));
  };

  return (
    <VStack>
      <BetSelect options={options} onSelect={handleSelect} />
      {status === "loading" && <Spinner />}
      {bets && bets.length !== 0 && <Bet bet={bets[0]} />}
    </VStack>
  );
}

export default App;
