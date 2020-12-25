import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Form, Button } from "antd";
import { connect } from "react-redux";

import { createStream } from "../../actions";

const renderInput = ({ input, label, meta }) => {
  const isError = ({ error, touched }) => {
    return error && touched;
  };
  return (
    <Form.Item
      label={label}
      help={isError(meta) && meta.error}
      validateStatus={isError(meta) && "error"}
    >
      <Input {...input} autoComplete="off" />
    </Form.Item>
  );
};

const validate = ({ title, description }) => {
  const errors = {};

  if (!title) {
    errors.title = "You must enter a title";
  }

  if (!description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const StreamCreate = ({ handleSubmit, createStream }) => {
  const onSubmit = formValue => {
    createStream(formValue);
  };
  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      name="basic"
    >
      <Field name="title" component={renderInput} label={"Enter Title"} />
      <Field
        name="description"
        component={renderInput}
        label={"Enter Description"}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
