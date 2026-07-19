import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasources';
import { LogRepositoryImplementation } from '../infrastructure/repositories/log.repository.implementation';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email-service';


const filesSystemDataSource = new LogRepositoryImplementation(
    new FileSystemDataSource()
);


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

        const emailService = new EmailService()

        emailService.sendEmail({
           to:'mauriciogonzalezdeveloper@gmail.com',
           subject:'holita',
           hmtlBody: `
            <h1>Reporte logs</h1>
            <p>.....</p>
           ` 
        })

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



