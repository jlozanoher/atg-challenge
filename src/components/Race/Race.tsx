import React from "react";
import dayjs from "dayjs";
import { RaceModel } from "../../models";
import { Start } from "../Start";
import * as S from "./styles";

interface Props {
  race: RaceModel;
}

const Race = ({ race }: Props) => {
  return (
    <S.article>
      <h4>
        {`${race.number} - ${race.name} -  ${dayjs(race.startTime).format(
          "HH:mm"
        )}`}
      </h4>
      <div>
        {race.starts.map((e, index) => (
          <Start start={e} key={index} />
        ))}
      </div>
    </S.article>
  );
};

export default Race;
