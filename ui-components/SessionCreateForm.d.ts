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
export declare type SessionCreateFormInputValues = {
    fueledFeeling?: string;
    muscleFeeling?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SessionCreateFormValidationValues = {
    fueledFeeling?: ValidationFunction<string>;
    muscleFeeling?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionCreateFormOverridesProps = {
    SessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fueledFeeling?: PrimitiveOverrideProps<TextFieldProps>;
    muscleFeeling?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SessionCreateFormProps = React.PropsWithChildren<{
    overrides?: SessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onSuccess?: (fields: SessionCreateFormInputValues) => void;
    onError?: (fields: SessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onValidate?: SessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SessionCreateForm(props: SessionCreateFormProps): React.ReactElement;
