//Models of data retrived via API
//TODO: We could share/symlink these models across projects to reduce duplication.

export interface Song {
    title: string;
    actions: SongAction[];
    canDelete : string

}

export interface SongAction {
    name: string;
    method: string;
    href: string;
}