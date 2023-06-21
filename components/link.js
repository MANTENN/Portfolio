"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import NProgress from "nprogress";
import { useSearchParams, usePathname } from "next/navigation";

export default function ProgressLink(props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const linkRef = useRef();
  const nprogressTimer = useRef();
  // becomes tricky for same-path pages
  // and loading.tsx files
  useEffect(() => {
    const routeChangeStart = (e) => {
      nprogressTimer.current = setTimeout(NProgress.start, 100);
    };
    linkRef.current.addEventListener("click", routeChangeStart);
    // will not rerun on same path
    // onclick check for same pathname
    return () => {
      if (nprogressTimer.current) {
        clearTimeout(nprogressTimer.current);
      }
      NProgress.done();
      if (linkRef.current) {
        linkRef.current.removeEventListener("click", routeChangeStart);
      }
    };
  }, [pathname, searchParams]);
  return (
    <Link ref={linkRef} {...props}>
      {props.children}
    </Link>
  );
}
