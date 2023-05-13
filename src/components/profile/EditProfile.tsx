import React from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Formik, Form, Field } from "formik";
import { Input } from "../ui/input";
// type Props = {};

function EditProfile() {
  return (
    //  size="content"
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="w-full">
            Create
          </Button>
        </SheetTrigger>
        <SheetContent position="bottom" size="lg">
          <SheetHeader>
            <SheetTitle>Create a post</SheetTitle>
            <SheetDescription>Share your recent project</SheetDescription>
          </SheetHeader>
          <div className="">
            <Formik
              initialValues={{ title: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {() => (
                <Form>
                  <div className="mt-4 grid w-full max-w-md gap-2">
                    <Label htmlFor="project">Project Title</Label>
                    <Field
                      as={Input}
                      name="title"
                      placeholder="project title"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default EditProfile;
