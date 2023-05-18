export interface MatchType {
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Content[];
  number: number;
  sort: SortType;
  numberOfElements: number;
  pageable: Pageable;
  empty: boolean;
}

export interface Content {
  matchId: string;
  gameMode: string;
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameType: string;
  mapId: number;
  win: boolean;
  champLevel: number;
  championId: number;
  championName: string;
  championProfileUri: string;
  deaths: number;
  kills: number;
  assists: number;
  summoner1Id: number;
  summoner2Id: number;
  primaryStyle: number;
  subStyle: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  item0Uri: string;
  item1Uri: string;
  item2Uri: string;
  item3Uri: string;
  item4Uri: string;
  item5Uri: string;
  item6Uri: string;
}

export interface SortType {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  offset: number;
  sort: SortType;
  paged: boolean;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
}
