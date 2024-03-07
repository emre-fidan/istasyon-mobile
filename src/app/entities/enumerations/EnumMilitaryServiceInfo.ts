export enum EnumMilitaryServiceInfo{
    Exempt=0,
    Completed=1,
    NotCompleted=2,
}

export const EnumMilitaryServiceInfo2Label: Record<EnumMilitaryServiceInfo, string>={
    [EnumMilitaryServiceInfo.Exempt]:"Muaf",
    [EnumMilitaryServiceInfo.Completed]:"Tamamlandı",
    [EnumMilitaryServiceInfo.NotCompleted]:"Tamamlanmadı",
}