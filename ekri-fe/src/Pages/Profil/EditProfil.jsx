import { Box, Button } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextForm from "../../components/TextForm";
import axios from "axios";
import userActions from "../../redux/actions/userActions";
import { useTranslation } from "react-i18next";

const EditProfil = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user, token } = useSelector((state) => state.userReducer);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    },
  });

  const submitEdit = (data) => {
    const { firstName, lastName } = data;

    axios
      .put(
        "http://127.0.0.1:2500/api/user",
        {
          _id: user._id,
          firstName,
          lastName,
          email: "khaledsahli@gmail.com",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: userActions.auth,
          user: response.data.user,
          token: token,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(submitEdit)}>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextForm
              value={value}
              onChange={onChange}
              error={error}
              label={t("pages.edit_profil.inputs.firstName")}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextForm
              value={value}
              onChange={onChange}
              error={error}
              label={t("pages.edit_profil.inputs.lastName")}
            />
          )}
        />
        <Button color="warning" type="submit">
          Edit
        </Button>
      </form>
    </Box>
  );
};

export default EditProfil;
