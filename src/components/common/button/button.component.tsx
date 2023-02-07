import React, { FC } from 'react';

import './button.styles.scss';

interface ButtonProps {
  buttonText: string;
  onClick?(): void;
}

const Button: FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button id='add-button' type='submit' onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
