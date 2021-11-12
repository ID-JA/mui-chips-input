import * as React from "react";

import { FormControlProps } from "@mui/material/FormControl";
import { FormHelperTextProps } from "@mui/material/FormHelperText";
import { InputProps as StandardInputProps } from "@mui/material/Input";
import { FilledInputProps } from "@mui/material/FilledInput";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

import { InputLabelProps } from "@mui/material/InputLabel";

export interface ChipRendererArgs {
  value: string;
  text: string;
  chip: any;
  isFocused: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  handleClick: React.EventHandler<any>;
  handleDelete: React.EventHandler<any>;
  className: string;
}

export type ChipRenderer = (
  args: ChipRendererArgs,
  key: any
) => React.ReactNode;

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseTextFieldProps extends Omit<FormControlProps, "onChange"> {
  allowDuplicates?: boolean;
  alwaysShowPlaceholder?: boolean;
  blurBehavior?: "clear" | "add" | "add-or-clear" | "ignore";
  chipRenderer?: ChipRenderer;
  classes?: Record<string, string>;
  clearInputValueOnChange?: boolean;
  dataSource?: any[];
  dataSourceConfig?: {
    text: string;
    value: string;
  };
  defaultValue?: any[];
  disabled?: boolean;
  disableUnderline?: boolean;
  FormHelperTextProps?: FormHelperTextProps;
  fullWidth?: boolean;
  fullWidthInput?: boolean;
  helperText?: React.ReactNode;
  InputLabelProps?: InputLabelProps;
  inputRef?: (ref: React.Ref<HTMLInputElement>) => any;
  inputValue?: string;
  label?: React.ReactNode;
  newChipKeyCodes?: number[];
  newChipKeys?: string[];
  onAdd?: (chip: any) => any;
  onBeforeAdd?: (chip: any) => boolean;
  onChange?: (chips: any[]) => any;
  onDelete?: (chip: any, index: number) => any;
  onUpdateInput?: React.EventHandler<any>;
  placeholder?: string;
  readOnly?: boolean;
  value?: any[];
  variant?: "outlined" | "standard" | "filled";
}

export interface StandardTextFieldProps extends BaseTextFieldProps {
  variant?: "standard";
  InputProps?: Partial<StandardInputProps>;
}

export interface FilledTextFieldProps extends BaseTextFieldProps {
  variant: "filled";
  InputProps?: Partial<FilledInputProps>;
}

export interface OutlinedTextFieldProps extends BaseTextFieldProps {
  variant: "outlined";
  InputProps?: Partial<OutlinedInputProps>;
}

export type Props =
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps;

declare const ChipInput: React.ComponentType<Props>;
export default ChipInput;
