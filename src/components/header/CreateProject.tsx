import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { H3 } from "../ui/H3";
import { P } from "../ui/P";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import DropzoneComp from "./DropzoneComp";
import { Formik, Form, Field } from "formik";
import { api } from "~/utils/api";
import AddRole from "./AddRole";

function CreateProject() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((e) => e + 1);
  };

  const handlePrev = () => {
    setStep((e) => e - 1);
  };

  const initialValues = {
    image: "",
    name: "",
    description: "",
  };

  const createProjectMutation = api.design.createProject.useMutation();
  const interiorIdeas = api.design.getProjects.useQuery();
  const role = api.design.returnUserRole.useQuery();
  const [open, setopen] = useState(false);

  return (
    <>
      <Sheet onOpenChange={setopen} open={open}>
        <SheetTrigger asChild>
          <Button onClick={() => setopen(true)} className=" w-full lg:w-fit ">
            Share Designer Idea
          </Button>
        </SheetTrigger>
        <SheetContent
          position="bottom"
          size="full"
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full">
            {role.data?.role === "pro" ? (
              <>
                <SheetHeader className="mx-auto mb-10 mt-6 w-full max-w-3xl">
                  <SheetTitle>
                    <H3 className="text-2xl">
                      Share what you&lsquo;ve been working on?
                    </H3>
                  </SheetTitle>
                </SheetHeader>
                <Formik
                  initialValues={initialValues}
                  onSubmit={async (values, { resetForm }) => {
                    await createProjectMutation.mutateAsync(values);
                    resetForm();
                    await interiorIdeas.refetch();
                    setopen(false);
                  }}
                >
                  {() => (
                    <Form>
                      <>
                        {step === 3 && (
                          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4">
                            <Field name="image" component={DropzoneComp} />
                            <div className="grid w-full  grid-cols-2 gap-4">
                              <Button
                                variant="outline"
                                onClick={handlePrev}
                                className="w-full"
                              >
                                Back
                              </Button>
                              <Button type="submit" className="w-full">
                                Submit
                              </Button>
                            </div>
                          </div>
                        )}
                      </>

                      <>
                        {step === 1 && (
                          <div className="mx-auto mt-6 w-full max-w-3xl space-y-4 ">
                            <Field
                              name="name"
                              as={Input}
                              placeholder="Give me a name"
                            />
                            <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
                              <Button
                                variant="outline"
                                onClick={handlePrev}
                                className="w-full"
                                disabled
                              >
                                Back
                              </Button>
                              <Button onClick={handleNext} className="w-full">
                                Next
                              </Button>
                            </div>
                          </div>
                        )}
                      </>

                      <>
                        {step === 2 && (
                          <div className="mx-auto mt-6 w-full max-w-3xl space-y-4 ">
                            <Field
                              name="description"
                              as={Textarea}
                              placeholder="Write what went into this project or add details you will love to mention"
                            />

                            <div className="grid w-full grid-cols-2 gap-4">
                              <Button
                                variant="outline"
                                onClick={handlePrev}
                                className="w-full"
                              >
                                Back
                              </Button>
                              <Button onClick={handleNext} className="w-full ">
                                Next
                              </Button>
                            </div>
                          </div>
                        )}
                      </>
                    </Form>
                  )}
                </Formik>
              </>
            ) : (
              <AddRole setopen={setopen} />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default CreateProject;
