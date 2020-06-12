import React, {FC} from "react";
import {Button as ButtonKey} from "./styles";
import {KeynumberProps} from "./types";

export const KeyNumber: FC<KeynumberProps> = ({ number, onClick }) => {
  return (
    <ButtonKey onClick={onClick} role={`key-${number}`}>{number}</ButtonKey>
  );
};