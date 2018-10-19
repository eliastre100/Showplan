import { Injectable } from '@angular/core';
import {setlistEndpoint} from "../../constants/endpoints";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SetlistProvider {

  constructor(private http: HttpClient) {
  }

  async get(artist: string) {
    const response = await this.http.get(setlistEndpoint + '?artist=' + encodeURI(artist), {}).toPromise() as any;
    if (response.code === 404)
      return [];
    for (let setlist of response.setlist) {
      console.log(setlist.sets);
      if (setlist.sets.set.length != 0)
        return this.formatSetlist(setlist.sets);
    }
    return []
  }

  private formatSetlist(setlist) {
    let songs = [];
    for (let set of setlist.set) {
      songs = songs.concat(set.song);
    }
    return songs.map((song) => song.name);
  }

}
