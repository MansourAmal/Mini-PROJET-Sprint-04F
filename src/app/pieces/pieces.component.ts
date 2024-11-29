import { Component } from '@angular/core';
import { Piece } from '../../model/piece.model';
import { PieceServiceService } from '../services/piece-service.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrl: './pieces.component.css'
})
export class PiecesComponent {

  pieces : Piece[]; 
   constructor(private pieceService: PieceServiceService) {
    this.pieces = [];
    }
    
  
  
   ngOnInit(): void {
    this.chargerpieces();
    }
   
    chargerpieces(){
      this.pieceService.listepieces().subscribe(prods => {
        console.log(prods);
        this.pieces = prods;
        });
    }
  

  



}
