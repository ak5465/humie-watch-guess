import { publicUrl } from '../../utils/publicUrl';

/**
 * SAD PATHWAY — all clips for when Humie feels sad.
 */
export const sadPathwayScenes = [
  {
    id: 'sad-1',
    title: 'Show Clip #1',
    youtubeId: '4hI7DPS2yNY',
    startSeconds: 141,
    endSeconds: 156,
    thumbnail: publicUrl('/placeholder-thumbs/scene1.svg'),
    revealCorrect: "That's right! Humie felt sad watching this moment.",
    revealIncorrect: "Not quite — and that's okay! Humie was sad about a different moment.",
    reasonOptions: [
      {
        id: 'surprised-left-out',
        label: 'Something unexpected happened to the character',
        isCorrect: true,
        feedback: 'Yes! Humie felt sad seeing how surprised and left out the character felt.',
      },
      {
        id: 'lost-toy',
        label: 'The character lost a favorite toy',
        isCorrect: false,
        feedback: 'That can feel sad — but Humie was sad about something else in this clip.',
      },
      {
        id: 'too-tired',
        label: 'The character was too tired',
        isCorrect: false,
        feedback: 'Maybe sometimes — but Humie felt sad for a different reason here.',
      },
    ],
  },
  {
    id: 'sad-2',
    title: 'Show Clip #2',
    youtubeId: '4hI7DPS2yNY',
    startSeconds: 176,
    endSeconds: 210,
    thumbnail: publicUrl('/placeholder-thumbs/scene2.svg'),
    revealCorrect: "That's right! Humie is sad that Bingo is sad in this video.",
    revealIncorrect: "Not quite — and that's okay! Humie was feeling sad about a different moment in the show.",
    reasonOptions: [
      {
        id: 'bingo-feelings',
        label: 'The character was struggling with expressing feelings',
        isCorrect: true,
        feedback: 'Yes! Humie felt sad watching the character have a hard time sharing feelings.',
      },
      {
        id: 'bingo-tired',
        label: 'The character was just tired',
        isCorrect: false,
        feedback: 'Maybe sometimes — but Humie felt sad because the character was having trouble with feelings.',
      },
      {
        id: 'bingo-play',
        label: 'The character wanted to keep playing',
        isCorrect: false,
        feedback: 'That might feel frustrating — but Humie felt sad seeing the character struggle to express how they felt.',
      },
    ],
  },
  {
    id: 'sad-3',
    title: 'Show Clip #3',
    youtubeId: '4hI7DPS2yNY',
    startSeconds: 359,
    endSeconds: 388,
    thumbnail: publicUrl('/placeholder-thumbs/scene3.svg'),
    revealCorrect: "That's right! Humie felt sad watching this part of the show.",
    revealIncorrect: "Not quite — and that's okay! Humie was sad about a different clip.",
    reasonOptions: [
      {
        id: 'hard-moment',
        label: 'Something hard happened in the story',
        isCorrect: true,
        feedback: 'Yes! Humie felt sad watching a tough moment for the characters.',
      },
      {
        id: 'felt-lonely',
        label: 'The character felt lonely',
        isCorrect: false,
        feedback: 'That can feel sad — but Humie noticed something else in this clip.',
      },
      {
        id: 'bad-day',
        label: 'The character had a hard day',
        isCorrect: false,
        feedback: 'Maybe — but Humie felt sad for a different reason in this scene.',
      },
    ],
  },
];
