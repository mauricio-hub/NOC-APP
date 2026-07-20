import { EmailService } from "../../../presentation/email/email-service"
import { LogEntity, logSeverityLevel } from "../../entities/log.entity"
import { LogRepository } from "../../repository/log.repository"

interface SendLogEmailLogUseCase {
    execute: (to: string | string[]) => Promise<boolean>
}

export class SendEmailLogs implements SendLogEmailLogUseCase {

    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository
    ) { }

    async execute(to: string | string[]) {

        try {
            const sent = await this.emailService.sendEmailWithFileSystemLogs

            if (!sent) {
                throw new Error("Email log was not sent")
            }
             const log = new LogEntity({ 
                message: `Email sent`, 
                level: logSeverityLevel.low, 
                origin: 'send-logs.ts' 
            })
            
            this.logRepository.saveLog(log)
            return true
        } 
        catch (error) {
            const log = new LogEntity({ message: `${error}`, level: logSeverityLevel.high, origin: 'send-logs.ts' })
            this.logRepository.saveLog(log)
            return true
        }
    }
} 