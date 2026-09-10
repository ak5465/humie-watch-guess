import { publicUrl } from '../utils/publicUrl';

export const EMOTIONS = {
  sad: {
    id: 'sad',
    label: 'Sad',
    img: publicUrl('/assets/sad.png'),
    humieSprite: publicUrl('/assets/humieBigSad.png'),
  },
  happy: {
    id: 'happy',
    label: 'Happy',
    img: publicUrl('/assets/veryHappy.png'),
    humieSprite: publicUrl('/assets/humieBigSmile.png'),
  },
  surprised: {
    id: 'surprised',
    label: 'Surprised',
    img: publicUrl('/assets/surprised.png'),
    humieSprite: null,
  },
};

export const EMOTION_LIST = Object.values(EMOTIONS);
