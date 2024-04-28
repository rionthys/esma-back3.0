import {Injectable} from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    constructor() {
    }

    async sendEmail(to: string,
                    subject: string,
                    html: string,
                    cc?: string,
                    pdf?: string) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'sergiu2016dumitras@mail.ru',
                pass: 'DUj8hHDcfdNaNEs41xLe',
            }
        });

        let mailOptions = {
            from: 'sergiu2016dumitras@mail.ru',
            cc,
            to,
            subject,
            html,
            attachments: [],
        };

        console.log(pdf);
        if (pdf) {
            mailOptions.attachments.push({
                filename: 'invoice.pdf',
                path: '/www/esma/esma-back/uploads/' + pdf,
                contentType: 'application/pdf'
            });
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(`Error: ${error}`);
            }
            console.log(`Message sent: ${info.response}`);
        });

    }
}