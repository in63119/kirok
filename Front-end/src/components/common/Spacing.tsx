import React from 'react';

const Spacing: React.FC<{ size: number }> = ({ size }) => {
	return <div style={{ height: `${size}px` }}></div>;
};

export default Spacing;
