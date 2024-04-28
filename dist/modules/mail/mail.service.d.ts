export declare class MailService {
    constructor();
    sendEmail(to: string, subject: string, html: string, cc?: string): Promise<void>;
}
