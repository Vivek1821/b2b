"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useFormik } from "formik";

const SignUp = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 items-center justify-center w-5/6 h-full border border-default-200 rounded-2xl p-4">
        <section className="w-5/6 h-[99%] border border-default-200 rounded-2xl bg-default-50"></section>
        <section className="">
          <>
            <div className="text-4xl font-semibold">Create an account</div>
            <div className="flex gap-2">
              <p className="">Already have an account?</p>
              <p
                onClick={() => router.push("/login")}
                className="text-blue-100 cursor-pointer"
              >
                Log in
              </p>
            </div>
          </>
          <form
            onClick={formik.handleSubmit}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="flex gap-4">
              <Input
                size="sm"
                variant="bordered"
                name="firstName"
                label="First Name"
                labelPlacement="outside"
                placeholder="Enter first name"
                onChange={formik.handleChange}
              />

              <Input
                size="sm"
                variant="bordered"
                name="LastName"
                label="Last Name"
                labelPlacement="outside"
                placeholder="Enter last name"
                onChange={formik.handleChange}
              />
            </div>

            <Input
              size="sm"
              variant="bordered"
              name="contactNumber"
              label="Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              onChange={formik.handleChange}
            />

            <Input
              type="email"
              size="sm"
              variant="bordered"
              name="email"
              label="Email"
              placeholder="Enter email"
              labelPlacement="outside"
              onChange={formik.handleChange}
            />

            <Input
              size="sm"
              variant="bordered"
              name="panNumber"
              label="PAN Number"
              labelPlacement="outside"
              placeholder="Enter PAN number"
              onChange={formik.handleChange}
            />

            <Checkbox
              name="termsAndConditions"
              defaultSelected
              onChange={formik.handleChange}
            >
              <div className="flex items-center gap-2">
                <p>I agree to</p>
                <p
                  onClick={() => router.push("/terms")}
                  className="underline hover:text-sky-500"
                >
                  terms and conditions
                </p>
              </div>
            </Checkbox>

            <Button size="sm" type="submit">
              Sign up
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
