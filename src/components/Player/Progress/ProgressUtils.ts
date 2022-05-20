import { useEffect, useState } from 'react';

export const SPIKES_WIDTH = 90;

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const useRandomData = (width: number): number[] => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [...Array(width)].map(() => getRandomInt(33, 100));
    setData(newData);
  }, [width]);

  return data;
};
