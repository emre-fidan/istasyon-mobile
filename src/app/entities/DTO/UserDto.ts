import { EnumStatus } from "../enumerations/EnumStatus";

export class UserDto{

    public name : String;
    public surname : String;
    public email : String;
    public password : String;
    public status : EnumStatus;
    public userId : number;
}