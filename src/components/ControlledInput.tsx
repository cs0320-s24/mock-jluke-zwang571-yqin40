import '../styles/main.css';
import { Dispatch, SetStateAction } from 'react';

/**
 * A controlled input box. This is a component that wraps an input box, and manages its state.
 */
interface ControlledInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  ariaLabel: string;
}

/**
 * Renders a controlled input component.
 *
 * @param value - The current value of the input box.
 * @param setValue - A function to update the value of the input box.
 * @param ariaLabel - The ARIA label for the input box.
 * @returns The controlled input component.
 */
export function ControlledInput({ value, setValue, ariaLabel }: ControlledInputProps) {
  return (
    <input
      type="text"
      className="repl-command-box"
      value={value}
      placeholder="Enter command here!"
      onChange={(ev) => setValue(ev.target.value)}
      aria-label={ariaLabel}
    />
  );
}
