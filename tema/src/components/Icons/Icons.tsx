import { FC } from 'react';
import './Icons.scss';

interface IIconsProps {}

const Icons: FC<IIconsProps> = ({}) => {
	return (
		<div className="icons">
			<div className="icons-container">
				<div className="social instagram">
					<a href="#" target="_blank">
						<i className="fa fa-instagram fa-2x"></i>
					</a>
				</div>
				<div className="social vk">
					<a href="#" target="_blank">
						<i className="fa fa-vk fa-2x"></i>
					</a>
				</div>
				<div className="social telegram">
					<a href="#" target="_blank">
						<i className="fa fa-paper-plane fa-2x"></i>
					</a>
				</div>
				<div className="social whatsapp">
					<a href="#" target="_blank">
						<i className="fa fa-whatsapp fa-2x"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Icons;
