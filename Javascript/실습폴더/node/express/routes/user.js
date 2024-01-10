const express = require('express');
const router = express.router();

router.post('/sign-up', (req, res) => {
  console.log(req.body)
  'insert into tb_user (email) vaule (${req.body.email})'

  res.status(200).json({
    message : true,
    data : "동해물과 백두산이 마르고 닳도록!!!!!!!!!!!!!!"
  })
})

// 해당 라우트는 이미 app.js에서 관심사 분리한 로직이다
// 그러나 user.js에 너무 많은 라우트가 있다면 유지보수하기에 힘들다
// 그렇다면 이를 해소하기 위해 어떤 방식을 도입하는게 좋을까?

module.exports = router;
