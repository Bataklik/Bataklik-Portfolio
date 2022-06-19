import { Button, Grid, TextField } from "@mui/material";
import { useFormControls } from "./useFormControls";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 3,
  },
];
export const ContactForm = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();
  return (
    <form onSubmit={handleFormSubmit}>
      <Grid
        justifyContent={"center"}
        container
        spacing={1}
        sx={{
          padding: "2rem",
        }}
      >
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <Grid
              key={inputFieldValue.id}
              item
              sm={inputFieldValue.id === "my-message" ? 12 : 6}
              xs={12}
              sx={{ padding: "2rem" }}
            >
              <TextField
                key={index}
                sx={{ width: "100%" }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                multiline={inputFieldValue.multiline ?? false}
                rows={inputFieldValue.rows ?? 1}
                autoComplete="none"
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            </Grid>
          );
        })}
        <Grid item container xs={12}>
          <Grid item>
            <Button type="submit" variant="contained" disabled={!formIsValid()}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactForm;
