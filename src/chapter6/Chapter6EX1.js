import React from "react";
import Notification from "./Chapter6EX";

const reservdNotifications = [
  {
    id: 0,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 1,
    message: "점심 식사 시간입니다",
  },
  {
    id: 2,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservdNotifications.length) {
        const index = notifications.length;
        notifications.push(reservdNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
