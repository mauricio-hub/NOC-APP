import { CheckService } from '../domain/use-cases/checks/check-service';
import { SendEmailLogs } from '../domain/use-cases/email/send-logs';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasources';
import { LogRepositoryImplementation } from '../infrastructure/repositories/log.repository.implementation';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email-service';


const fileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDataSource()
);

const emailService = new EmailService()


export class Server {
    public static start() {
        console.log("\n");
        console.log("████████████████████████████████████████");
        console.log("█                                      █");
        console.log("█  ✅  SERVER STARTED SUCCESSFULLY    █");
        console.log("█                                      █");
        console.log("████████████████████████████████████████");
        console.log("\n🚀 App running on PORT 3000");
        console.log("👁️  Watching for changes...\n");


        /* new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute(
             ['','']
        ) */

        // emailService.sendEmailWithFileSystemLogs(
        //     ['','']
        // )

        // CronService.createJob(
        //     '*/3 * * * * *', 
        //     () => { 
        //         const url = "https://www.google.com/";
        //       new CheckService(
        //         filesSystemDataSource,
        //         () => console.log("✅ URL is ok"),
        //         (error) => console.error(`❌ ${error}`)
        //       ).execute(url);
           
        // });

    }
}



