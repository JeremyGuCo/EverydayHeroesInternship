import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Testimony } from "../models/testimony";

@Injectable()
export class TestimonyService {
   constructor(private http: HttpClient) { }

   getDataMock() {
      return this.http.get<Testimony[]>('./assets/data/dataMock.json');
   }

   getAll() {
      return this.http.get<Testimony[]>('http://localhost:8000/tests/retrieve-data.php');
   }
} 