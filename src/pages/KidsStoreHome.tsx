import React from "react";
import styled from "styled-components";

import { Button } from "../../packages/ui/Button";
import { Dropdown } from "../../packages/ui/Dropdown";
import { Card } from "../../packages/ui/Card";
import { Badge } from "../../packages/ui/Badge";
import { Notification } from "../../packages/ui/Notification";
import { FAB } from "../../packages/ui/FAB";

const Page = styled.div`
  min-height: 100vh;
  background: #eef5fc;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

const Logo = styled.h1`
  color: #0f4a8a;
  font-family: "JetBrains Mono";
  font-size: 42px;
`;

const Hero = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: #0f4a8a;
  font-size: 52px;
  font-family: "JetBrains Mono";
`;

const Subtitle = styled.p`
  color: #0f4a8a;
  font-size: 22px;
  max-width: 500px;
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const KidsStoreHome = () => {
  return (
    <Page>

      <Header>
        <Logo>KidsJoy</Logo>

        <Button title="Register" />
      </Header>

      <Notification
        title="Summer Sale"
        message="20% discount for all books!"
        type="warning"
      />

      <Hero>

        <Left>
          <Title>
            online store for kids
          </Title>

          <Subtitle>
            toys, books, creativity kits
            and everything for happy childhood
          </Subtitle>

          <br />

          <Dropdown
            label="Catalog"
            options={[
              "Toys",
              "Creativity",
              "Books",
              "Games"
            ]}
          />

          <br />
          <br />

          <Badge
            text="0+"
            variant="success"
          />
        </Left>

        <Right>
          <Card
            title="About us"
            variant="elevated"
          >
            <p>
              KidsJoy helps parents
              find safe and useful
              products for children.
            </p>
          </Card>
        </Right>

      </Hero>

      <h2
        style={{
          color:"#0f4a8a",
          fontFamily:"JetBrains Mono"
        }}
      >
        Popular products
      </h2>

      <ProductGrid>

        <Card
          title="Toy car"
          variant="filled"
        >
          <Badge text="3+" />
        </Card>

        <Card
          title="Drawing set"
          variant="outlined"
        >
          <Badge text="5+" />
        </Card>

        <Card
          title="ABC book"
          variant="elevated"
        >
          <Badge text="0+" />
        </Card>

      </ProductGrid>

      <FAB
        actions={[
          {
            id:1,
            icon:"☎"
          },
          {
            id:2,
            icon:"💬"
          },
          {
            id:3,
            icon:"❓"
          }
        ]}
      />

    </Page>
  );
};