import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'How was your day?',
    answerA: 'Awesome!!',
    answerB: 'Worst :(',
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;