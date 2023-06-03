"use client";
import { useRouter } from "next/navigation";
import { useRef, useState, forwardRef } from "react";
import { useForm } from "react-hook-form";

const QUOTE_ENDPOINT = "https://usebasin.com/f/fb3436a29ba5";

const Input = forwardRef(function Input(props, ref) {
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
        {props.label} <span className="text-red-800">*</span>
      </label>
      {props.as == "textarea" ? (
        <textarea
          {...props}
          rows="6"
          ref={ref}
          errors={null}
          className={[
            "border border-solid focus:border-blue-300 px-3 py-2 rounded-lg",
            props.errors[props.name] ? "border-red-400" : "border-gray-300 ",
          ].join(" ")}
        />
      ) : (
        <input
          {...props}
          ref={ref}
          errors={null}
          className={[
            "border border-solid focus:border-yellow-300 px-3 py-2 rounded-lg",
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
    fetch(QUOTE_ENDPOINT, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: new FormData(formRef.current), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const { success } = data;
        if (success) {
          setFormSubmissionStatus(true);
          router.push({ pathname: "/success" });
          splitbee.track("Lead Captured", { email: values.email });
        }
        updateRequestStatus(true);
        return false;
      })
      .catch((e) => {
        setFormSubmissionStatus(true);
        router.push({ pathname: "/success" });
        console.log(e);
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
        ref={formRef}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register("firstName", { required: true })}
            errors={errors}
          />
          <Input
            label="Last Name"
            {...register("lastName", { required: true })}
            errors={errors}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Email"
            {...register("email", { required: true })}
            errors={errors}
          />
          <Input
            label="Phone"
            {...register("phone", { required: true })}
            errors={errors}
          />
        </div>
        <Input
          label="Message"
          {...register("message", { required: true })}
          errors={errors}
          as={"textarea"}
        />
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-white p-3 rounded-lg text-green-800 hover:text-black focus:bg-green-800 focus:text-white disabled:pulse-animate font-bold flex-auto flex-grow-0"
          type="submit"
          disabled={!networkRequestComplete}
        >
          Send
        </button>
        {formSubmissionStatus && (
          <p className="bg-blue-600 text-blue p-4 mt-4 m-1 rounded-xl">
            Your message has been recieved. I will reach out to you shortly.
          </p>
        )}
      </form>
    </div>
  );
}
