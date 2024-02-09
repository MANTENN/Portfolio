'use client'
import * as Ariakit from "@ariakit/react";
import { useDialogStore } from "@ariakit/react";
import Contact from "../Contact";

export function CallToAction({ event = "get-started", text = "Get Started", className = "bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-xl inline-block focus:ring-4 focus:ring-yellow-200 outline-none transition-all duration-150 ease-in-out" }) {
  const dialog = useDialogStore({ animated: true });


  return (
    <>
      <Ariakit.Button onClick={dialog.show} className={className}>
        {text}
      </Ariakit.Button>
      <Ariakit.Dialog
        store={dialog}
        className="dialog fixed z-50 m-auto bg-white dark:bg-gray-800 bg-opacity-80 text-black dark:text-white rounded-2xl p-8 shadow-md z-1 rounded-tl-none rounded-tr-none md:rounded-t-2xl max-w-xl justify-self-center"
        backdrop={<div className="backdrop top-0 left-0 w-full h-full overflow-auto bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-50 backdrop-blur-md backdrop-filter bg-white bg-opacity-30" />}
      >
        <Ariakit.DialogHeading className="text-2xl font-bold">
          Enter your contact details
        </Ariakit.DialogHeading>
        <Ariakit.DialogDescription className="mt-1">
          I will shortly reach out to you for more information.
        </Ariakit.DialogDescription>
        <Contact title={null} event={event} />
      </Ariakit.Dialog>
    </>
  )
}