import React, { PropsWithChildren } from 'react';
import * as Styled from './index.styled';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';

export interface LayoutProps {
	hasGoback?: boolean;
	hasSidePadding?: boolean;
	title?: {
		text: string;
	};
	subTitle?: {
		text: string;
		color?: string;
	};
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, hasGoback = true, hasSidePadding = true, title, subTitle }) => {
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return (
		<>
			{/* Header 는 반대로 여백 처리 */}
			<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
			<Styled.ParentLayout hasSidePadding={hasSidePadding}>
				{!hasSidePadding && (
					<Styled.SidePaddingInner>
						{title && <Styled.Title>{title.text}</Styled.Title>}
						{subTitle && <Styled.SubTitle color={subTitle.color ?? '#696969'}>{subTitle.text}</Styled.SubTitle>}
					</Styled.SidePaddingInner>
				)}

				{children}
				<Styled.MarginBottom />
			</Styled.ParentLayout>
		</>
	);
};

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Styled.FloatButtonWrapper>
			<Styled.FloatButtonInner>
				<Styled.GradientSection />
				<Styled.ButtonSection>
					<Styled.ButtonWrapper>{children}</Styled.ButtonWrapper>
				</Styled.ButtonSection>
			</Styled.FloatButtonInner>
		</Styled.FloatButtonWrapper>
	);
};

export default Object.assign(Layout, {
	Body: Styled.Body,
	CenterizedBody: Styled.CenterizedBody,
	SidePaddingBody: Styled.SidePaddingBody,
	SidePaddingInner: Styled.SidePaddingInner,
	Footer,
});
