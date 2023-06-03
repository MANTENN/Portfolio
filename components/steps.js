export function Steps({ data }) {
  return data.map(({ id, name }, i) => <div key={id || i}>{name}</div>);
}
