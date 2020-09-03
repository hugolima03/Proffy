const Database = require('./db.js');
const createProffy = require('./createProffy');

Database.then(async (db) => {
  //inserir dados

  proffyValue = {
    name: "Hugo",
    avatar: "https://avatars0.githubusercontent.com/u/62298830?s=460&u=ea0249ca3e7154c1a4938767cdb7bd4e025a40f9&v=4",
    whatsapp: "95 991470215",
    bio: " Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhasb explosões.",
  }

  classValue = {
    subject: "Química",
    cost: "20",
    //o proffy id virá pelo banco de dados
  }

  classScheduleValues = [
    //class_id virá pelo banco de dados, após cadastramos a aula
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consultar os dados inseridos
})