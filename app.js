const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const sequelize = require('./models').sequelize;

db.sequelize.sync();
// 서버시작할때 시퀄라이즈 켜짐

// 프론트서버 어디서 요청할 수 있는지 켜주기
app.use(cors("http://localhost:3000"));
// 미들웨어. req, res 조작함.
app.use(express.json());
// 이걸 정의해줘야 josn 타입 받을 수 있음
app.use(express.urlencoded({ extended: false }));

app.get("/", async(req, res, next) => {
    try {
        res.send("안녕 백엔드");
        const query = "exec dbo.WEB_ITM_LIST '14542', 'PP1302000', 2, 10, '' ";
        sequelize.query(query)
        .spread(function (results, metadata) {
            console.log(results);
            console.log(metadata);
        })
    }catch(err) {
        console.log(err);
        next(err);
    }
})


app.listen(3085, () => {
    console.log(`백엔드 서버 ${3085}번 포트에서 작동 중`)
});