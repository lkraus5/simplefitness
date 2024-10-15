import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Set } from "./graphql/types";
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
export declare type SetUpdateFormInputValues = {
    reps?: string;
    weight?: string;
    repsInReserve?: string;
    rangeOfMotion?: string;
    feeling?: string;
    effort?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SetUpdateFormValidationValues = {
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
export declare type SetUpdateFormOverridesProps = {
    SetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reps?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    repsInReserve?: PrimitiveOverrideProps<TextFieldProps>;
    rangeOfMotion?: PrimitiveOverrideProps<TextFieldProps>;
    feeling?: PrimitiveOverrideProps<TextFieldProps>;
    effort?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SetUpdateFormProps = React.PropsWithChildren<{
    overrides?: SetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    set?: Set;
    onSubmit?: (fields: SetUpdateFormInputValues) => SetUpdateFormInputValues;
    onSuccess?: (fields: SetUpdateFormInputValues) => void;
    onError?: (fields: SetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SetUpdateFormInputValues) => SetUpdateFormInputValues;
    onValidate?: SetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SetUpdateForm(props: SetUpdateFormProps): React.ReactElement;
