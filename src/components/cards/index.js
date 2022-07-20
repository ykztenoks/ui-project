<<<<<<< HEAD
import hospital from '../../assets/images/imgproject/icon-hospital.png';
export function Cards() {
	return (
		<>
			<div
				className="card"
				style={{
					width: '18rem',
					borderRadius: '12px',
					backgroundColor: '#FCDAD9',
				}}
			>
				<img className="card-img-top" src={hospital} alt="Card cap" />
				<div className="card-body">
					<p className="card-text">UBS</p>
				</div>
			</div>
		</>
	);
=======
import hospital from "../..//assets/images/imgproject/icon-hospital.png";
import heart from "../..//assets/images/imgproject/health-icon.png";
import needle from "../../assets/images/imgproject/injecao-icon.png";
import family from "../../assets/images/imgproject/people-icon.png";
import style from "./style.module.css";
export function CardsImg() {
  return (
    <div className={style.scrollingWrapper}>
      <div className={style.card} style={{ backgroundColor: "#FCDAD9" }}>
        <div className={style.out}>
          <img className={style.img} src={hospital} alt="ubs" />
          <div className="card-body">
            <p className="card-text">UBS proximas</p>
          </div>
        </div>
      </div>

      <div className={style.card} style={{ backgroundColor: "#F9F0C2" }}>
        <div className={style.out}>
          <img className={style.img} src={heart} alt="campanhas" />
          <div className="card-body">
            <p className="card-text">Campanhas</p>
          </div>
        </div>
      </div>

      <div className={style.card} style={{ backgroundColor: "#96BEDA" }}>
        <div className={style.out}>
          <img className={style.img} src={needle} alt="vacinas" />
          <div className="card-body">
            <p className="card-text">Sobre Vacinas</p>
          </div>
        </div>
      </div>

      <div className={style.card} style={{ backgroundColor: "#FFBEBD" }}>
        <div className={style.out}>
          <img className={style.img} src={family} alt="faixa etaria" />
          <div className="card-body">
            <p className="card-text">Faixa etária</p>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 80d21e4f7bfe1bf481ffed1549e27f9ac5cee08f
}
