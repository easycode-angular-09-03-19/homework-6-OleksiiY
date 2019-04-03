import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';
import { User } from '../../interfaces/User';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  readOnly = true;
  isEditDisabled: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private postsService: PostsService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe((data: User) => {
      this.user = data;
    }, (err) => {
      console.log(err);
    });
  }

  onEdit() {
    this.readOnly = !this.readOnly;
    this.isEditDisabled = true;
  }



  onFormSubmit(form) {
    const userItem = form.value;
    this.postsService.editUserItem(userItem).subscribe((data) => {
      this._flashMessagesService.show('Редактирование прошло успешно', {cssClass: 'alert-success'});
      this.router.navigate([`/`]);
    }, (err) => {
      this._flashMessagesService.show('Ошибка сервера!', {cssClass: 'alert-danger'});
      console.log(err);
    });
  }
}
