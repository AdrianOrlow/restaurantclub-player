import * as React from 'react';
import {
  Bar,
  BarProgress,
  Container,
  SpikesContainer,
  Text,
} from './ProgressStyle';
import { SPIKES_WIDTH, useRandomData } from './ProgressUtils';

const Progress: React.FC = () => {
  const randomData = useRandomData(SPIKES_WIDTH);

  return (
    <>
      <Container>
        <Text>1:47</Text>
        <Bar>
          <BarProgress value={75} />
        </Bar>
        <Text>4:21</Text>
      </Container>
      <SpikesContainer>
        {randomData.map((v, i) => (
          <span key={i} style={{ height: `${v}%` }} />
        ))}
      </SpikesContainer>
    </>
  );
};

export default Progress;
