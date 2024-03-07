export enum EnumEmployementType{
    PartTime=1,
    FullTime=2,
}

export const EnumEmployementType2Label: Record<EnumEmployementType, string>={
    [EnumEmployementType.PartTime]:"Yarı Zamanlı",
    [EnumEmployementType.FullTime]:"Tam Zamanlı",
}