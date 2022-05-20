import { useState } from 'react';

export interface Player {
  playing: boolean;
  togglePlay(): void;
}

export const usePlayer = (): Player => {
  const [playing, setPlaying] = useState<boolean>(false);

  return {
    playing,
    togglePlay: () => setPlaying((v) => !v),
  };
};
