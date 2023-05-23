import { Field, Form, Formik } from "formik";
import React from "react";
import { Input } from "../ui/input";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { H3 } from "../ui/H3";
import { P } from "../ui/P";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import Professions from "./Professions";
import { LocationCX } from "./Location";
import { api } from "~/utils/api";

interface Props {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddRole({ setopen }: Props) {
  const initialValues = {
    username: "",
    profession: "",
    location: "",
  };

  const updateRoleMutation = api.design.updateUserRole.useMutation();

  return (
    <>
      <SheetHeader className="mx-auto mb-10 mt-6 w-full max-w-3xl">
        <SheetTitle>
          <H3 className="text-4xl">Share what you&lsquo;ve been working on?</H3>
        </SheetTitle>
        <SheetDescription>
          <P>Add role</P>
        </SheetDescription>
      </SheetHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          await updateRoleMutation.mutateAsync(values);
          resetForm();
          setopen(false);
        }}
      >
        {() => (
          <Form>
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4">
              <Field name="username" as={Input} placeholder="Your username" />
              <Field
                name="profession"
                as={Professions}
                placeholder="You're a?"
              />
              <Field
                name="location"
                as={LocationCX}
                placeholder="You live in?"
              />

              <div className="grid w-full  grid-cols-2 gap-4">
                <Link
                  href="/"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Return Home
                </Link>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddRole;
