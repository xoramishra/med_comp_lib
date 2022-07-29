import React, { ReactChild } from "react";
import { Button as AntButton} from 'antd';
export interface ButtonProps {
  label: string;
  children:ReactChild
}

const Button = (props: ButtonProps) => {
  return <AntButton>{props.children}</AntButton>;
};

export default Button;