import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import api from '~/services/api';

import {
  Wrapper,
  Badge,
  Icon,
  Menu,
  Notification,
  Text,
  Timestamp,
  Scrollable,
} from './styles';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const hasUnread = useMemo(() => !!notifications.find(n => n.read === false), [
    notifications,
  ]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');
      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: enUS }
        ),
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Wrapper>
      <Badge onClick={handleToggleVisibility} hasUnread={hasUnread}>
        <Icon />
      </Badge>
      <Menu isVisible={isVisible}>
        <Scrollable>
          {notifications &&
            notifications.length &&
            notifications.map(notification => (
              <Notification
                key={notification._id}
                unread={!notification.read}
                onClick={() => handleMarkAsRead(notification._id)}
              >
                <Text>{notification.content}</Text>
                <Timestamp>{notification.timeDistance}</Timestamp>
              </Notification>
            ))}
        </Scrollable>
      </Menu>
    </Wrapper>
  );
}

export default Notifications;
