import { useCallback, useMemo, useState } from 'react';
import { getActivePathway } from '../../data/pathways';
import { createRound } from '../../utils/roundUtils';
import AskWhy from './AskWhy';
import GoodbyeOrNext from './GoodbyeOrNext';
import ModeIntro from './ModeIntro';
import Reflect from './Reflect';
import RevealScreen from './RevealScreen';
import RoundCauseToEffect from './RoundCauseToEffect';
import RoundEffectToCause from './RoundEffectToCause';
import './WatchGuessGame.css';

const SCREENS = {
  INTRO: 'intro',
  ROUND_EFFECT: 'roundEffect',
  ROUND_CAUSE: 'roundCause',
  REVEAL: 'reveal',
  ASK_WHY: 'askWhy',
  REFLECT: 'reflect',
  DONE: 'done',
};

export default function WatchGuessGame() {
  const pathway = useMemo(() => getActivePathway(), []);
  const [screen, setScreen] = useState(SCREENS.INTRO);
  const [round, setRound] = useState(null);
  const [roundCount, setRoundCount] = useState(0);

  const startRound = useCallback((count) => {
    const roundType = count % 2 === 0 ? 'effectToCause' : 'causeToEffect';
    const nextRound = createRound(roundType, pathway);
    setRound(nextRound);
    setScreen(roundType === 'effectToCause' ? SCREENS.ROUND_EFFECT : SCREENS.ROUND_CAUSE);
  }, [pathway]);

  const handleIntroStart = () => {
    setRoundCount(0);
    startRound(0);
  };

  const handleSelectScene = (scene) => {
    setRound((current) => (current ? { ...current, selectedScene: scene } : current));
  };

  const handleSelectEmotion = (emotionId) => {
    setRound((current) => (current ? { ...current, selectedEmotion: emotionId } : current));
  };

  const handleSelectReason = (reasonId) => {
    setRound((current) => (current ? { ...current, selectedReason: reasonId } : current));
  };

  const handleRoundContinue = () => {
    setScreen(SCREENS.REVEAL);
  };

  const handleRevealContinue = () => {
    setScreen(SCREENS.ASK_WHY);
  };

  const handleAskWhyContinue = () => {
    setScreen(SCREENS.REFLECT);
  };

  const handleReflectAnswer = () => {
    setScreen(SCREENS.DONE);
  };

  const handleWatchAnother = () => {
    const nextCount = roundCount + 1;
    setRoundCount(nextCount);
    startRound(nextCount);
  };

  const handleAllDone = () => {
    setRound(null);
    setRoundCount(0);
    setScreen(SCREENS.INTRO);
  };

  return (
    <div className="watch-guess-app">
      {screen === SCREENS.INTRO && <ModeIntro onStart={handleIntroStart} />}

      {screen === SCREENS.ROUND_EFFECT && round && (
        <RoundEffectToCause
          round={round}
          onSelectScene={handleSelectScene}
          onContinue={handleRoundContinue}
        />
      )}

      {screen === SCREENS.ROUND_CAUSE && round && (
        <RoundCauseToEffect
          round={round}
          onSelectEmotion={handleSelectEmotion}
          onContinue={handleRoundContinue}
        />
      )}

      {screen === SCREENS.REVEAL && round && (
        <RevealScreen round={round} onContinue={handleRevealContinue} />
      )}

      {screen === SCREENS.ASK_WHY && round && (
        <AskWhy
          round={round}
          onSelectReason={handleSelectReason}
          onContinue={handleAskWhyContinue}
        />
      )}

      {screen === SCREENS.REFLECT && round && (
        <Reflect emotionId={round.targetEmotion} onAnswer={handleReflectAnswer} />
      )}

      {screen === SCREENS.DONE && (
        <GoodbyeOrNext
          onWatchAnother={handleWatchAnother}
          onAllDone={handleAllDone}
        />
      )}
    </div>
  );
}
