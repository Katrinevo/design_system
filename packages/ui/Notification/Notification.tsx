import React from "react";
import {
  Wrapper,
  Title,
  Message
} from "./Notification.styles";

import {
  NotificationProps
} from "./Notification.types";

export const Notification:
React.FC<NotificationProps> = ({
  title,
  message,
  type = "info"
}) => (
  <Wrapper type={type}>
    <Title>{title}</Title>
    <Message>
      {message}
    </Message>
  </Wrapper>
);