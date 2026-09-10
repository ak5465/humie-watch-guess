export function isClipGuessCorrect(round) {
  if (round.roundType === 'effectToCause') {
    return round.selectedScene?.id === round.correctScene?.id;
  }

  return round.selectedEmotion === round.targetEmotion;
}

export function getRevealMessage(round) {
  const scene = round.correctScene;

  if (isClipGuessCorrect(round)) {
    return {
      main: scene.revealCorrect
        || `That's right! Humie felt ${round.targetEmotion} watching this clip.`,
      sub: null,
      tone: 'correct',
    };
  }

  return {
    main: scene.revealIncorrect
      || "Not quite — and that's okay! Humie felt something different watching this clip.",
    sub: "Everyone notices different things — and that's okay.",
    tone: 'incorrect',
  };
}

export function getSelectedReasonOption(round) {
  const options = round.correctScene?.reasonOptions || [];
  return options.find((option) => option.id === round.selectedReason) || null;
}

export function isReasonCorrect(round) {
  const selected = getSelectedReasonOption(round);
  return Boolean(selected?.isCorrect);
}

export function getReasonFeedback(round) {
  const selected = getSelectedReasonOption(round);
  if (!selected) return null;

  if (selected.feedback) {
    return selected.feedback;
  }

  if (selected.isCorrect) {
    return 'Great thinking!';
  }

  return "That's one idea — there are many reasons we feel the way we do.";
}
