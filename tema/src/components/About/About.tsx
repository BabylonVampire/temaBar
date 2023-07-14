import './About.scss';
import { FC } from 'react';

interface IAboutProps {
	heading: string;
	text: string;
	address: string;
	contacts: string;
	workTime: string;
}

const About: FC<IAboutProps> = ({
	heading,
	text,
	address,
	contacts,
	workTime,
}) => {
	return (
		<section className="about" id="about">
			<div className="about-container">
				<div className="about__right">
					<div className="about__heading">
						ТЕМА БАР
						<br />В МОСКВЕ
					</div>
					<div className="about__description">
						<div className="about__description__address">
							<p className="address__bold">Адресс: </p>
							<address className="address__text">
								{address}
							</address>
						</div>
						<div className="about__description__contacts">
							<p className="contacts__bold">Контакты: </p>
							<div className="contacts__text">{contacts}</div>
						</div>
						<div className="about__description__workTime">
							<p className="workTime__bold">Время работы: </p>
							<time className="workTime__text">{workTime}</time>
						</div>
					</div>
				</div>
				<div className="about__left">
					<article className="about__text">{text}</article>
				</div>
			</div>
		</section>
	);
};

export default About;
