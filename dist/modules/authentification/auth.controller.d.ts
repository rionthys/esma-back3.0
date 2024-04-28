import { AuthService } from './auth.service';
import { UserDto } from './user.dto';
export declare class AuthController {
    private readonly users;
    constructor(users: AuthService);
    getUsers(): Promise<{
        name: string;
        id: number;
        rights: object;
    }[]>;
    authentication(createDto: UserDto): Promise<{
        auth: boolean;
        name: string;
        rights: object;
        id: number;
    }>;
    registration(createDto: UserDto): Promise<{
        auth: boolean;
        name: string;
        rights: object;
    }>;
    setRights(id: number, data: any): Promise<import("../../shared/database/entities/users.entity").UsersEntity>;
    delete(id: number): Promise<void>;
}
