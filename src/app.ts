import { envs } from "./config/envs.plugins";
import { LogModel, MongoDatabase } from "./data/mongo";
import server = require("./presentation/server");

(async ()=>{
    main();
})()


async function main(){

   await  MongoDatabase.connect({
      mongoUrl:envs.MONGO_URI,
      dbName:envs.MONGO_DB_NAME
   })

   /*test  crear  regustro*/
   /* UN  COLECCION = TABLA , UN DOCUMENTO = UN REGISTRO */

   // const newLog = await LogModel.create({
   //    message:'test desde mongo',
   //    origin:'app.ts',
   //    level:'low'
   // })

   // await newLog.save()

   // console.log('newlog',newLog)

/*    const logs = await LogModel.find()
   console.log(logs[1]?.message) */

  server.Server.start();
 
  /*   console.log('mail',envs.MAILEAR_EMAIL)
    console.log('PORT',envs.PORT)
    console.log(envs.MAILER_SECRET_KEY)
 
 */
   // console.log("server runing") 


}