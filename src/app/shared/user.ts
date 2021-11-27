import { Role } from "./role";

export class User{
    UserId: number;
    UserName: string;
    UserPassword: string;
    RoleId : number;

    //Object Oriented Model
    Role: Role;
    isActive: boolean;
}