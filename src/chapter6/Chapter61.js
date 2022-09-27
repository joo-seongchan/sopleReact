import { useEffect, useState } from "react";
import { Chapter6 } from "../chapter6/Chapter6";

const reservdNotifications = [
  { message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { message: "점심 식사 시간입니다" },
  { message: "이제 곧 미팅이 시작됩니다." },
];

export const Chapter61 = () => {
  const [message, setMessage] = useState({ notifications: [] });
  const { notifications } = message;

  const componentDidMount = () => {
    let timer = setInterval(() => {
      if (notifications.length < reservdNotifications.length) {
        const index = notifications.length;
        notifications.push(reservdNotifications[index]);
        console.log(notifications[index]);
        setMessage({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 3000);
  };
  componentDidMount();

  return (
    <div>
      {message.notifications.map((notification) => {
        return (
          <Chapter6 key={notification.message} message={notification.message} />
        );
      })}
    </div>
  );
};
