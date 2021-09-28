export class Post {
    
    title: string;
    imgPath: string;
    subreddit: string;
    poster: string;
    votes: string;
    daysago: string;
    comments: string


    constructor({title, imgPath, subreddit, poster, votes, daysago, comments} :
        {title: string, imgPath: string, subreddit: string, poster: string, votes: string, daysago: string, comments: string}){
            this.title = title;
            this.imgPath = imgPath;
            this.subreddit = subreddit;
            this.poster = poster;
            this.votes = votes;
            this.daysago = daysago;
            this.comments = comments;

    }


    
}