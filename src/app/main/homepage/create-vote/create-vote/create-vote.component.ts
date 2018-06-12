import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.Component.html',
  styleUrls: ['./create-vote.component.scss'],
})
export class CreateVoteComponent implements OnInit {
  pollForm: FormGroup;
  poll = {
    title: '',
    description: '',
    type: 'text',
  };
  constructor(private voteService: VoteService, private fb: FormBuilder) {
    this.pollForm = new FormGroup({
      title: new FormControl(this.poll.title, Validators.prototype),
      description: new FormControl(
        this.poll.description,
        Validators.minLength(50),
      ),
      type: new FormControl(this.poll.type),
    });
  }

  ngOnInit() {
    const data = this.voteService.getData('cv');
    if (data) {
      this.pollForm.setValue({
        title: data.title,
        description: data.description,
        type: data.type,
      });
    }
  }
  get description() {
    return this.pollForm.get('description');
  }
  get title() {
    return this.pollForm.get('title');
  }
  submit(e: Event) {
    this.voteService.setData('cv', this.pollForm.value);
    this.voteService.submit();
  }
}
