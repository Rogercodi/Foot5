import { TTeam } from "./playerType";

export interface IMatch {
    date: Date | null;
    place: string;
    teamA?: TTeam;
    teamB?: TTeam;
}
