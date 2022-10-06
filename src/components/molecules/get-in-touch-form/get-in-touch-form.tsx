import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Checkbox, LabelInput, Button, TextBox } from "@atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import styles from "./get-in-touch-form.module.scss";

const validationSchema = Yup.object({
  // comment: Yup.string().required("Please add your comment"),
  userName: Yup.string().required("Name can't be blank"),
  email: Yup.string()
    .required("Email address can't be blank")
    .email("Email is invalid"),
  acceptTerms: Yup.bool().oneOf([true], "must be accepted"),
})
  .nullable()
  .required();

export const GetInTouchForm: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  type formOptionsProps = {
    userName: string;
    email: string;
    acceptTerms: boolean;
  };

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<formOptionsProps>(formOptions);

  const onSubmit = (data: formOptionsProps) => {
    alert(`SUCCESS!! :-)\n\n${JSON.stringify(data, null, 4)}`);
  };
  return (
    <form
      // https://github.com/react-hook-form/react-hook-form/discussions/8020
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      aria-label="How is the rising cost of living affecting you?"
      name="get in touch form"
      className={`container ${styles.formContainer}`}
    >
      {/* why this extra div can it not be passed to the TEXTBox */}
      <div className={styles.textBox}>
        <TextBox
          data-testid="comment"
          aria-label="Please share your experiences"
          onChange={onChange}
          count={count}
          placeholder="Please share your experience"
          // className={` ${errors?.name ? "is-invalid" : ""}`}
        />
      </div>
      <h3>Your contact info</h3>
      <div className={styles.smallInput}>
        <div className={styles.inputWrapper}>
          <LabelInput
            aria-label="User name"
            placeholder="Name"
            {...register("userName")}
            className={`${errors.userName ? "is-danger" : ""}`}
          />
          <div className={`has-text-danger ${styles.errors}`}>
            {errors.userName?.message}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <LabelInput
            aria-label="User email"
            placeholder="Email address"
            type="text"
            {...register("email")}
            className={`${errors.email ? "is-danger" : ""}`}
          />
          <div className={`has-text-danger ${styles.errors}`}>
            {errors.email?.message}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <LabelInput
            aria-label="User contact number"
            placeholder="Contact number"
          />
          <div className={styles.optionalInput}>* Number is optional</div>
        </div>
      </div>
      <LabelInput aria-label="User Location" placeholder="Location" />
      <LabelInput aria-label="User Age" placeholder="Age" />
      <Checkbox
        aria-label="checkbox to accept the terms conditions"
        handleChange={handleChange}
        type="checkbox"
        checked={checked}
        label="I accept the"
        {...register("acceptTerms")}
        className={`${errors.acceptTerms ? "is-danger" : ""}`}
      />
      <div className={`has-text-danger ${styles.errors}`}>
        {errors.acceptTerms?.message}
      </div>
      <Button
        type="submit"
        aria-label="submit button"
        role="button"
        label="Submit"
      />
    </form>
  );
};
