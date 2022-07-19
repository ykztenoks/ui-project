import style from './style.module.css';
import buttonImg from '../../assets/images/imgproject/add-button.png';
import users from '../users';
import { Toaster, toast } from 'react-hot-toast';

export function ProxVacinas() {
	function handleClick() {
		toast.success('Adicionado!');
	}

	return (
		<>
			<div>
				<Toaster />
			</div>
			<h2>Próximas Vacinas</h2>
			<div className={style.container}>
				{users.map((currentUser) => {
					return (
						<div className={style.card} key={currentUser.id}>
							<div className={style.insideCard}>
								<div
									className={style.user}
									style={{ backgroundColor: currentUser.color }}
								>
									<div className={style.name}>{currentUser.name}</div>
								</div>
								<div className={style.vacineContainer}>
									<div className={style.vacine}>
										{`${currentUser.dosage}ª Dose ${currentUser.type}`}
									</div>
									<div className={style.date}>{currentUser.date}</div>
								</div>
								<img
									className={style.img}
									src={buttonImg}
									alt='button Img'
									onClick={handleClick}
								></img>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
