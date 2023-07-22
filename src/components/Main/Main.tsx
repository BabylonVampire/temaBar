import './Main.scss';
import About from '../About/About';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Sales from '../Sales/Sales';
import Footer from '../Footer/Footer';
import BarMenu from '../Menu/Menu';
import Contacts from '../Contacts/Contacts';
import * as data from '../../data.ts';
import OrderButton from '../OrderButton/OrderButton.tsx';

const Main = () => {
	return (
		<main className="Main">
			<Header
				anchors={data.anchors}
				contacts={data.contacts}
				metro={data.metro}
				address={data.address}
			/>
			<Hero />
			<OrderButton />
			<About
				address={data.address}
				text={data.about.text}
				contacts={data.about.contacts}
				workTime={data.about.workTime}
			/>
			<Sales sales={data.sales} />
			<OrderButton />
			<BarMenu
				heading={data.barMenu.heading}
				description={data.barMenu.description}
			/>
			<Contacts address={data.address} contacts={data.contacts} />
			<OrderButton />
			<Footer
				contacts={data.contacts}
				address={data.address}
				copyrights={data.copyrights}
			/>
		</main>
	);
};

export default Main;
