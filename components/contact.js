import { useRouter } from "next/router";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";

const QUOTE_ENDPOINT = "https://usebasin.com/f/fb3436a29ba5";

const Input = forwardRef((props) => {
  return (
    <div className="flex flex-col gap-1">
      <label>
        {props.label} <span className="text-red-800">*</span>
      </label>
      <input
        {...props}
        className="border border-solid border-gray-300 focus:border-blue-300 px-3 py-2 rounded-lg"
      />
    </div>
  );
});

export default function Contact({ event = "schedule-session" }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(false);
  const [networkRequestComplete, updateRequestStatus] = useState(true);
  const onSubmit = (data) => {
    fetch(QUOTE_ENDPOINT, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: new FormData(formRef.current), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
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
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-3">Send Your Shot!</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register("firstName", { required: true })}
          />
          <Input
            label="Last Name"
            {...register("lastName", { required: true })}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Email" {...register("email", { required: true })} />
          <Input label="Phone" {...register("phone", { required: true })} />
        </div>
        <Input
          label="Message"
          {...register("message", { required: true })}
          as={"textarea"}
        />
        <button
          className="bg-yellow-300 text-white p-3 rounded-lg text-green-800 font-bold flex-auto flex-grow-0"
          type="submit"
          disabled={!networkRequestComplete}
        >
          Send
        </button>
        {formSubmissionStatus && (
          <p className="bg-indigo-100 text-blue p-2 mt-4 m-1">
            Your message has been recieved. I will reach out to you shortly.
          </p>
        )}
      </form>
    </div>
  );
}
