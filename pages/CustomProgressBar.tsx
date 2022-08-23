import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const CustomProgressBar = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((oldvalue) => {
        let newValue = oldvalue + 10;
        if (newValue >= 98) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 2000);
  }, []);

  return <ProgressBar completed={completed} bgColor={"blue"} />;
};

export default CustomProgressBar;
