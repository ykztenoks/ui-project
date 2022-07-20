import { ProxVacinas } from './components/proxVacinas';

import { NavBar } from './components/navbar/index';
import { Progress } from './components/progress';
import { Footer } from './components/footer';
import { CardsImg } from './components/cards';

function App() {
	return (
		<div className="App">
			<Progress />
			<ProxVacinas />
			<CardsImg />
		</div>
	);
}

export default App;
