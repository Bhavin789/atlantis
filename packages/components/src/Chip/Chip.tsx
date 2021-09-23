import React from "react";
import { InternalChipProps } from "./InternalChip";
import { useAssert } from "./useAssert";

export interface ChipProps<T>
  extends Pick<InternalChipProps, "label" | "prefix" | "disabled" | "invalid"> {
  readonly value: T;
}

// Only need the component to pass in the data as a react children
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Chip<T>(props: ChipProps<T>) {
  // Throw error when <Chip /> gets used outside of the <Chips />
  useAssert(true, "`<Chip>` component can only be used inside `<Chips>`");

  return <></>;
}
