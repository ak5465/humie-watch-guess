import { publicUrl } from '../../utils/publicUrl';

export const surprisedPathwayScenes = [
  {
    id: 'surprised-1',
    title: 'Show Clip #1',
    youtubeId: 'XXXXXXXXXXX',
    startSeconds: 0,
    endSeconds: 15,
    thumbnail: publicUrl('/placeholder-thumbs/scene1.svg'),
    reasonOptions: [
      { id: 'big-surprise', label: 'Something surprised her' },
      { id: 'unexpected-guest', label: 'Someone showed up unexpectedly' },
      { id: 'new-place', label: 'She went somewhere new' },
    ],
  },
  {
    id: 'surprised-2',
    title: 'Show Clip #2',
    youtubeId: 'XXXXXXXXXXX',
    startSeconds: 0,
    endSeconds: 15,
    thumbnail: publicUrl('/placeholder-thumbs/scene2.svg'),
    reasonOptions: [
      { id: 'did-not-expect', label: 'She did not expect that' },
      { id: 'plot-twist', label: 'The story took a turn' },
      { id: 'sudden-change', label: 'Things changed suddenly' },
    ],
  },
  {
    id: 'surprised-3',
    title: 'Show Clip #3',
    youtubeId: 'XXXXXXXXXXX',
    startSeconds: 0,
    endSeconds: 15,
    thumbnail: publicUrl('/placeholder-thumbs/scene3.svg'),
    reasonOptions: [
      { id: 'not-invited', label: 'She was not invited to play' },
      { id: 'hidden-thing', label: 'She found something hidden' },
      { id: 'loud-noise', label: 'Something loud happened' },
    ],
  },
];
