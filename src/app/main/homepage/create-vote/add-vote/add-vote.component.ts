import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { PollService } from './poll.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.scss'],
  animations: [],
  providers: [PollService],
})
export class AddVoteComponent implements OnInit {
  polls: {
    title: string;
    open: boolean;
    textCandidates: string[];
    imageCandidates: string[];
  }[];
  pollForm: FormGroup;
  data: { [index: string]: any } = {
    cv: '',
    user: '',
  };
  pollOption: 'image' | 'text' = 'text';
  vote: any;
  state = {
    section: false,
  };
  target = '#collapseExample-';
  constructor(
    private voteService: VoteService,
    private pollService: PollService,
    private fb: FormBuilder,
  ) {
    this.updatePoll();
    this.pollForm = this.fb.group({
      pollformArray: this.fb.array([
        this.fgFromFc({ title: '', contestant1: '', contestant2: '' }),
      ]),
    });
  }

  ngOnInit() {
    this.data.cv = this.voteService.getData('cv');
    this.data.user = this.voteService.getData('payload', 'pollway');
    this.pollOption = this.data.cv.type;
  }

  get pollformArray() {
    return this.pollForm.get('pollformArray') as FormArray;
  }
  fgFromFc(data: { title: string; [index: string]: string }) {
    return this.fb.group(data);
  }

  setControl(fg: number) {}

  close(ind: number, open) {
    this.pollService.close(ind, open);
    this.updatePoll();
  }

  addPoll() {
    this.pollService.addPoll();
    this.updatePoll();
    this.pollformArray.push(
      this.fb.group({ title: '', contestant1: '', contestant2: '' }),
    );
  }

  removePoll(ind: number) {
    this.pollService.removePoll(ind);
    this.updatePoll();
  }
  updatePoll() {
    this.polls = this.pollService.polls;
  }

  addTextCandidate(index: number) {
    this.pollService.addTextCandidate(index);
  }
  addImageCandidate(index: number) {
    this.pollService.addImageCandidate(index);
  }
  removeTextCandidate(index: number, col: number) {
    this.pollService.removeTextCandidate(index, col);
    this.updatePoll();
  }

  removeImageCandidate(index: number, col: number) {
    this.pollService.removeImageCandidate(index, col);
    this.updatePoll();
  }
}
