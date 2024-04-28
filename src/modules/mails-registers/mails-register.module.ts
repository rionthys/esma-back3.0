import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/shared/database/database.module';
import {MailsRegistersController} from "./mails-registers.controller";
import {MailsRegisterService} from "./mails-register.service";

@Module({
    imports: [DatabaseModule],
    controllers: [MailsRegistersController],
    providers: [MailsRegisterService],
})
export class MailsRegisterModule {
}
