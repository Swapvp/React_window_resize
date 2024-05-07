import WindowResize from "./WindowResize";

export default function WindowResizeTest() {
  const windowSize = WindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1> Window resize </h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
