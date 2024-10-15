import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Exercise } from "./graphql/types";
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
export declare type ExerciseUpdateFormInputValues = {
    name?: string;
    targetedMuscles?: string[];
    description?: string;
};
export declare type ExerciseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    targetedMuscles?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseUpdateFormOverridesProps = {
    ExerciseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    targetedMuscles?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    exercise?: Exercise;
    onSubmit?: (fields: ExerciseUpdateFormInputValues) => ExerciseUpdateFormInputValues;
    onSuccess?: (fields: ExerciseUpdateFormInputValues) => void;
    onError?: (fields: ExerciseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseUpdateFormInputValues) => ExerciseUpdateFormInputValues;
    onValidate?: ExerciseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseUpdateForm(props: ExerciseUpdateFormProps): React.ReactElement;
