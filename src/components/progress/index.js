import "./styles.modules.css";
import users from "../users/index";
import { ProgressBar } from "../progressBar";

export function Progress() {
  return (
    <>
      <div id="mainProgress">
        <h1>Olá Marisa,</h1>
        <div id="titleProgress">
          <p id="progressoAtual">Progresso Atual</p>
        </div>
        {users.map((currentUser) => {
          return <ProgressBar key={currentUser.id} props={currentUser} />;
        })}
      </div>
    </>
  );
}
