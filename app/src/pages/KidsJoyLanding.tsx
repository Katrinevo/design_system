import React from "react";
import styled from "styled-components";

import { Button } from "../../../packages/ui/Button";
import { Card } from "../../../packages/ui/Card";
import { Badge } from "../../../packages/ui/Badge";
import { Notification } from "../../../packages/ui/Notification";

const Page = styled.div`
  min-height: 100vh;
  background: #dce6f2;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

const Cloud = styled.div<{
  top: string;
  left?: string;
  right?: string;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  width: 180px;
  height: 90px;

  background: white;
  border-radius: 50px;
  opacity: .9;
`;

const Sun = styled.div`
  position: absolute;
  left: -40px;
  top: 420px;

  width: 180px;
  height: 180px;

  background: #f6d85c;
  border-radius: 50%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 52px;
  font-weight: bold;
  color: #0f4a8a;
  font-family: "JetBrains Mono";
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 24px;
`;

const Hero = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 96px;
  color: #0f4a8a;
  font-family: "JetBrains Mono";
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 42px;
  color: #0f4a8a;
  font-family: "JetBrains Mono";
`;

const SaleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #0f4a8a;
  font-size: 64px;
  font-family: "JetBrains Mono";
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 40px;
`;

const ProductImage = styled.div`
  font-size: 100px;
  text-align: center;
  margin-top: 20px;
`;

export const KidsJoyLanding = () => {
  return (
    <Page>

      <Cloud top="20px" left="-20px" />
      <Cloud top="120px" left="200px" />
      <Cloud top="320px" right="40px" />

      <Sun />

      <Header>
        <Logo>KidsJoy</Logo>

        <ButtonRow>
          <Button title="Log in" />
          <Button title="Register" />
        </ButtonRow>
      </Header>

      <Hero>
        <Title>
          Online store for your kids!
        </Title>

        <Subtitle>
          toys, books, creativity kits and everything for happy childhood
        </Subtitle>
      </Hero>

      <SaleWrapper>
        <Notification
          title="Summer sales"
          message="20% discount for all books!"
          type="success"
        />
      </SaleWrapper>

      <SectionTitle>
        Popular products
      </SectionTitle>

      <ProductGrid>

        <Card
          title="Toy car"
          variant="filled"
        >
          <>
            <Badge text="3+" />
            <ProductImage>🚗</ProductImage>
          </>
        </Card>

        <Card
          title="Fairy tales"
          variant="filled"
        >
          <>
            <Badge text="0+" />
            <ProductImage>📖</ProductImage>
          </>
        </Card>

        <Card
          title="Drawing set"
          variant="filled"
        >
          <>
            <Badge text="5+" />
            <ProductImage>🎨</ProductImage>
          </>
        </Card>

      </ProductGrid>

    </Page>
  );
};