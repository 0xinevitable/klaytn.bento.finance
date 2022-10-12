import Image from 'next/future/image';
import React from 'react';
import styled from 'styled-components';

import backgroundImage from '@/assets/background.png';
import bitcoinIllust from '@/assets/bitcoin.png';
import limeIllust from '@/assets/lime.png';
import walletIllust from '@/assets/wallet.png';
import { Colors } from '@/styles/colors';

const LandingPage = () => {
  return (
    <Container>
      <NavigationWrapper />
      <Header>
        <Card>
          <CardText>
            지갑도 여러 개 쓰는데 <br />
            뭐에 들었나 보려면, <br />
          </CardText>
          <CardText className="red">
            하나씩 계속 <br />
            왔다갔다 해야 하고
          </CardText>
          <Image
            alt="Wallet"
            src={walletIllust}
            width={314.54}
            height={287.74}
            style={{
              position: 'absolute',
              zIndex: 5,
              filter: 'saturate(120%)',
              bottom: -114.74,
              left: 4,
            }}
          />
        </Card>
        <Card>
          <CardText className="red">
            디파이도 <br />
            여러 개 투자 중이니까, <br />
          </CardText>
          <CardText>
            NFT 가격도 <br />
            실시간으로 보고 싶고 <br />
          </CardText>
          <Image
            alt="Bitcoin"
            src={bitcoinIllust}
            width={255}
            height={232}
            style={{
              position: 'absolute',
              zIndex: 5,
              filter: 'saturate(120%)',
              bottom: -76,
              left: 40,
            }}
          />
        </Card>
        <StatusQuoCard>
          <span className="subtitle">클레이튼 위에 있는</span>
          <span className="title">
            내 자산, 매일매일 <br />
            한꺼번에 살펴보고 싶은데.
          </span>

          <Image
            alt="Lime"
            src={limeIllust}
            width={341}
            height={289}
            style={{
              position: 'absolute',
              zIndex: 5,
              top: -35,
              right: 0,
            }}
          />
        </StatusQuoCard>
      </Header>
      <Banner>
        <Image
          alt=""
          src={backgroundImage}
          placeholder="blur"
          sizes="100vw"
          fill
        />
        <BannerForeground>
          <div className="content">
            <div className="klaytn">
              <h1 className="title">
                클레이튼 최초 <br />
                오픈소스 대시보드
              </h1>
              <div className="klaytn-gradient"></div>
            </div>
            <div className="bento">
              <div className="bento-gradient"></div>
              <h2 className="title">벤토에서 가능해요.</h2>
            </div>
          </div>
        </BannerForeground>
      </Banner>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1332px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const NavigationWrapper = styled.nav`
  margin-top: 42px;
  margin-bottom: 28px;
  width: 100%;
  height: 72px;
`;

const Header = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  gap: 22px;
`;
const Card = styled.div`
  position: relative;
  width: 320px;
  height: 100%;
  background: ${Colors.gray800};
  border-radius: 36px;

  padding: 28px 23px;
`;
const CardText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: ${Colors.gray400};

  &.red {
    color: ${Colors.brand400};
  }
`;

const StatusQuoCard = styled.div`
  position: relative;
  width: 656px;
  height: 100%;
  flex: 1;
  background: #d9f15c;
  border-radius: 36px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 40px 38px;
  filter: saturate(120%);

  .subtitle {
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    /* or 38px */

    letter-spacing: -0.03em;

    color: #30370a;
  }

  .title {
    font-weight: 800;
    font-size: 48px;
    line-height: 120%;
    /* or 58px */

    letter-spacing: -0.03em;

    color: #829c1b;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 512px;
  position: relative;
  overflow: hidden;

  border-radius: 36px;
  background-color: ${Colors.black};
  filter: saturate(120%);
`;
const BannerForeground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 695px;
    height: 217px;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: fit-content;
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 100%;
    letter-spacing: -0.06em;
    color: ${Colors.gray000};
  }

  .klaytn-gradient {
    margin-left: 18px;
    height: 64px;
    flex: 1;
    background: linear-gradient(180deg, #ff813a 0%, #b91d1e 100%, #ff0608 100%);
    border-radius: 36px;
  }

  & div.klaytn {
    display: flex;
    align-items: flex-end;
    width: 100%;
    flex: 1;
  }

  & div.bento {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    flex: 1;
  }

  .bento-gradient {
    margin-right: 18px;
    height: 64px;
    flex: 1;
    background: linear-gradient(180deg, #ff3856 0%, #c60126 100%);
    border-radius: 36px;
  }
`;
