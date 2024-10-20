import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MesoPeriod } from "./graphql/types";
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
export declare type MesoPeriodUpdateFormInputValues = {
    description?: string;
    muscleGroupIds?: string[];
    createdAt?: string;
    updatedAt?: string;
};
export declare type MesoPeriodUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
    muscleGroupIds?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MesoPeriodUpdateFormOverridesProps = {
    MesoPeriodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    muscleGroupIds?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MesoPeriodUpdateFormProps = React.PropsWithChildren<{
    overrides?: MesoPeriodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mesoPeriod?: MesoPeriod;
    onSubmit?: (fields: MesoPeriodUpdateFormInputValues) => MesoPeriodUpdateFormInputValues;
    onSuccess?: (fields: MesoPeriodUpdateFormInputValues) => void;
    onError?: (fields: MesoPeriodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MesoPeriodUpdateFormInputValues) => MesoPeriodUpdateFormInputValues;
    onValidate?: MesoPeriodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MesoPeriodUpdateForm(props: MesoPeriodUpdateFormProps): React.ReactElement;
