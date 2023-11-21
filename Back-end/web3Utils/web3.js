require("dotenv").config({ path: __dirname + "/../.env" });

const CryptoJS = require("crypto-js");
const { Web3 } = require("web3");
const Kirok = require("./Kirok.json");

const { ADDRESS, PRIVATE_KEY, RPC_URL } = process.env;
const web3 = new Web3(RPC_URL);
const contract = new web3.eth.Contract(Kirok.abi, Kirok.address);

const privateKey = CryptoJS.AES.decrypt(PRIVATE_KEY, ADDRESS).toString(
  CryptoJS.enc.Utf8
);

const test = async () => {
  //   const allNames = await contract.methods.allNames().call();
  //   console.log(allNames);
};
test();
// module.exports = {
//     allNames
// }
