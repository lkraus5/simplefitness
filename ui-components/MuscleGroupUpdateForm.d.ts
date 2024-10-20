import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MuscleGroup } from "./graphql/types";
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
export declare type MuscleGroupUpdateFormInputValues = {
    name?: string;
    description?: string;
    metadata?: string;
};
export declare type MuscleGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    metadata?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MuscleGroupUpdateFormOverridesProps = {
    MuscleGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MuscleGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: MuscleGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    muscleGroup?: MuscleGroup;
    onSubmit?: (fields: MuscleGroupUpdateFormInputValues) => MuscleGroupUpdateFormInputValues;
    onSuccess?: (fields: MuscleGroupUpdateFormInputValues) => void;
    onError?: (fields: MuscleGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MuscleGroupUpdateFormInputValues) => MuscleGroupUpdateFormInputValues;
    onValidate?: MuscleGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MuscleGroupUpdateForm(props: MuscleGroupUpdateFormProps): React.ReactElement;
