import React from "react";
import { GameModel } from "../../models";
import { HStack, VStack } from "../commons/Containers/Containers";
import { Race } from "../Race";

interface Props {
  game: GameModel;
}

const Game = ({ game }: Props) => {
  return (
    <VStack>
      {game.races.map((e) => (
        <Race race={e} key={e.id} />
      ))}
    </VStack>
  );
};

export default Game;
