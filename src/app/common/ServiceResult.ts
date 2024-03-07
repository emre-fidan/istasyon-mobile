export class ServiceResult<T>{
    public status: number;
    public creationTime: Date;
    public content: T;
}