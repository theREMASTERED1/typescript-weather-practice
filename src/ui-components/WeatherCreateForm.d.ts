/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WeatherCreateFormInputValues = {
    name?: string;
    description?: string;
    location?: string;
    isComplete?: string;
};
export declare type WeatherCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    isComplete?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WeatherCreateFormOverridesProps = {
    WeatherCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    isComplete?: PrimitiveOverrideProps<TextFieldProps>;
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
