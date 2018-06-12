import { Injectable } from '@angular/core';

@Injectable()
export class PollService {
  index: any = 1;
  textCandidates: string[] = ['Contestant 1', 'Contestant 2'];
  imageCandidates: string[] = ['Link 1', 'Link 2'];
  textIndex: any = this.textCandidates.length;
  imageIndex: any = this.imageCandidates.length;
  polls = [{ title: `Poll ${this.index++}`, open: true, ind: 2 }];

  constructor() {}

  close(ind: number, open: boolean) {
    this.polls[ind].open = open;
  }

  addPoll() {
    this.polls.push({ title: `Poll ${this.index++}`, open: true, ind: 2 });
  }

  removePoll(ind: number) {
    this.polls = this.polls.filter((poll, index) => {
      if (ind !== index) {
        return true;
      }
    });
  }
  addTextCandidate() {
    this.textCandidates.push(`Contestant ${++this.textIndex}`);
  }
  addImageCandidate() {
    this.imageCandidates.push(`Link ${++this.imageIndex}`);
  }

  removeTextCandidate(index: Number) {
    this.textCandidates = this.textCandidates.filter((candidate, ind) => {
      if (ind === index) {
        return false;
      }
      return true;
    });
  }

  removeImageCandidate(index: Number) {
    this.imageCandidates = this.imageCandidates.filter((candidate, ind) => {
      if (ind === index) {
        return false;
      }
      return true;
    });
  }
}
