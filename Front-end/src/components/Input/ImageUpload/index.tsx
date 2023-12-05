import React, { useCallback, useRef } from 'react';
import * as Styled from './index.styled';

export type ImageUploadProps = {
	src: string;
	uploadImage?: (fileData: string) => void;
};
const ImageUpload: React.FC<ImageUploadProps> = ({ src, uploadImage }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickWrapper = useCallback(() => {
		inputRef.current?.click();
	}, [inputRef]);

	const handleUploadImage: React.ChangeEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			const raw = e.currentTarget.files;

			if (raw && raw[0]) {
				const file = raw[0];

				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => {
					const base64Data = reader.result as string;

					uploadImage?.(base64Data);
				};
			}
		},
		[uploadImage],
	);

	return (
		<Styled.Wrapper onClick={handleClickWrapper}>
			<Styled.HiddenInput ref={inputRef} type="file" accept="image/*" onChange={handleUploadImage} />
			{src && <Styled.Thumbnail src={src} />}
			<Styled.EditableIcon src="/images/parent/profile-editable.png" />
		</Styled.Wrapper>
	);
};

export default ImageUpload;
