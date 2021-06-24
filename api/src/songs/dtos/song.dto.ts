export interface SongDto {
    title: string;
    actions: ISongAction[]

}

export interface ISongAction {
    name: string;
    method: string;
    href: string;
}

export const SongIdString: string = "<SONG_ID>"

export class IdentifierSongAction implements ISongAction {

    name: string;
    method: string;
    href: string;

    constructor(action: ISongAction, id: string){
        this.name = action.name;
        this.method = action.method;
        this.href = action.href.replace(SongIdString, id)
    }
}

