/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Weather } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WeatherUpdateFormInputValues = {
    username?: string;
    description?: string;
    location?: string;
    isComplete?: boolean;
    isDeleted?: boolean;
};
export declare type WeatherUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    isComplete?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WeatherUpdateFormOverridesProps = {
    WeatherUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    isComplete?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WeatherUpdateFormProps = React.PropsWithChildren<{
    overrides?: WeatherUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    weather?: Weather;
    onSubmit?: (fields: WeatherUpdateFormInputValues) => WeatherUpdateFormInputValues;
    onSuccess?: (fields: WeatherUpdateFormInputValues) => void;
    onError?: (fields: WeatherUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WeatherUpdateFormInputValues) => WeatherUpdateFormInputValues;
    onValidate?: WeatherUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WeatherUpdateForm(props: WeatherUpdateFormProps): React.ReactElement;
