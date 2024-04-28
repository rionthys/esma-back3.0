import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/shared/database/database.module';
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModules {
}
