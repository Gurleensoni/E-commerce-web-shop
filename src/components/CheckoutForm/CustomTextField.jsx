import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
    <Controller
      as={TextField}
      name={name}
      defaultValue=""
      control={control}
      label={label}
      fullWidth
      required={required}
      error={isError}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          name={name}
          label={label}
          required={required}
          fullWidth
        />
      )}
    />
  </Grid>
  );
}

export default FormInput;
