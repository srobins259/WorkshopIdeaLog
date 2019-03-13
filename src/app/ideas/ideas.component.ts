import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IdeaDB, LikeDB, UserDB } from '../db';
import { Like } from '../like';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  ideas: Idea[];

  constructor() { }

  ngOnInit() {
    this.getIdeas();
  }

  getIdeas() {
    this.ideas = IdeaDB;
    this.ideas.forEach(idea => {
      idea.likes = LikeDB.filter(like => like.idea === idea.id);
      const users = UserDB.filter(user => user.uid === idea.uid);
      idea.user = users[0];
    });
    console.log(JSON.stringify(this.ideas));
  }

  like(index, idea_id) {
    const newLike: Like = {
      idea: idea_id,
      uid: '098sd09usaodifsoidfj',
      created: new Date()
    };

    this.ideas[index].likes.push(newLike);

  }

}
