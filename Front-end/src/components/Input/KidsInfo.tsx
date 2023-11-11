import React, { useState } from 'react';
import { styled } from 'styled-components';

interface KidsInfoProps {
	title: string;
	parent: string; // TODO: parentName 으로 명확하게
}

const KidsInfo: React.FC<KidsInfoProps> = (props) => {
	const { title, parent } = props;
	const [form, setForm] = useState({
		name: '',
		birth: '',
		gender: '',
	});

	return (
		<Container>
			<Title title={title}>
				{title} / {parent}
			</Title>
			{title === '이름' ? (
				<input
					placeholder="aaa"
					value={form.name}
					type="text"
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>
			) : (
				<input value={form.birth} onChange={(e) => setForm({ ...form, birth: e.target.value })} type="text"></input>
			)}

			<Line />
		</Container>
	);
};

export default KidsInfo;

const Container = styled.div``;

const Title = styled.div``;

const Line = styled.div`
	width: 237px;
	height: 1.5px;
	background-color: #e0e5d6;
`;
