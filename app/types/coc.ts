export type IconUrls = {
  small: string;
  medium: string;
  large?: string;
  tiny?: string;
}

export type Badge = {
  small: string;
  large: string;
  medium: string;
}

export type League = {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export type BuilderBaseLeague = {
  id: number;
  name: string;
}

export type Clan = {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: Badge;
}

export type SeasonStatistics = {
  id: string;
  rank: number;
  trophies: number;
}

export type LegendStatistics = {
  legendTrophies: number;
  previousSeason: SeasonStatistics;
  bestSeason: SeasonStatistics;
  previousBuilderBaseSeason: SeasonStatistics;
  bestBuilderBaseSeason: SeasonStatistics;
  currentSeason: {
    rank: number;
    trophies: number;
  };
}

export type Achievement = {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: "home" | "builderBase" | "clanCapital";
}


export type PlayerHouseElement = {
  type: "ground" | "walls" | "roof" | "decoration";
  id: number;
}

export type PlayerHouse = {
  elements: PlayerHouseElement[];
}

export type Label = {
  id: number;
  name: string;
  iconUrls: {
    small: string;
    medium: string;
  };
}

export type Equipment = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home";
}

export type HeroEquipment = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home";
}

export type Troop = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
  superTroopIsActive?: boolean;
}

export type Hero = {
  name: string;
  level: number;
  maxLevel: number;
  equipment?: Equipment[];
  village: "home" | "builderBase";
}

export type Spell = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home";
}

export type Player = {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  builderBaseTrophies: number;
  bestBuilderBaseTrophies: number;
  role: string;
  warPreference: string;
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan: Clan;
  league: League;
  builderBaseLeague: BuilderBaseLeague;
  legendStatistics: LegendStatistics;
  achievements: Achievement[];
  playerHouse: PlayerHouse;
  labels: Label[];
  troops: Troop[];
  heroes: Hero[];
  heroEquipment: HeroEquipment[];
  spells: Spell[];
}