"use client";

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../styles/login.scss";
import { useRouter } from "next/navigation";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const router = useRouter();

  return (
    <div className="login">
      <h1>Edit Form</h1>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={() => router.push("/dashboard")}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input  />
        </Form.Item>

        <Form.Item
          label="Roll"
          name="roll"
          rules={[
            {
              required: true,
              message: "Please input your rollno.!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[
            {
              required: true,
              message: "Please input your subject",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
