import { MailService } from "./mail.service";
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    get(): Promise<number>;
    send(body: {
        to: string;
        subject: string;
        content: string;
        cc?: string;
    }): Promise<void>;
}
