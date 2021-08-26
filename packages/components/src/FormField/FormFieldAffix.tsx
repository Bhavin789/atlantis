import classnames from "classnames";
import React, { RefObject } from "react";
import { XOR } from "ts-xor";
import { Affix, FormFieldProps, Suffix } from "./FormFieldTypes";
import styles from "./FormField.css";
import { Button } from "../Button";
import { Icon } from "../Icon";

interface AffixLabelProps extends Affix {
  labelRef: RefObject<HTMLDivElement>;
  variation?: "prefix" | "suffix";
}

export function AffixLabel({
  label,
  variation = "prefix",
  labelRef,
}: AffixLabelProps) {
  const affixLabelClass = classnames(styles.affixLabel, styles[variation]);

  return (
    <div ref={labelRef} className={affixLabelClass}>
      {label}
    </div>
  );
}
interface AffixIconProps extends Pick<FormFieldProps, "size"> {
  readonly variation?: "prefix" | "suffix";
}

export function AffixIcon({
  icon,
  onClick,
  variation = "prefix",
  size,
}: AffixIconProps & XOR<Affix, Suffix>) {
  const affixIconClass = classnames(styles.affixIcon, styles[variation], {
    [styles.hasAction]: onClick,
  });

  const iconSize = size === "small" ? "small" : "base";

  if (!icon) return <></>;

  return (
    <div className={affixIconClass}>
      {onClick ? (
        <Button
          ariaLabel="Input action"
          icon={icon}
          onClick={onClick}
          type="tertiary"
          size={iconSize}
        />
      ) : (
        <Icon name={icon} size={iconSize} color="greyBlue" />
      )}
    </div>
  );
}
