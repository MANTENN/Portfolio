export default function Sidebar({
  projects = { items: [] },
  skills = { items: [] },
  children,
}: any) {
  return (
    <div className="col-span-9 sm:col-span-9 md:col-span-2 md:order-1">
      {children}

    </div>
  );
}
