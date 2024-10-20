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
export declare type MuscleGroupCreateFormInputValues = {
    name?: string;
    description?: string;
    metadata?: string;
};
export declare type MuscleGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    metadata?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MuscleGroupCreateFormOverridesProps = {
    MuscleGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MuscleGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: MuscleGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MuscleGroupCreateFormInputValues) => MuscleGroupCreateFormInputValues;
    onSuccess?: (fields: MuscleGroupCreateFormInputValues) => void;
    onError?: (fields: MuscleGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MuscleGroupCreateFormInputValues) => MuscleGroupCreateFormInputValues;
    onValidate?: MuscleGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function MuscleGroupCreateForm(props: MuscleGroupCreateFormProps): React.ReactElement;
