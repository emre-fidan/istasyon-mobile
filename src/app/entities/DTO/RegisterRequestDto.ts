import { EnumGender } from "../enumerations/EnumGender";
import { EmployeeDto } from "./EmployeeDto";
import { UserDto } from "./UserDto";

export class RegisterRequestDto{
    public User: UserDto;
    public Employee: EmployeeDto;
}