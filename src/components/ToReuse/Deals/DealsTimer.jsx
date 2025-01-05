import { useState, useEffect, useCallback } from "react";
import css from "./DealsTimer.module.css";

const DealsTimer = ({ targetDate }) => {
  // огортаю в useCallback щоб стабілізувати
  const calculateTimer = useCallback(() => {
    // Різниця між кінцевою та поточною датою
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  // додаю нолик до одного числа
  const pad = (num) => String(num).padStart(2, "0");

  // Інеціалізуємо стан time та оновлюємо залишковий час щосекундоно - setTime
  const [time, setTime] = useState(calculateTimer());

  // Створюємо інтервал для оновлення стану щосекунди
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimer());
    }, 1000);

    // повертаю функцію очищення, це важливо для очищення таймера при демонтажі компонента
    return () => clearInterval(timer);
  }, [calculateTimer]);

  // При завершенні таймера
  if (!time) return <span>The action is over!</span>;

  return (
    <>
      <p className={css.p}>Hurry, Before It’s Too Late!</p>
      <div className={css.timer}>
        <div className={css.numberWrapper}>
          <span className={css.number}>{pad(time.days)}</span>
          <span className={css.signature}>Days</span>
        </div>
        <div className={css.numberWrapper}>
          <span className={css.number}>{pad(time.hours)}</span>
          <span className={css.signature}>Hr</span>
        </div>
        <div className={css.numberWrapper}>
          <span className={css.number}>{pad(time.minutes)}</span>
          <span className={css.signature}>Mins</span>
        </div>
        <div className={css.numberWrapper}>
          <span className={css.number}>{pad(time.seconds)}</span>
          <span className={css.signature}>Sec</span>
        </div>
      </div>
    </>
  );
};

export default DealsTimer;
