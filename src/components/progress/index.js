import "./style.css";
import users from "../users/index";
import { ProgressBar } from "../progressBar";

export function Progress() {
  return (
    <>
      <div id="mainProgress">
        <div id="titleProgress">
          <h1>Olá {users[0].name},</h1>
          <p id="progressoAtual">Progresso Atual</p>
        </div>
        {users.map((currentUser) => {
          return (
            <div id="cardProgress">
              <ProgressBar key={currentUser.id} props={currentUser} />
            </div>
          );
        })}
      </div>
    </>
  );
}
