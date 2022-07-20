import "./styles.modules.css";
export function ProgressBar({ props }) {
  return (
    <>
      <div id="mainProgressBar">
        <div>
          <img src={props.avatar} alt="avatar"></img>
        </div>
        <div id="name">
          <p>{props.name}</p>
        </div>

        <div id="progBar">
          <div
            id="percentBar"
            style={{ width: props.progress, backgroundColor: props.color }}
          ></div>
          <div id="percentText">{props.progress}</div>
        </div>
      </div>
    </>
  );
}
