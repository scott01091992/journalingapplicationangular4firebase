import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getLatestJournal() {
    return this.http.get('/latestJournal');
  }
}
