import { ProxVacinas } from "../../components/proxVacinas";
import { CardsImg } from "../../components/cards";
import { NavBar } from "../../components/navbar/index";
import { Progress } from "../../components/progress";
import { Footer } from "../../components/footer";
import style from "./styles.module.css";
export function Home() {
  return (
    <div className={style.homepage}>
      <NavBar />
      <Progress />
      <ProxVacinas />
      <CardsImg />
      <Footer />
    </div>
  );
}
