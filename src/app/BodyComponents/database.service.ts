import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Observable } from "rxjs";
import { Post } from "./post1.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<Post []>;

    constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase Communication");
        this.items = this.db.list<Post>('mock_posts1').valueChanges();
    }

    public showData(){
        this.items.subscribe((data:Post[]) => {
            console.log("Data Received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}