import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IdeaDB, LikeDB, UserDB } from '../db';
import { Like } from '../like';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  ideas: any[];
  name: any;
  description: any;
  db = firebase.firestore();

  constructor() {
  }

  ngOnInit() {
    this.getIdeasFromFB();
  }

  getIdeas() {
    this.ideas = IdeaDB;
    this.ideas.forEach(idea => {
      console.log('id');
      idea.likes = LikeDB.filter(like => like.idea === idea.id);
      const users = UserDB.filter(user => user.uid === idea.uid);
      idea.user = users[0];
    });
    console.log(JSON.stringify(this.ideas));
  }

  getIdeasFromFB(){
    const self = this;
    self.db.collection('ideas')
    .onSnapshot(function(querySnapshot) {
        self.ideas = [];
        querySnapshot.forEach(function(doc) {
          console.log(JSON.stringify(doc.data()));
            const tempIdea = doc.data();
            tempIdea.id = doc.id;
            self.ideas.push(tempIdea);
        });
    });
  }

  like(index, idea_id) {
    const newLike: Like = {
      idea: idea_id,
      uid: '098sd09usaodifsoidfj',
      created: new Date()
    };

    this.ideas[index].likes.push(newLike);

  }

  deleteIdea(id) {
    this.db.collection('ideas').doc(id).delete();
  }

  addIdea() {
    console.log(this.name, this.description);
    const self = this;

    const id = Date.now();

    const user = JSON.parse(localStorage.getItem('user'));

    const newIdea: Idea = {
      id: id,
      title: self.name,
      description: self.description,
      uid: user.uid,
      likeCount: 0,
      created: new Date(),
      modified: new Date()
    };
    self.db.collection('ideas').doc(id.toString()).set(newIdea)
    .then(function() {
      console.log('Document successfully written!');
      this.name = '';
      this.description = '';
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
  }

}
