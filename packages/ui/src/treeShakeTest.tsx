export function TreeShakeTest(): JSX.Element {
  if (process.env.MOCK === "enabled") {
    return <div className="text-3xl">I'm the right one</div>;
  }
  return <div>Remove me</div>;
}
