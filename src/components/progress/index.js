import "./style.css";
import users from "../users";
import { ProgressBar } from "../progressBar";

export function Progress() {
  return (
    <>
      <div id="mainProgress">
        <div id="titleProgress">
          <h1>Olá Marisa,</h1>
          <p id="progressoAtual">Progresso Atual</p>
        </div>
        {users.map((currentUser) => {
          return <ProgressBar props={currentUser} />;
        })}
      </div>
    </>
  );
}
