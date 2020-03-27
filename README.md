패키지.json 에서 main 을 app.js로 하고 app.js 생성


npm i sequelize mssql
npm install tedious

npm i -D sequelize-cli
// -D 는 개발 모드로 설치

npx sequelize init
// 마이그레이션 폴더들 생김

npm i -D nodemon 
// 서버 코드 변경됐을때 안끄고 켜도 알아서 반영해줌
// 패키지json dev를 nodemon app.json 으로 수정

npm i cors
// 프론트에서 백엔드로 값을 보낼수 있게 허용할수있음
// app.js에 app.use(cors("http://localhost:3000"));