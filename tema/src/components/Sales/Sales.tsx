import React, { FC } from 'react';
import './Sales.scss';

interface ISalesProps {
	sales: {}[];
}

const Sales: FC<ISalesProps> = ({ sales }) => {
	return (
		<div className="sales">
			<div className="sales__container">
				<div className="sales__heading">Акции</div>
				<div className="sales__box">
					{sales.map((sale) => {
						return <></>;
					})}
				</div>
			</div>
		</div>
	);
};

export default Sales;
