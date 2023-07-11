export function H2(props) {
  return (
    <h2 {...props} className="text-2xl font-bold mb-2">
      {props.children}
    </h2>
  );
}
