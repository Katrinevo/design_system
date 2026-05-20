import React from "react";
import styled from "styled-components";

import { Notification } from "../ui/Notification";
import { Tabs } from "../ui/Tabs";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";
import { CheckboxGroup } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { SkeletonLoader } from "../ui/SkeletonLoader";
import { FAB } from "../ui/FAB";

const Page = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Row = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const DashboardPage = () => (
  <Page>
    <Notification
      title="Success"
      message="Design system loaded"
      type="success"
    />

    <Tabs
      tabs={[
        {
          id: 1,
          label: "Dashboard",
          active: true
        },
        {
          id: 2,
          label: "Analytics"
        },
        {
          id: 3,
          label: "Settings"
        }
      ]}
    />

    <Row>
      <Card
        title="Revenue"
        variant="elevated"
      >
        <Badge
          text="+12%"
          variant="success"
        />
      </Card>

      <Card
        title="Users"
        variant="filled"
      >
        <Badge text="NEW" />
      </Card>
    </Row>

    <Input
      placeholder="Search..."
    />

    <Dropdown
      label="Period"
      options={[
        "Month",
        "Week",
        "Day"
      ]}
    />

    <CheckboxGroup
      multiple
      options={[
        {
          id: 1,
          label: "Email",
          checked: true
        },
        {
          id: 2,
          label: "Push",
          checked: false
        }
      ]}
    />

    <Button
      title="Save changes"
    />

    <SkeletonLoader />

    <FAB
      actions={[
        {
          id: 1,
          icon: "✎"
        },
        {
          id: 2,
          icon: "🗑"
        },
        {
          id: 3,
          icon: "⚙"
        }
      ]}
    />
  </Page>
);