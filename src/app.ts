import { envs } from "./config/envs.plugins";
import server = require("./presentation/server");

(async ()=>{
    main();
})()


function main(){
     server.Server.start();
 
  /*   console.log('mail',envs.MAILEAR_EMAIL)
    console.log('PORT',envs.PORT)
    console.log(envs.MAILER_SECRET_KEY)
 
 */
   // console.log("server runing") 


}