import './Main.scss';
import About from '../About/About';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Sales from '../Sales/Sales';

const Main = () => {
	return (
		<div className="Main">
			<Header
				anchors={[
					{ link: '', text: 'Акции' },
					{ link: '', text: 'Акции' },
					{ link: '', text: 'Акции' },
				]}
				contacts={['+7 (968) 624-27-20', '+7 (495) 824-27-20']}
				metro="Чистые пруды"
				address="Потаповский переулок 5/2"
			/>
			<Hero />
			<About
				heading="ТЕМА БАР В МОСКВЕ"
				text="ТЕМА-БАР - это коктейльный бар на Потаповском переулке в 3 минутах от м. Чистые пруды, где с четверга по воскресенье проходят вечеринки в стиле open format, DJ и танцами на барной стойке. На нижнем этаже есть зал с КАРАОКЕ, который работает каждый день с 20:00. Since 2006"
				address="Потаповский пер. д.5 стр.2., Москва"
				contacts="+7 (495) 624-27-20, +7 (968) 824-27-20"
				workTime=" ПН-ЧТ 18:00-06:00; ПТ-ВС 18:00-09:00"
			/>
			<Sales sales={[]} />
		</div>
	);
};

export default Main;
