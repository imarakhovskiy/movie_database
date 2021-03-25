import { useCallback, forwardRef, useState, useEffect, InputHTMLAttributes } from 'react';
import cn from 'classnames'

import styles from './styles.module.scss'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string | number | readonly string[]) => void;
}

export const Input = forwardRef(({ className, onChange, value, ...props }: InputProps, ref) => {
  const [inputValue, setInputValue] = useState(value)
  const onInputChange = useCallback(
    ({ target: { value } }) => {
      onChange && onChange(value)
      setInputValue(value)
    },
    [onChange],
  )

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <input
      ref={ref as React.RefObject<HTMLInputElement>}
      className={cn(styles.input, { [`${className}`]: className })}
      onChange={onInputChange}
      value={inputValue}
      {...props}
    />
  )
})
