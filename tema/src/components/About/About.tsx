import './About.scss';
import React, { FC } from 'react';

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
		<div className="about">
			<div className="about__container">
				<div className="about__right">
					<div className="about__heading">
						ТЕМА БАР
						<br />В МОСКВЕ
					</div>
					<div className="about__description">
						<div className="about__description__address">
							<div className="address__bold">Адресс: </div>
							<div className="address__text">{address}</div>
						</div>
						<div className="about__description__contacts">
							<div className="contacts__bold">Контакты: </div>
							<div className="contacts__text">{contacts}</div>
						</div>
						<div className="about__description__workTime">
							<div className="workTime__bold">Время работы: </div>
							<div className="workTime__text">{workTime}</div>
						</div>
					</div>
				</div>
				<div className="about__left">
					<div className="about__text">{text}</div>
				</div>
			</div>
		</div>
	);
};

export default About;
