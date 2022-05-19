import React from "react";
import { StartModel } from "../../models";
import * as S from "./styles";

interface Props {
  start: StartModel;
}

const StartDetails = ({ start }: Props) => {
  return (
    <S.content>
      <div>
        {`trainer: ${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}
      </div>
      <div>{`horse father: ${start.horse.pedigree.father.name}`}</div>
    </S.content>
  );
};

export default StartDetails;
