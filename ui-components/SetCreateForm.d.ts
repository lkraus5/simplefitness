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
export declare type SetCreateFormInputValues = {
    reps?: string;
    weight?: string;
    repsInReserve?: string;
    rangeOfMotion?: string;
    feeling?: string;
    effort?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SetCreateFormValidationValues = {
    reps?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
    repsInReserve?: ValidationFunction<string>;
    rangeOfMotion?: ValidationFunction<string>;
    feeling?: ValidationFunction<string>;
    effort?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SetCreateFormOverridesProps = {
    SetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reps?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    repsInReserve?: PrimitiveOverrideProps<TextFieldProps>;
    rangeOfMotion?: PrimitiveOverrideProps<TextFieldProps>;
    feeling?: PrimitiveOverrideProps<TextFieldProps>;
    effort?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SetCreateFormProps = React.PropsWithChildren<{
    overrides?: SetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SetCreateFormInputValues) => SetCreateFormInputValues;
    onSuccess?: (fields: SetCreateFormInputValues) => void;
    onError?: (fields: SetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SetCreateFormInputValues) => SetCreateFormInputValues;
    onValidate?: SetCreateFormValidationValues;
} & React.CSSProperties>;
export default function SetCreateForm(props: SetCreateFormProps): React.ReactElement;
