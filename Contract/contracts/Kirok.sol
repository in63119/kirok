pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Kirok is Ownable {
  string[] public allNames;
  string[] public allTxtRecords;

  mapping(string => address) addresses;
  mapping(address => string) names;

  mapping(string => string) txtRecordURIs;

  constructor() Ownable(msg.sender) {} 

  // 등록
  function register(string memory _name, address _address) public onlyOwner returns (bool) {
    require(addresses[_name] == address(0), "This name is already registered.");
    require(bytes(names[_address]).length == 0, "This address is already registered.");

    addresses[_name] = _address;
    names[_address] = _name;
    allNames.push(_name);
    return true;
  }

  // 이름에 해당하는 주소 반환
  function fromNameToAddress(string memory _name) public view onlyOwner returns (address) {
    require(allNames.length > 0, "There are no registered addresses.");

    address _address = addresses[_name];
    require(_address != address(0), "This name is an unregistered address.");

    return _address;
  }

  // 주소에 해당하는 이름 반환
  function fromAddressToName(address _address) public view onlyOwner returns (string memory) {
    require(allNames.length > 0, "There are no registered addresses.");
    string memory _name = names[_address];
    require(bytes(_name).length != 0, "This address is an unregistered address.");

    return _name;
  }

  // textRecord 등록
  function registerTxtRecord(string memory _name, string memory _txtRecordURI) public onlyOwner returns (bool) {
    require(allNames.length > 0, "There are no registered addresses.");

    address _address = addresses[_name];
    require(_address != address(0), "This is an unregistered address.");

    // 만약에 사용자가 직접 트랜잭션을 보내게 되면 확인해야할 코드
    // require(msg.sender == _address, "This is not your address.");

    txtRecordURIs[_name] = _txtRecordURI;
    allTxtRecords.push(_txtRecordURI);

    return true;
  }

  // 이름으로 textRecord 조회
  function checkTxtRecord(string memory _name) public view onlyOwner returns (string memory) {
    require(allNames.length > 0, "There are no registered addresses.");

    address _address = addresses[_name];
    require(_address != address(0), "This is an unregistered address.");

    string memory _txtRecordUri = txtRecordURIs[_name];
    require(bytes(_txtRecordUri).length != 0, "This is an unregistered textRecord.");

    return _txtRecordUri;
  }
}