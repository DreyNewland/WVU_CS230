import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../BodyComponents/post1.model";


@Injectable({providedIn: 'root'})
export class MockPostService{
    mockposts1_url: string =  "https://reddit-app-aeded-default-rtdb.firebaseio.com/mock_posts1.json";
    mockposts2_url: string =  "https://reddit-app-aeded-default-rtdb.firebaseio.com/mock_posts2.json";
    mockposts2_init_url: string = "https://reddit-app-aeded-default-rtdb.firebaseio.com/mock_posts2/";


    constructor(private http:HttpClient){
    }

    getMockPost1() {
        return this.http.get<Post[]>(this.mockposts1_url);
    }
    getMockPost2() {
        return this.http.get<Post[]>(this.mockposts2_url);
    }

    addPost(data:Post, arrayLength:number){
        return this.http.put<Post[]>(this.mockposts2_init_url + arrayLength + ".json", data);
        
    }
}