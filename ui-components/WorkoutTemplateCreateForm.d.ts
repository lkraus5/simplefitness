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
export declare type WorkoutTemplateCreateFormInputValues = {
    name?: string;
    exerciseids?: string[];
    description?: string;
};
export declare type WorkoutTemplateCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    exerciseids?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutTemplateCreateFormOverridesProps = {
    WorkoutTemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    exerciseids?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutTemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutTemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutTemplateCreateFormInputValues) => WorkoutTemplateCreateFormInputValues;
    onSuccess?: (fields: WorkoutTemplateCreateFormInputValues) => void;
    onError?: (fields: WorkoutTemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutTemplateCreateFormInputValues) => WorkoutTemplateCreateFormInputValues;
    onValidate?: WorkoutTemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutTemplateCreateForm(props: WorkoutTemplateCreateFormProps): React.ReactElement;
