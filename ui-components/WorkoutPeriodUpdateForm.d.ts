import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { WorkoutPeriod } from "./graphql/types";
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
export declare type WorkoutPeriodUpdateFormInputValues = {
    dayOneDate?: string;
    workoutids?: string[];
    description?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type WorkoutPeriodUpdateFormValidationValues = {
    dayOneDate?: ValidationFunction<string>;
    workoutids?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutPeriodUpdateFormOverridesProps = {
    WorkoutPeriodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dayOneDate?: PrimitiveOverrideProps<TextFieldProps>;
    workoutids?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutPeriodUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutPeriodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workoutPeriod?: WorkoutPeriod;
    onSubmit?: (fields: WorkoutPeriodUpdateFormInputValues) => WorkoutPeriodUpdateFormInputValues;
    onSuccess?: (fields: WorkoutPeriodUpdateFormInputValues) => void;
    onError?: (fields: WorkoutPeriodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutPeriodUpdateFormInputValues) => WorkoutPeriodUpdateFormInputValues;
    onValidate?: WorkoutPeriodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutPeriodUpdateForm(props: WorkoutPeriodUpdateFormProps): React.ReactElement;
