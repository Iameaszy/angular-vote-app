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
  textCandidates: String[];
  imageCandidates: String[];
  polls: { title: String; open: Boolean; ind: number }[];
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
    this.updateCandidate();
    this.updatePolls();
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

  setControl(fg: number) {
    console.log('fg:', fg);
    console.log('polls:', this.polls);
    let i = this.polls[fg].ind;
    ++i;
    console.log('i:', i);
    this.pollformArray.insert(fg, this.fb.control({ a: '' }));
    this.polls[fg].ind = i;
  }

  close(ind: number, open) {
    this.pollService.close(ind, open);
    this.updatePolls();
  }

  addPoll() {
    this.pollService.addPoll();
    this.updatePolls();
    this.pollformArray.push(
      this.fb.group({ title: '', contestant1: '', contestant2: '' }),
    );
  }

  removePoll(ind: number) {
    this.pollService.removePoll(ind);
    this.updatePolls();
  }
  updateCandidate() {
    this.textCandidates = this.pollService.textCandidates;
    this.imageCandidates = this.pollService.imageCandidates;
  }
  updatePolls() {
    this.polls = this.pollService.polls;
  }
  addTextCandidate() {
    this.pollService.addTextCandidate();
    this.updateCandidate();
  }
  addImageCandidate() {
    this.pollService.addImageCandidate();
    this.updateCandidate();
  }

  removeTextCandidate(index: Number) {
    this.pollService.removeTextCandidate(index);
    this.updateCandidate();
  }

  removeImageCandidate(index: Number) {
    this.pollService.removeImageCandidate(index);
    this.updateCandidate();
  }
}
