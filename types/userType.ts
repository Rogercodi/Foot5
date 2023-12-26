import { IMatch } from "./matchType";


export interface IUser {
    name: string;
    matechesPlayed: IMatch[];
    photo: string;
}