import nodemailer from 'nodemailer'
import { envs } from '../../config/envs.plugins'
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, logSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
    to: string | string[],
    subject: string,
    hmtlBody: string
    attachments?:Attachment[]
}


interface Attachment {
    filename:string;
    path:string
}

export class EmailService {
    private Transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILEAR_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    constructor(
       
    ){}


    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, hmtlBody,attachments=[] } = options
        try {

            const sentInformation = await this.Transporter.sendMail({
                to,
                subject,
                html: hmtlBody,
                attachments:attachments
            })
            //console.log('INFO MAIL',sentInformation)
            const log = new LogEntity({
                level:logSeverityLevel.low,
                message:'Email sent',
                origin:'email-service.ts'
            })
            

            return true
        }
        catch (error) {
              const log = new LogEntity({
                level:logSeverityLevel.high,
                message:'Email not sent',
                origin:'email-service.ts'
            })
            
            return false
        }
    }


    async sendEmailWithFileSystemLogs(to:string | string[]){
        console.log('enviando')
        const subject  = 'Logs del servidor';
        const hmtlBody = `
            <h1>Reporte logs</h1>
            <p>Reporte de logs</p>
           ` 
        const  attachments:Attachment[]=[
            { filename: 'logs-all.log', path:'./logs/logs-all.log' },
            { filename: 'logs-high.log', path:'./logs/logs-high.log' },
            { filename: 'logs-medium.log', path:'./logs/logs-medium.log' }

        ] 
        
       return this.sendEmail({
            to,subject,hmtlBody,attachments
        })
    }
}