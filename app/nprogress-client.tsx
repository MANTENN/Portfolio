"use client";
import NProgressBar, { NextNProgressProps } from "nextjs-progressbar";

export default function ClientNProgressBar({ ...props }: NextNProgressProps) {
  return <NProgressBar {...props} />;
}
