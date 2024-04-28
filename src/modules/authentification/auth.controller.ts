import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UserDto} from './user.dto';


@Controller('api/users')
export class AuthController {
    constructor(private readonly users: AuthService) {
    }

    @Get()
    getUsers() {
        return this.users.get();
    }

    @Post('authentication')
    authentication(@Body() createDto: UserDto) {
        return this.users.authentication(createDto);
    }

    @Post('registration')
    registration(@Body() createDto: UserDto) {
        return this.users.registration(createDto);
    }

    @Post('rights/:id')
    setRights(@Param('id') id: number, @Body() data: any) {
        return this.users.setRights(id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.users.remove(id);
    }
}
