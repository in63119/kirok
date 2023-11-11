import React from 'react';
import * as Styled from './index.styled';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';

interface LayoutProps {
	hasGoback?: boolean;
	title: {
		text: string;
	};
	subTitle?: {
		text: string;
		color?: string;
	};
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, hasGoback = true, title, subTitle }) => {
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return (
		<>
			<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
			<Styled.ParentLayout>
				<Styled.Title>{title.text}</Styled.Title>
				{subTitle && <Styled.SubTitle color={subTitle.color ?? '#696969'}>{subTitle.text}</Styled.SubTitle>}
				<Styled.ChildLayout>{children}</Styled.ChildLayout>
			</Styled.ParentLayout>
		</>
	);
};

export default Layout;
