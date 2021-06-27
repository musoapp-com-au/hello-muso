//Model to be displayed by frontend application

export interface SongViewModel {
    title: string;

    canDelete: boolean;
    deleteAction: string ;

    canEdit: boolean;
    editAction: string;
}

export interface SongListViewModel {
    songs: Array<SongViewModel>;
    createSongAction: string;
}
