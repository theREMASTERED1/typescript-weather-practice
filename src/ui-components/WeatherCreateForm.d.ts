/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WeatherCreateFormInputValues = {
    username?: string;
    description?: string;
    location?: string;
    isComplete?: boolean;
    isDeleted?: boolean;
};
export declare type WeatherCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    isComplete?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WeatherCreateFormOverridesProps = {
    WeatherCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    isComplete?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WeatherCreateFormProps = React.PropsWithChildren<{
    overrides?: WeatherCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WeatherCreateFormInputValues) => WeatherCreateFormInputValues;
    onSuccess?: (fields: WeatherCreateFormInputValues) => void;
    onError?: (fields: WeatherCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WeatherCreateFormInputValues) => WeatherCreateFormInputValues;
    onValidate?: WeatherCreateFormValidationValues;
} & React.CSSProperties>;
export default function WeatherCreateForm(props: WeatherCreateFormProps): React.ReactElement;
