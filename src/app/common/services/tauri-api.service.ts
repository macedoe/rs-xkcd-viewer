import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/core';
import { XkcdComic } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class TauriApiService {
    constructor() {}

    async fetchComic(num: number): Promise<XkcdComic> {
        return await invoke<XkcdComic>('fetch_comic_from_api', { num });
    }
}
