import { getActivePathway } from '../data/pathways';

export function buildRoundOptions(pathway = getActivePathway()) {
  return [...pathway.scenes];
}

export function createRound(roundType, pathway = getActivePathway()) {
  const { emotion, scenes } = pathway;
  const correctScene = scenes[Math.floor(Math.random() * scenes.length)];

  return {
    roundType,
    pathwayId: pathway.id,
    targetEmotion: emotion,
    correctScene: {
      ...correctScene,
      emotion,
    },
    options: buildRoundOptions(pathway).map((scene) => ({
      ...scene,
      emotion,
    })),
    selectedScene: null,
    selectedEmotion: null,
    selectedReason: null,
  };
}
