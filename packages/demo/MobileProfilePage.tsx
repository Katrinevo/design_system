import React from "react";
import styled from "styled-components";

import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { CheckboxGroup } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { Notification } from "../ui/Notification";

const Phone = styled.div`
  width: 390px;
  min-height: 844px;

  padding: 24px;
  margin: auto;

  border: 3px solid #ccc;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background: white;
`;

export const MobileProfilePage =
() => (
  <Phone>
    <Notification
      title="Profile"
      message="Edit your data"
      type="info"
    />

    <Card
      title="User"
      variant="outlined"
    >
      <div />
    </Card>

    <Input
      label="Name"
      placeholder="Kate"
    />

    <Input
      label="Phone"
      placeholder="+61..."
    />

    <CheckboxGroup
      options={[
        {
          id: 1,
          label:
            "Allow notifications",
          checked: true
        }
      ]}
    />

    <Button
      title="Save"
    />
  </Phone>
);