const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const AWS = require("aws-sdk");
const { AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

const s3 = new AWS.S3();

/* 
    aws S3 관련 기능
    1. upload(이미지 파일 업로드 & 수정(수정은 덮어쓰기와 같음))
      @dev 이미지 이름과 이미지 파일을 인풋으로 받음.
	  @param(imgName : string, body : any) 
      1. "imgName" => 이미지 이름.형식 (Ex. ImageName.png, ImageName.jpg)
      2. "body" => 클라이언트에서 보내는 formData 형식의 데이터
	  @returns => imgUrl[string] (Ex. https://in-nft.s3.ap-northeast-2.amazonaws.com/In_kid.png)

    2. deleteFile(이미지 파일 지우기)
      @dev 이미지 이름을 인풋으로 받음. (추후에 중복되는 파일 명에 관한 부분도. 해결하면 좋겠음.)
	  @param(imgName : string) 
      1. "imgName" => 이미지 이름.형식 (Ex. ImageName.png, ImageName.jpg)
	  @returns => boolean
*/

module.exports = {
  upload: async (imgName, body) => {
    const params = {
      Bucket: "kirok-user",
      Key: imgName,
      Body: body,
      ContentType: "image/jpeg",
    };

    const imgUrl = await s3.upload(params, (err, data) => {
      if (err) {
        throw err;
      }
      return data.Location;
    });

    return imgUrl;
  },

  deleteFile: async (imgName) => {
    const params = {
      Bucket: "kirok-user",
      Key: imgName,
    };

    await s3.deleteObject(params, (err, data) => {
      if (err) {
        console.error("Error in file deletion: ", err);
        return false;
      } else {
        return true;
      }
    });
  },
};
