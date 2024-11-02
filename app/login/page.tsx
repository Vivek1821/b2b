"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import { Button } from "@nextui-org/button";

const Login = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="flex flex-col gap-4 items-center justify-around w-80 h-4/5 bg-zinc-950 border border-default-200 rounded-xl shadow-lg dark:shadow-neutral-500 p-4">
        <p className="text-xl font-semibold">B2B Cabs</p>
        <div className="flex flex-col gap-4 w-full">
          <Input
            type="email"
            variant="bordered"
            name="email"
            label="Enter Email"
            labelPlacement="outside"
            placeholder="Enter email"
            onChange={formik.handleChange}
          />
          <Input
            type="password"
            variant="bordered"
            name="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter password"
            onChange={formik.handleChange}
          />
        </div>

        <Button onClick={() => formik.handleSubmit()}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
