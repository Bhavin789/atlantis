import React from "react";
import uuid from "uuid";
import styles from "./InternalChip.css";
import { InternalChip } from "./InternalChip";
import { ChipSingleSelectProps } from "./ChipsTypes";

type InternalChipChoiceProps = Pick<
  ChipSingleSelectProps,
  "selected" | "onChange" | "children" | "onClickChip" | "name"
>;

export function InternalChipSingleSelect({
  children,
  selected,
  name = uuid.v1(),
  onChange,
  onClickChip,
}: InternalChipChoiceProps) {
  return (
    <div className={styles.wrapper}>
      {React.Children.map(children, child => (
        <InternalChip
          {...child.props}
          type="radio"
          name={name}
          active={child.props.value === selected}
          warnOnLongLabels={true}
          onClick={event => {
            onClickChip?.(event, child.props.value);
            handleClick(child.props.value);
          }}
        />
      ))}
    </div>
  );

  function handleClick(value?: string | number) {
    const newValue = value !== selected ? value : undefined;
    onChange(newValue);
  }
}
