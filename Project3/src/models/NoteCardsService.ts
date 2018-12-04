
// An online tutorial told me to create this file, I believe it's jsut used to keep constructors and stuff organized

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './NoteCardItem';

@Injectable()
export class NoteCardsService {
    private notecardsRef = this.db.list<Item>('notecard-list')

    constructor(private db: AngularFireDatabase){

    }
    
    getNoteCardList(){
        return this.notecardsRef;
    }


    addItem(item: Item){
        return this.notecardsRef.push(item)
    }

    removeItem(item: Item){
        return this.notecardsRef.remove()
    }

}