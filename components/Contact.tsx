"use client";
import { useRouter } from "next/navigation";
import { useRef, useState, forwardRef, ReactElement, ForwardedRef, LegacyRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";

const QUOTE_ENDPOINT = "https://usebasin.com/f/fb3436a29ba5";

const Input = forwardRef(function Input<T>(props: { errors: any | null, required?: boolean, label: string | ReactElement, as?: string, name: string }, ref: any) {
  const errorHelper = (field_name) =>
    props.errors[field_name] && (
      <span className="block mt-1 font-bold text-xs text-red-700">
        {props.errors[field_name].message == ""
          ? props.errors[field_name].type == "required"
            ? "Field is required"
            : ""
          : props.errors[field_name].message}
      </span>
    );
  return (
    <div className="flex flex-col gap-1">
      <label>
        {props.label} {props.required && <span className="text-red-800">*</span>}
      </label>
      {props.as == "textarea" ? (
        <textarea
          {...props}
          rows={6}
          // @ts-ignore
          ref={ref}
          className={[
            "border border-solid dark:border-opacity-20 dark:hover:border-opacity-50 focus:border-yellow-300 focus:border-opacity-50 focus:border focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:ring-offset-transparent focus:ring-offset-0 px-3 py-3 rounded-xl dark:bg-gray-800 transition-all duration-150 ease-in-out",
            props.errors[props.name] ? "border-red-400" : "border-gray-300 ",
          ].join(" ")}
        />
      ) : (
        <input
          {...props}
          // @ts-ignore
          ref={ref}
          className={[
            "border border-solid dark:border-opacity-20 dark:hover:border-opacity-50 focus:border-yellow-300 focus:border-opacity-50 focus:border focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:ring-offset-transparent focus:ring-offset- px-3 py-3 rounded-xl dark:bg-gray-800 transition-all duration-150 ease-in-out",
            props.errors[props.name] ? "border-red-400" : "border-gray-300 ",
          ].join(" ")}
        />
      )}
      {errorHelper(props.name)}
    </div>
  );
});

export default function Contact({
  title = "Shoot your shoot!",
  event = "schedule-session",
}) {
  const router = useRouter();
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ shouldFocusError: true });
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(false);
  const [networkRequestComplete, updateRequestStatus] = useState(true);

  function onSubmit(values) {
    updateRequestStatus(false)
    fetch(QUOTE_ENDPOINT, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: new FormData(formRef.current), // body data type must match "Content-Type" header
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const { success } = data;
        if (success) {
          try {
            // @ts-ignore
            fbq('track', 'Contact');
          } catch (e) {
            console.log('facebook pixel tracker blocked')
          }
          setFormSubmissionStatus(true);
          router.push("/success");
          try {
            // @ts-ignore
            splitbee.track("Lead Captured", { email: values.email });
          } catch (e) {
            console.log('analytics event log failed')
          }
        }
        updateRequestStatus(true);
        return false;
      })
      .catch((e) => {
        // display error to get rid of false positive
        setFormSubmissionStatus(true);
        router.push("/success");
        console.log(e);
        // @ts-ignore
        splitbee.track("Lead Capture Failure", {
          email: values.email,
          error: e,
        });
        updateRequestStatus(true);
        return false;
      });
  }

  return (
    <div>
      <h2 className="font-bold text-2xl mb-6">{title}</h2>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        action={QUOTE_ENDPOINT}
        method="POST"
        // @ts-ignore
        ref={formRef}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register("firstName", { required: true })}
            required={true}
            errors={errors}
          />
          <Input
            label="Last Name"
            {...register("lastName", { required: false })}
            errors={errors}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Email"
            required={true}
            {...register("email", { required: true })}
            errors={errors}
          />
          <Input
            label="Phone"
            required={true}
            {...register("phone", { required: true })}
            errors={errors}
          />
        </div>
        <Input
          label="Message"
          {...register("message", { required: false })}
          errors={errors}
          as={"textarea"}
        />
        <Button
          type="submit"
          spinner={networkRequestComplete === false}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
