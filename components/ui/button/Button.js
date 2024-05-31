import React from 'react';
import { Button as NextButton } from "@nextui-org/button";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, className, color, variant, isIconOnly }) => {
  const colorClasses = {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-gray-500 text-white',
  };

  const variantClasses = {
    solid: '',
    bordered: 'border-2 bg-transparent text-gray-500 border-gray-500',
  };

  const buttonClass = classNames(
    colorClasses[color],
    variantClasses[variant],
    className
  );

  return (
    <NextButton className={buttonClass} variant={variant} isIconOnly={isIconOnly}>
      {children}
    </NextButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant : PropTypes.oneOf(['solid', 'bordered'])
};

Button.defaultProps = {
  className: '',
  color: 'primary',
  variant: 'solid',
  isIconOnly : false
};

export default Button;

