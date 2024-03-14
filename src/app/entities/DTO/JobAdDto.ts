import { EnumEmployementType } from "../enumerations/EnumEmployementType";
import { EnumStatus } from "../enumerations/EnumStatus";

export class JobAdDto{
    public label : string;
    public type : EnumEmployementType;
    public address : string;
    public coordinate : string;
    public name : string;
    public status : EnumStatus;
    public definition : string;
    public benefits : Array<string>;
}