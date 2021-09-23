import React, { ReactElement } from "react";
import styles from "./InternalChipChoice.css";
import { InternalChip } from "./InternalChip";
import { ChipProps } from "./Chip";

interface ChipSelectionProps {
  readonly children: ReactElement<ChipProps>[];
  readonly selected: string;
  onChange(value: string): void;
}

export function InternalChipChoice({
  children,
  selected,
  onChange,
}: ChipSelectionProps) {
  return (
    <div className={styles.wrapper}>
      {React.Children.map(children, child => (
        <InternalChip
          {...child.props}
          active={child.props.value === selected}
          onClick={() => handleClick(child.props.value)}
        />
      ))}
    </div>
  );

  function handleClick(value: string) {
    const newValue = value !== selected ? value : "";
    onChange(newValue);
  }
}
