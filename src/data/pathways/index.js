import { happyPathwayScenes } from './happy';
import { sadPathwayScenes } from './sad';
import { surprisedPathwayScenes } from './surprised';

export const PATHWAYS = {
  sad: {
    id: 'sad',
    emotion: 'sad',
    label: 'Sad',
    scenes: sadPathwayScenes,
  },
  happy: {
    id: 'happy',
    emotion: 'happy',
    label: 'Happy',
    scenes: happyPathwayScenes,
  },
  surprised: {
    id: 'surprised',
    emotion: 'surprised',
    label: 'Surprised',
    scenes: surprisedPathwayScenes,
  },
};

/**
 * Which emotion pathway is running.
 * 'sad' | 'happy' | 'surprised'
 *
 * Sad pathway  → Humie always feels sad, clips from pathways/sad.js
 * Happy pathway → Humie always feels happy, clips from pathways/happy.js
 */
export const ACTIVE_PATHWAY_ID = 'sad';

export function getActivePathway() {
  return PATHWAYS[ACTIVE_PATHWAY_ID];
}

export function getPathwayScenes(pathwayId = ACTIVE_PATHWAY_ID) {
  return PATHWAYS[pathwayId]?.scenes ?? [];
}

export const watchListScenes = PATHWAYS[ACTIVE_PATHWAY_ID].scenes;
