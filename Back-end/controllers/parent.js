const PARENT_STATUS = {
  REJECt: "reject",
  DONE: 'done',
  WAIT: "wait"
}

const getParentStatus = async (req, res) => {

  const { kakao_id } = req.query;

  // TODO: 자녀 등록 신청 상태 확인 후 판단하기

  res.status(200).send({
    data: {
      kakao_id,
      status: PARENT_STATUS.DONE
    }
  })
}

const postKidInfos = async (req, res) => {

  const { data } = req.body;

  // TODO: 자녀 등록 추가하기 

  res.status(201).send({
    data
  })
}



module.exports = {
  getParentStatus,
  postKidInfos
}