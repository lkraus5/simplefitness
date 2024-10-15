/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSet } from "./graphql/queries";
import { updateSet } from "./graphql/mutations";
const client = generateClient();
export default function SetUpdateForm(props) {
  const {
    id: idProp,
    set: setModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    reps: "",
    weight: "",
    repsInReserve: "",
    rangeOfMotion: "",
    feeling: "",
    effort: "",
    createdAt: "",
    updatedAt: "",
  };
  const [reps, setReps] = React.useState(initialValues.reps);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [repsInReserve, setRepsInReserve] = React.useState(
    initialValues.repsInReserve
  );
  const [rangeOfMotion, setRangeOfMotion] = React.useState(
    initialValues.rangeOfMotion
  );
  const [feeling, setFeeling] = React.useState(initialValues.feeling);
  const [effort, setEffort] = React.useState(initialValues.effort);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = setRecord
      ? { ...initialValues, ...setRecord }
      : initialValues;
    setReps(cleanValues.reps);
    setWeight(cleanValues.weight);
    setRepsInReserve(cleanValues.repsInReserve);
    setRangeOfMotion(cleanValues.rangeOfMotion);
    setFeeling(cleanValues.feeling);
    setEffort(cleanValues.effort);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [setRecord, setSetRecord] = React.useState(setModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSet.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSet
        : setModelProp;
      setSetRecord(record);
    };
    queryData();
  }, [idProp, setModelProp]);
  React.useEffect(resetStateValues, [setRecord]);
  const validations = {
    reps: [],
    weight: [],
    repsInReserve: [],
    rangeOfMotion: [],
    feeling: [],
    effort: [],
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
          reps: reps ?? null,
          weight: weight ?? null,
          repsInReserve: repsInReserve ?? null,
          rangeOfMotion: rangeOfMotion ?? null,
          feeling: feeling ?? null,
          effort: effort ?? null,
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
            query: updateSet.replaceAll("__typename", ""),
            variables: {
              input: {
                id: setRecord.id,
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
      {...getOverrideProps(overrides, "SetUpdateForm")}
      {...rest}
    >
      <TextField
        label="Reps"
        isRequired={false}
        isReadOnly={false}
        value={reps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reps: value,
              weight,
              repsInReserve,
              rangeOfMotion,
              feeling,
              effort,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.reps ?? value;
          }
          if (errors.reps?.hasError) {
            runValidationTasks("reps", value);
          }
          setReps(value);
        }}
        onBlur={() => runValidationTasks("reps", reps)}
        errorMessage={errors.reps?.errorMessage}
        hasError={errors.reps?.hasError}
        {...getOverrideProps(overrides, "reps")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        value={weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reps,
              weight: value,
              repsInReserve,
              rangeOfMotion,
              feeling,
              effort,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        label="Reps in reserve"
        isRequired={false}
        isReadOnly={false}
        value={repsInReserve}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reps,
              weight,
              repsInReserve: value,
              rangeOfMotion,
              feeling,
              effort,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.repsInReserve ?? value;
          }
          if (errors.repsInReserve?.hasError) {
            runValidationTasks("repsInReserve", value);
          }
          setRepsInReserve(value);
        }}
        onBlur={() => runValidationTasks("repsInReserve", repsInReserve)}
        errorMessage={errors.repsInReserve?.errorMessage}
        hasError={errors.repsInReserve?.hasError}
        {...getOverrideProps(overrides, "repsInReserve")}
      ></TextField>
      <TextField
        label="Range of motion"
        isRequired={false}
        isReadOnly={false}
        value={rangeOfMotion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reps,
              weight,
              repsInReserve,
              rangeOfMotion: value,
              feeling,
              effort,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.rangeOfMotion ?? value;
          }
          if (errors.rangeOfMotion?.hasError) {
            runValidationTasks("rangeOfMotion", value);
          }
          setRangeOfMotion(value);
        }}
        onBlur={() => runValidationTasks("rangeOfMotion", rangeOfMotion)}
        errorMessage={errors.rangeOfMotion?.errorMessage}
        hasError={errors.rangeOfMotion?.hasError}
        {...getOverrideProps(overrides, "rangeOfMotion")}
      ></TextField>
      <TextField
        label="Feeling"
        isRequired={false}
        isReadOnly={false}
        value={feeling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reps,
              weight,
              repsInReserve,
              rangeOfMotion,
              feeling: value,
              effort,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.feeling ?? value;
          }
          if (errors.feeling?.hasError) {
            runValidationTasks("feeling", value);
          }
          setFeeling(value);
        }}
        onBlur={() => runValidationTasks("feeling", feeling)}
        errorMessage={errors.feeling?.errorMessage}
        hasError={errors.feeling?.hasError}
        {...getOverrideProps(overrides, "feeling")}
      ></TextField>
      <TextField
        label="Effort"
        isRequired={false}
        isReadOnly={false}
        value={effort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reps,
              weight,
              repsInReserve,
              rangeOfMotion,
              feeling,
              effort: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.effort ?? value;
          }
          if (errors.effort?.hasError) {
            runValidationTasks("effort", value);
          }
          setEffort(value);
        }}
        onBlur={() => runValidationTasks("effort", effort)}
        errorMessage={errors.effort?.errorMessage}
        hasError={errors.effort?.hasError}
        {...getOverrideProps(overrides, "effort")}
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
              reps,
              weight,
              repsInReserve,
              rangeOfMotion,
              feeling,
              effort,
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
              reps,
              weight,
              repsInReserve,
              rangeOfMotion,
              feeling,
              effort,
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
          isDisabled={!(idProp || setModelProp)}
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
              !(idProp || setModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
