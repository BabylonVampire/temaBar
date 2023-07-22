import { FC } from 'react';
import './Sale.scss';

interface ISaleInterface {
	pic: string;
	name: string;
	description: string;
	topic: string;
}

const Sale: FC<ISaleInterface> = ({ pic, name, description, topic }) => {
	console.log(pic);
	return (
		<div className="sale">
			<div className="sale-container">
				<div
					className="sale__pic"
					style={{ backgroundImage: `url(${pic})` }}
				/>
				<div className="sale__name">{name}</div>
				<div className="sale__description">{description}</div>
				<div className="sale__topic">{topic}</div>
			</div>
		</div>
	);
};

export default Sale;
