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
export declare type WorkoutCreateFormInputValues = {
    name?: string;
    exerciseids?: string[];
    description?: string;
};
export declare type WorkoutCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    exerciseids?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutCreateFormOverridesProps = {
    WorkoutCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    exerciseids?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutCreateFormInputValues) => WorkoutCreateFormInputValues;
    onSuccess?: (fields: WorkoutCreateFormInputValues) => void;
    onError?: (fields: WorkoutCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutCreateFormInputValues) => WorkoutCreateFormInputValues;
    onValidate?: WorkoutCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutCreateForm(props: WorkoutCreateFormProps): React.ReactElement;
