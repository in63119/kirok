import * as AWS from 'aws-sdk';

import kirok from './kirok.png'; // test용 지워야 함

const { REACT_APP_ACCESS_KEY, REACT_APP_SECRET_ACCESS_KEY, REACT_APP_REGION } = process.env;

AWS.config.update({
	accessKeyId: REACT_APP_ACCESS_KEY,
	secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
	region: REACT_APP_REGION,
});

const s3 = new AWS.S3();

export const upload = async () => {
	const params = {
		Bucket: 'kirok-user',
		Key: 'kirok.jpg',
		Body: kirok, // 여기서 form-data로 이미지 파일 가져오면 될 덧
		ContentType: 'image/jpeg',
	};

	s3.upload(params, function (err: any, data: any) {
		if (err) {
			throw err;
		}
		console.log(`File uploaded successfully. ${data.Location}`);
	});
};
