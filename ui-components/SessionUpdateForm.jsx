/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSession } from "./graphql/queries";
import { updateSession } from "./graphql/mutations";
const client = generateClient();
export default function SessionUpdateForm(props) {
  const {
    id: idProp,
    session: sessionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fueledFeeling: "",
    muscleFeeling: "",
    createdAt: "",
    updatedAt: "",
  };
  const [fueledFeeling, setFueledFeeling] = React.useState(
    initialValues.fueledFeeling
  );
  const [muscleFeeling, setMuscleFeeling] = React.useState(
    initialValues.muscleFeeling
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sessionRecord
      ? { ...initialValues, ...sessionRecord }
      : initialValues;
    setFueledFeeling(cleanValues.fueledFeeling);
    setMuscleFeeling(cleanValues.muscleFeeling);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [sessionRecord, setSessionRecord] = React.useState(sessionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSession.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSession
        : sessionModelProp;
      setSessionRecord(record);
    };
    queryData();
  }, [idProp, sessionModelProp]);
  React.useEffect(resetStateValues, [sessionRecord]);
  const validations = {
    fueledFeeling: [],
    muscleFeeling: [],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fueledFeeling: fueledFeeling ?? null,
          muscleFeeling: muscleFeeling ?? null,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSession.replaceAll("__typename", ""),
            variables: {
              input: {
                id: sessionRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SessionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fueled feeling"
        isRequired={false}
        isReadOnly={false}
        value={fueledFeeling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fueledFeeling: value,
              muscleFeeling,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.fueledFeeling ?? value;
          }
          if (errors.fueledFeeling?.hasError) {
            runValidationTasks("fueledFeeling", value);
          }
          setFueledFeeling(value);
        }}
        onBlur={() => runValidationTasks("fueledFeeling", fueledFeeling)}
        errorMessage={errors.fueledFeeling?.errorMessage}
        hasError={errors.fueledFeeling?.hasError}
        {...getOverrideProps(overrides, "fueledFeeling")}
      ></TextField>
      <TextField
        label="Muscle feeling"
        isRequired={false}
        isReadOnly={false}
        value={muscleFeeling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fueledFeeling,
              muscleFeeling: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.muscleFeeling ?? value;
          }
          if (errors.muscleFeeling?.hasError) {
            runValidationTasks("muscleFeeling", value);
          }
          setMuscleFeeling(value);
        }}
        onBlur={() => runValidationTasks("muscleFeeling", muscleFeeling)}
        errorMessage={errors.muscleFeeling?.errorMessage}
        hasError={errors.muscleFeeling?.hasError}
        {...getOverrideProps(overrides, "muscleFeeling")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fueledFeeling,
              muscleFeeling,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fueledFeeling,
              muscleFeeling,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sessionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sessionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
