import React from "react";
import * as S from "./styles";

interface Props {
  options: string[];
  onSelect: (betType: string) => void;
}

const BetSelect = ({ options, onSelect }: Props) => {
  const handleSelect = (e: any) => {
    onSelect(e.target.value);
  };

  return (
    <S.select onChange={handleSelect}>
      {options.map((e) => (
        <option value={e} key={e}>
          {e}
        </option>
      ))}
    </S.select>
  );
};

export default BetSelect;
