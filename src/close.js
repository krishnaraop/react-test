import "./close.css";

const Close = () => {
  let classA = "iflex";
  const globalize = () => {
    return (classA = "iflex2");
  };
  return (
    <>
      <div className={classA}>
        <button>increment</button>
        <button>count</button>
        <button>reset</button>
        <button onClick={globalize(() => (classA = "iflex2"))}>
          globalize
        </button>
      </div>
    </>
  );
};

export default Close;
