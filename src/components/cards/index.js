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
}
