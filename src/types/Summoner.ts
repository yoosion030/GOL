export interface SummeonerType {
  id: string;
  summonerApiId: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  isRegistered: boolean;
  userDto?: UserDto;
}

export interface UserDto {
  id: string;
  email: string;
  name: string;
  grade: number;
  classNum: number;
  num: number;
  gender: string;
  profileUrl: string;
  gAuthRole: string;
  role: string;
}
