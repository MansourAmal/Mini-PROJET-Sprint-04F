import { Injectable } from '@angular/core';
import { Piece } from '../../model/piece.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {

  apiURL: string = 'http://localhost:8082/pieceth/api/all';
  pieces! : Piece[]; 
  constructor(private http : HttpClient) { }

  listepieces(): Observable<Piece[]>{
    return this.http.get<Piece[]>(this.apiURL);
    }

}
