/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Clock } from "assets/static/icon";

function Countdown() {
  const calculateTimeLeft = () => {
    // new Date("dec 26, 2021 22:50:00").getTime();
    // let year = new Date().getFullYear();
    // const difference =
    //   +new Date("Dec 31, 2021 0:00:00").getTime() - +new Date();
    const difference = +new Date(`2022-01-01`) - +new Date();
    // const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <>
      {timerComponents.length ? (
        <span className="sm5:text-5 sm5:mb-6 text-6 text-base-dark-6 bids flex sm1:flex-col sm2:flex-col sm3:flex-col sm4:flex-col sm5:flex-col mb-13 items-center">
          <span className="flex sm1:flex-row sm2:flex-row sm3:flex-row sm4:flex-row sm5:flex-row items-center">
            <span className="pr-3">
              <Clock />
            </span>
            Early bids will end in
          </span>
          <span className="text-green pl-3">{timerComponents}</span>
        </span>
      ) : (
        <span className="sm5:text-5 sm5:mb-6 text-6 text-base-dark-6 bids flex sm1:flex-col sm2:flex-col sm3:flex-col sm4:flex-col sm5:flex-col mb-13 items-center">
          <span className="flex sm1:flex-row sm2:flex-row sm3:flex-row sm4:flex-row sm5:flex-row items-center">
            <span className="pr-3">
              <Clock />
            </span>
            Early bids is time out
          </span>
        </span>
      )}
    </>
  );
}

export default Countdown;

// import React, { useState, useEffect } from "react";

// import { Clock } from "public/static/icon";

// export default function Countdown() {
//   const count = () => {
//     const countDownDate = new Date("dec 26, 2021 22:50:00").getTime();
//     const now = new Date().getTime();
//     let distance = countDownDate - now;
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     const milliseconds = Math.floor(distance % 1000);
//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//       milliseconds,
//     };
//   };
//   const [countdown, setCountdown] = useState(count());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountdown(count());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const counting =
//     countdown.days && countdown.hours && countdown.minutes && countdown.seconds;

//   const Timer = () => {
//     if (counting) {
//       return (
//         <span className="sm5:text-5 sm5:mb-6 text-6 text-base-dark-6 bids flex mb-13 items-center">
//           <span className="pr-3">
//             <Clock />
//           </span>
//           Early bids will end in
//           <span className="text-green pl-3">
//             {countdown.days} Days {countdown.hours} Hours {countdown.minutes}{" "}
//             Minutes {countdown.seconds} Seconds
//           </span>
//         </span>
//       );
//     }

//     return (
//       <span className="sm5:text-5 sm5:mb-6 text-6 text-base-dark-6 bids flex mb-13 items-center">
//         done
//       </span>
//     );
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <Timer />
//       {/* {countdown.days} Days {countdown.hours} Hours {countdown.minutes} Minutes{" "}
//       {countdown.seconds} Seconds */}
//     </div>
//   );
// }
