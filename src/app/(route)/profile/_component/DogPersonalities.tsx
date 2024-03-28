import * as styles from "./_style/profile.css";
import DeleteBtn from "@/app/_assets/images/hashtag-delete-button.svg";
import { Dispatch, SetStateAction } from "react";

interface props {
  value: string;
  setData?: Dispatch<SetStateAction<string[]>>;
}

export default function DogPersonalities({ value, setData }: props) {
  const handleOnClick = () => {
    setData!((prev) => prev.filter((item) => item !== value));
  };

  return (
    <div className={styles.dogPersonality}>
      {value}
      {setData && (
        <DeleteBtn
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={handleOnClick}
        />
      )}
    </div>
  );
}
