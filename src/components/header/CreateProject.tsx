import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { H3 } from "../ui/H3";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import DropzoneComp from "./DropzoneComp";
import { api } from "~/utils/api";
import AddRole from "./AddRole";

function CreateProject() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const initialValues = {
    image: "",
    name: "",
    description: "",
  };

  const createProjectMutation = api.design.createProject.useMutation();
  const interiorIdeas = api.design.getProjects.useQuery();
  const role = api.design.returnUserRole.useQuery();

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
  });

  return (
    <>
      <Sheet onOpenChange={setOpen} open={open}>
        <SheetTrigger asChild>
          <Button onClick={() => setOpen(true)} className="w-full lg:w-fit">
            Share Designer Idea
          </Button>
        </SheetTrigger>
        <SheetContent
          position="bottom"
          size="xl"
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full">
            {role.data?.role === "pro" ? (
              <>
                <SheetHeader className="mx-auto mb-10 mt-6 w-full max-w-3xl">
                  <SheetTitle>
                    <H3 className="text-2xl capitalize md:text-4xl">
                      Share what you&lsquo;ve been working on?
                    </H3>
                  </SheetTitle>
                </SheetHeader>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { resetForm }) => {
                    await createProjectMutation.mutateAsync(values);
                    resetForm();
                    await interiorIdeas.refetch();
                    setOpen(false);
                  }}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form>
                      {step === 3 && (
                        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4">
                          <Field name="image" component={DropzoneComp} />
                          <div className="grid w-full grid-cols-2 gap-4">
                            <Button
                              variant="outline"
                              onClick={handlePrev}
                              className="w-full"
                            >
                              Back
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                              Submit
                            </Button>
                          </div>
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="error"
                          />
                        </div>
                      )}

                      {step === 1 && (
                        <div className="mx-auto mt-6 w-full max-w-3xl space-y-4">
                          <Field
                            name="name"
                            as={Input}
                            placeholder="Give me a name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                          />
                          <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
                            <Button
                              variant="outline"
                              onClick={handlePrev}
                              className="w-full"
                              disabled={true}
                            >
                              Back
                            </Button>
                            <Button
                              onClick={handleNext}
                              className="w-full"
                              disabled={isValid ? true : false}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="mx-auto mt-6 w-full max-w-3xl space-y-4">
                          <Field
                            name="description"
                            as={Textarea}
                            placeholder="Write what went into this project or add details you will love to mention"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="error"
                          />
                          <div className="grid w-full grid-cols-2 gap-4">
                            <Button
                              variant="outline"
                              onClick={handlePrev}
                              className="w-full"
                            >
                              Back
                            </Button>
                            <Button
                              onClick={handleNext}
                              className="w-full"
                              disabled={!isValid || isSubmitting}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      )}
                    </Form>
                  )}
                </Formik>
              </>
            ) : (
              <AddRole setopen={setOpen} />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default CreateProject;
