import {Body, Controller, Get, Post} from '@nestjs/common';
import {MailService} from "./mail.service";

@Controller('api/mail')
export class MailController {
    constructor(private readonly mailService: MailService) {
    }

    @Get()
    async get() {
        return 1;
    }

    @Post()
    async send(@Body() body: {
        to: string;
        subject: string;
        content: string;
        cc?: string;
        pdf?: string;
    }) {
        console.log(1231)
        const {to, subject, content, cc, pdf} = body;
        const response = await this.mailService.sendEmail(to, subject, content, cc, pdf);
        console.log('response', response);
        return response;
    }
}
