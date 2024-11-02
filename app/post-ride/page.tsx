"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import { Button } from "@nextui-org/button";

const PostRide = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-4 gap-4">
      <Input
        size="md"
        variant="bordered"
        name="name"
        label="Name"
        labelPlacement="outside"
        placeholder="Enter name"
        onChange={formik.handleChange}
      />

      <Input
        variant="bordered"
        size="md"
        name="ContactNumber"
        label="Contact Number"
        placeholder="Enter contact number"
        labelPlacement="outside"
        onChange={formik.handleChange}
      />

      <Input
        size="md"
        variant="bordered"
        name="From"
        label="Source"
        labelPlacement="outside"
        placeholder="Enter source place"
        onChange={formik.handleChange}
      />

      <Input
        size="md"
        variant="bordered"
        name="To"
        label="Destination"
        labelPlacement="outside"
        placeholder="Enter destination place"
        onChange={formik.handleChange}
      />

      <Input
        type="date"
        size="md"
        variant="bordered"
        name="date"
        label="Trip Date"
        labelPlacement="outside"
        placeholder="Enter trip date"
        onChange={formik.handleChange}
      />

      <Input
        size="md"
        variant="bordered"
        name="cost"
        label="Trip cost"
        labelPlacement="outside"
        placeholder="Enter trip cost"
        onChange={formik.handleChange}
      />

      <Input
        size="md"
        variant="bordered"
        name="commission"
        label="commission"
        labelPlacement="outside"
        placeholder="Enter trip commission"
        onChange={formik.handleChange}
      />

      <Button type="submit" size="md" className="col-start-4 row-start-3">
        Next
      </Button>
    </form>
  );
};

export default PostRide;
