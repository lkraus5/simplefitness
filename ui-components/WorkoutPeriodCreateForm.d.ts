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
export declare type WorkoutPeriodCreateFormInputValues = {
    name?: string;
    workoutids?: string[];
    description?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type WorkoutPeriodCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    workoutids?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutPeriodCreateFormOverridesProps = {
    WorkoutPeriodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    workoutids?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutPeriodCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutPeriodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutPeriodCreateFormInputValues) => WorkoutPeriodCreateFormInputValues;
    onSuccess?: (fields: WorkoutPeriodCreateFormInputValues) => void;
    onError?: (fields: WorkoutPeriodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutPeriodCreateFormInputValues) => WorkoutPeriodCreateFormInputValues;
    onValidate?: WorkoutPeriodCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutPeriodCreateForm(props: WorkoutPeriodCreateFormProps): React.ReactElement;
