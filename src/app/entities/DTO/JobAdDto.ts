import { EnumEmployementType } from "../enumerations/EnumEmployementType";
import { EnumStatus } from "../enumerations/EnumStatus";

export class JobAdDto{
    public label : String;
    public type : EnumEmployementType;
    public address : String;
    public coordinate : String;
    public name : String;
    public status : EnumStatus;
    public definition : string;
    public benefits : Array<String>;
}