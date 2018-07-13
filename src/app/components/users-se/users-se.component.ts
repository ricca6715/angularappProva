import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service'
import { UserSE } from '../models/UserSE';

@Component({
  selector: 'app-users-se',
  templateUrl: './users-se.component.html',
  styleUrls: ['./users-se.component.css']
})
export class UsersSEComponent implements OnInit {

  usersSE: UserSE[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getUserSE().subscribe(userSE => {

      this.usersSE = userSE;
    });
  }

  addUserSE(name,surname){
    this.postService.saveUserSE({name,surname} as UserSE).subscribe(userSE => {
      console.log(userSE);
    });
  }

}
