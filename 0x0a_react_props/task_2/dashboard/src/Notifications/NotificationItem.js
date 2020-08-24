import React from 'react';
import './Notifications.css';

function NotificationItems(props) {
  if (props.html) {
    return (
      <li data-notification-type={props.type} dangerouslySetInnerHTML={{ __html: props.html }}></li>
    );
  }
  return (
    <li data-notification-type={props.type}>{props.value}</li>
  )
}

export default NotificationItems;
