import React from 'react';
import * as Styled from './index.styled';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Styled.ParentLayout>
			<Styled.ChildLayout>{children}</Styled.ChildLayout>
		</Styled.ParentLayout>
	);
};

export default Layout;
