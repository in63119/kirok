import * as AWS from 'aws-sdk';

import kirok from './우럭.jpeg'; // test용 지워야 함

const { REACT_APP_ACCESS_KEY, REACT_APP_SECRET_ACCESS_KEY, REACT_APP_REGION } = process.env;

AWS.config.update({
	accessKeyId: REACT_APP_ACCESS_KEY,
	secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
	region: REACT_APP_REGION,
});

const s3 = new AWS.S3();

const formData = new FormData();
formData.append('image', kirok);

export const upload = async () => {
	const params = {
		Bucket: 'kirok-user',
		Key: 'kirok.jpg',
		Body: kirok,
		ContentType: 'image/jpeg',
	};

	s3.upload(params, (err: any, data: any) => {
		if (err) {
			throw err;
		}
		console.log(`File uploaded successfully. ${data.Location}`);
	});
};

export const modify = () => {
	const params = {
		Bucket: 'kirok-user',
		Key: 'kirok.jpg',
		Body: kirok, // 여기서 form-data로 이미지 파일 가져오면 될 덧
		ContentType: 'image/jpeg',
	};

	s3.putObject(params, (err: any, data: any) => {
		if (err) {
			throw err;
		}
		console.log(`File uploaded successfully. ${data.Location}`);
	});
};

export const deleteFile = async () => {
	const params = {
		Bucket: 'kirok-user',
		Key: 'kirok.jpg', // 삭제할 파일의 키
	};

	s3.deleteObject(params, (err, data) => {
		if (err) {
			console.error('Error in file deletion: ', err);
			throw err;
		}
		console.log('File deleted successfully');
	});
};
