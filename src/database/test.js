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
    subject: 1,
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

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consultar os dados inseridos

  //todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys ")
  // console.log(selectedProffys)

  //consultar as classes de um determinado professor e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  // console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  // console.log(selectClassesSchedules)

})