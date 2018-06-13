import { Injectable } from '@angular/core';

@Injectable()
export class PollService {
  index = 1;
  polls = [
    {
      title: `Poll ${this.index++}`,
      open: true,
      textCandidates: ['Conteststant 1', 'Conteststant 2'],
      imageCandidates: ['Link 1', 'Link 2'],
    },
  ];

  constructor() {}

  close(ind: number, open: boolean) {
    this.polls[ind].open = open;
  }

  addPoll() {
    this.polls.push({
      title: `Poll ${this.index++}`,
      open: true,
      textCandidates: ['Conteststant 1', 'Conteststant 2'],
      imageCandidates: ['Link 1', 'Link 2'],
    });
  }

  removePoll(ind: number) {
    this.polls = this.polls.filter((poll, index) => {
      if (ind !== index) {
        return true;
      }
    });
  }
  addTextCandidate(index: number) {
    let len = this.polls[index].textCandidates.length;
    this.polls[index].textCandidates.push(`Conteststant ${++len}`);
  }
  addImageCandidate(index: number) {
    let len = this.polls[index].textCandidates.length;
    this.polls[index].textCandidates.push(`Conteststant ${++len}`);
  }

  removeTextCandidate(index: number, col: number) {
    this.polls[index].textCandidates = this.polls[index].textCandidates.filter(
      (candidate, ind) => {
        if (ind === col) {
          return false;
        }
        return true;
      },
    );
  }

  removeImageCandidate(index: number, col) {
    this.polls[index].textCandidates = this.polls[index].textCandidates.filter(
      (candidate, ind) => {
        if (ind === col) {
          return false;
        }
        return true;
      },
    );
  }
}
