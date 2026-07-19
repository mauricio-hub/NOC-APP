import nodemailer from 'nodemailer'
import { envs } from '../../config/envs.plugins'

interface SendMailOptions {
    to: string,
    subject: string,
    hmtlBody: string
    //todo attachments
}


export class EmailService {
    private Transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILEAR_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, hmtlBody } = options
        try {

            const sentInformation = await this.Transporter.sendMail({
                to,
                subject,
                html: hmtlBody
            })
          //  console.log('INFO MAIL',sentInformation)
            return true
        }
        catch (error) {
            return false
        }
    }
}