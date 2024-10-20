import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MesoPeriodCreateFormInputValues = {
    periodLength?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type MesoPeriodCreateFormValidationValues = {
    periodLength?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MesoPeriodCreateFormOverridesProps = {
    MesoPeriodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    periodLength?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MesoPeriodCreateFormProps = React.PropsWithChildren<{
    overrides?: MesoPeriodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MesoPeriodCreateFormInputValues) => MesoPeriodCreateFormInputValues;
    onSuccess?: (fields: MesoPeriodCreateFormInputValues) => void;
    onError?: (fields: MesoPeriodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MesoPeriodCreateFormInputValues) => MesoPeriodCreateFormInputValues;
    onValidate?: MesoPeriodCreateFormValidationValues;
} & React.CSSProperties>;
export default function MesoPeriodCreateForm(props: MesoPeriodCreateFormProps): React.ReactElement;
