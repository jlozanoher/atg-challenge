import React, { useEffect } from "react";
import { BetModel } from "../../models";
import { Game } from "../Game";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchGame } from "../../slices";
import * as S from "./styles";
import { Skeleton } from "../commons/Skeleton/Skeleton";

interface Props {
  bet: BetModel;
}

const Bet = ({ bet }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { game, status } = useSelector((state: RootState) => state.games);

  useEffect(() => {
    dispatch(fetchGame(bet.id));
  }, [bet]);

  return (
    <S.article>
      <h2>{`${bet.tracks[0].name} - ${dayjs(bet.startTime).format(
        "HH:mm"
      )}`}</h2>

      {status === "loading" && (
        <Skeleton>
          <h1></h1>
          <p></p>
        </Skeleton>
      )}
      {game && status === "succeeded" && <Game game={game} />}
    </S.article>
  );
};

export default Bet;
