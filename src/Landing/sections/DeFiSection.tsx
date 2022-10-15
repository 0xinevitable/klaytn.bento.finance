import Image from 'next/future/image';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import arrowIllust from '@/assets/arrow.png';
import dashboardImage from '@/assets/dashboard.png';
import stakingImage from '@/assets/staking.png';
import { Colors } from '@/styles/colors';

type ButtonGroupProps = {
  selected: number;
  setSelected: (index: number) => void;
};
const ButtonGroup: React.FC<ButtonGroupProps> = ({ selected, setSelected }) => {
  return (
    <ButtonGroupContainer>
      <Button selected={selected === 0} onClick={() => setSelected(0)}>
        Dashboard
      </Button>
      <Button selected={selected === 1} onClick={() => setSelected(1)}>
        DeFis
      </Button>
      <Button selected={selected === 2} disabled>
        What Next?
      </Button>
    </ButtonGroupContainer>
  );
};
const ButtonGroupContainer = styled.div`
  width: 400px;
  padding: 6px;
  gap: 4px;

  display: flex;
  align-items: center;

  background: ${Colors.gray700};
  border-radius: 8px;
`;
const Button = styled.button<{ selected?: boolean }>`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;
  background: ${({ selected }) => (selected ? Colors.gray500 : 'transparent')};
  box-shadow: ${({ selected }) =>
    selected ? '0px 8px 12px rgba(0, 0, 0, 0.18)' : 'none'};
  border: 0;
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 103%;
  text-align: center;
  color: ${({ selected }) => (selected ? Colors.gray000 : Colors.gray400)};

  ${({ disabled, selected }) =>
    disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background: ${selected ? Colors.gray500 : Colors.gray600};
            box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.18);
          }
        `}
`;

export const DeFiSection: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <Container>
      <div className="showcase">
        <ButtonGroup selected={selected} setSelected={setSelected} />
        <div
          style={{
            marginTop: 24,
            position: 'relative',
            width: 760,
            flex: 1,
            display: 'flex',
          }}
        >
          <Image
            alt=""
            src={dashboardImage}
            placeholder="blur"
            width={760}
            height={452}
            style={{
              objectFit: 'cover',
              border: `1px solid ${Colors.gray500}`,
              borderRadius: 12,
              filter: 'saturate(120%)',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'all 0.2s ease-in-out',
              opacity: selected === 0 ? 1 : 0,
            }}
          />
          <Image
            alt=""
            src={stakingImage}
            width={760}
            height={452}
            style={{
              objectFit: 'cover',
              border: `1px solid ${Colors.gray500}`,
              borderRadius: 12,
              filter: 'saturate(120%)',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'all 0.2s ease-in-out',
              opacity: selected === 1 ? 1 : 0,
            }}
          />
        </div>
      </div>
      <div className="content">
        <Title>
          View All of Your Assets <br />
          from <span style={{ color: Colors.brand400 }}>
            Token Balances
          </span>{' '}
          <br />
          to <span style={{ color: Colors.brand200 }}>Staked Amounts</span>
        </Title>
        <Image
          alt=""
          src={arrowIllust}
          placeholder="blur"
          width={421}
          height={455}
          style={{
            filter: 'saturate(120%)',
          }}
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  margin-top: 80px;
  gap: 48px;

  .showcase,
  .content {
    display: flex;
    flex-direction: column;
  }

  .content {
    gap: 64px;
  }
`;
const Title = styled.h3`
  font-weight: 900;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.06em;
  color: ${Colors.gray400};
`;
