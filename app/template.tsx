"use client";
import { useEffect, useRef } from "react";
import NProgressBar, { NextNProgressProps } from "nextjs-progressbar";
import NProgress from "nprogress";
import { useSearchParams, usePathname } from "next/navigation";

export default function Template({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const nprogressTimer: any = useRef();
  // // initial run
  // useEffect(() => {
  //   if (nprogressTimer.current) {
  //     console.log("template: hiding the loader");
  //     // instantly clears out because the event does not run, so need to have a link click
  //     NProgress.done();
  //     clearTimeout(nprogressTimer.current);
  //   }
  //   return () => {
  //     console.log("template: showing the loader");
  //     // NProgress.start();
  //     // WILL NOT RUN BECAUSE ITS UNMOUNTED WHEN CONTENT GETS LOADED
  //     nprogressTimer.current = setTimeout(NProgress.start, 100);
  //   };
  // }, [pathname, searchParams]);
  return children;
}
