import { FC } from 'react';
import './Menu.scss';

interface IMenuProps {
	heading: string;
	description: string;
}

const BarMenu: FC<IMenuProps> = ({ heading, description }) => {
	return (
		<section className="menu" id="menu">
			<div className="menu__image" />
			<div className="menu-container">
				<p className="menu-container__heading">{heading}</p>
				<p className="menu-container__description">{description}</p>
			</div>
		</section>
	);
};

export default BarMenu;
