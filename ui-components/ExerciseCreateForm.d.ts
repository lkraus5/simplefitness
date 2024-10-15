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
export declare type ExerciseCreateFormInputValues = {
    name?: string;
    targetedMuscles?: string[];
    description?: string;
};
export declare type ExerciseCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    targetedMuscles?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseCreateFormOverridesProps = {
    ExerciseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    targetedMuscles?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseCreateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExerciseCreateFormInputValues) => ExerciseCreateFormInputValues;
    onSuccess?: (fields: ExerciseCreateFormInputValues) => void;
    onError?: (fields: ExerciseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseCreateFormInputValues) => ExerciseCreateFormInputValues;
    onValidate?: ExerciseCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseCreateForm(props: ExerciseCreateFormProps): React.ReactElement;
