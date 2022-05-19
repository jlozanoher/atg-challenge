import React, { useState } from "react";
import { StartModel } from "../../models";
import StartDetails from "../StartDetails/StartDetails";
import * as S from "./styles";

interface Props {
  start: StartModel;
}

const Start = ({ start }: Props) => {
  return (
    <S.article>
      <summary>{`${start.number} ${start.horse.name} - ${start.driver.firstName} ${start.driver.lastName}`}</summary>
      <StartDetails start={start} />
    </S.article>
  );
};

export default Start;
