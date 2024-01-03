import { ReactElement, ReactHTMLElement } from "react";

export function Section({ title, description, children }: { title: string, description: string, children?: ReactElement[] }) {
  return <div>
    <div className="flex flex-row gap-4 items-center mb-4">
      <h1 className="font-bold text-4xl mb-0">{title}</h1>
    </div>
    <p className="text-lg leading-8">{description}</p>
    {children}
  </div>
}