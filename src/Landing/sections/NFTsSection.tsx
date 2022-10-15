import Image from 'next/future/image';
import styled from 'styled-components';

import nftsImage from '@/assets/nfts.png';
import { Colors } from '@/styles/colors';

export const NFTsSection: React.FC = () => {
  return (
    <Container>
      <Image
        alt=""
        src={nftsImage}
        placeholder="blur"
        width={939.98}
        height={745.75}
        style={{
          marginLeft: -100,
          filter: 'saturate(120%)',
        }}
      />
      <Title>
        <span style={{ color: Colors.yellow100 }}>Manage and Share</span> <br />
        <span style={{ color: Colors.yellow400 }}>All Your Nfts</span> <br />
        in the Blockchain
      </Title>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  gap: 48px;
  align-items: center;
`;

const Title = styled.h3`
  margin-top: 48px;
  font-weight: 900;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.06em;
  color: ${Colors.gray400};
`;
