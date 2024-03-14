import { EnumStatus } from "../enumerations/EnumStatus";

export class UserDto{

    public name : string;
    public surname : string;
    public email : string;
    public password : string;
    public status : EnumStatus;
    public userId : number;
}