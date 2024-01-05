'use client'
import * as Ariakit from "@ariakit/react";
import { useState } from "react";
import Contact from "../contact";

export function CallToAction({ event = "get-started", text = "Get Started", className = "bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-xl inline-block focus:ring-4 focus:ring-yellow-200 outline-none" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Ariakit.Button onClick={() => setOpen(true)} className={className}>
        {text}
      </Ariakit.Button>
      <Ariakit.Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed z-[10000] top-0 left-0 items-center justify-center w-full h-full overflow-auto bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-50 backdrop-blur-md backdrop-filter"
      >
        <Ariakit.Button onClick={() => setOpen(false)} className="fixed bg-white bg-opacity-30 w-full h-full" />
        <div className="relative flex flex-col bg-gray-800 bg-opacity-80 text-white rounded-2xl p-8 shadow-md z-1 rounded-tl-none rounded-tr-none md:m-10  max-w-xl justify-self-center">
          <Ariakit.DialogHeading className="text-2xl font-bold">
            Enter your contact details
          </Ariakit.DialogHeading>
          <Ariakit.DialogDescription className="mt-1">
            I will shortly reach out to you for more information.
          </Ariakit.DialogDescription>
          <Contact title={null} event={event} />
          <div>
            <Ariakit.DialogDismiss className="px-4 py-3 text-center mt-4 w-full md:mt-0">Cancel</Ariakit.DialogDismiss>
          </div>
        </div>
      </Ariakit.Dialog>
    </>
  )
}