import React from 'react';
import { Button as NextButton } from "@nextui-org/button";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, className, color, variant, isIconOnly, onClick, title, size, disable }) => {
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

  const buttonProps = {
    className: buttonClass,
    variant: variant,
    isIconOnly: isIconOnly,
    ...(onClick && { onClick }), // Conditionally add onClick if it's defined
    title: title,
    size: size,
    isDisabled : disable
  };

  return (
    <NextButton {...buttonProps}>
      {children}
    </NextButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant : PropTypes.oneOf(['solid', 'bordered']),
  size: PropTypes.oneOf(['sm','md', 'lg']),
  isIconOnly: PropTypes.bool,
  title : PropTypes.string,
  onClick: PropTypes.func,
  disable : PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  color: 'primary',
  variant: 'solid',
  isIconOnly : false,
  title : '',
  size: 'md',
  disable : false
};

export default Button;

