import React from "react";
import classes from "./style.module.css";
import binance from "../../assets/logos/binance.png";
import reddit from "../../assets/logos/reddit.png";
import kucoin from "../../assets/logos/kucoin.png";
import coinbase from "../../assets/logos/coinbase.png";
import Header from "../../Components/Header/Header";
import { useStore } from "../../Hooks/useStore";
import { useNavigate, useLocation } from "react-router-dom";
const AddToken = (props) => {
  const location = useLocation();
  console.log({ location });

  const {
    rootStore: { tokensStore },
  } = useStore();
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = React.useState({});
  const [title, setTitle] = React.useState("");
  const icons = [
    {
      id: 1,
      icon: binance,
      title: "binance",
    },
    {
      id: 2,
      icon: reddit,
      title: "reddit",
    },
    {
      id: 3,
      icon: coinbase,
      title: "coinbase",
    },
    {
      id: 4,
      icon: kucoin,
      title: "kucoin",
    },
  ];
  const handleSelectedIcon = (obj) => setSelectedIcon(obj);
  const inputRef = React.useRef(null);

  const isValid = () => {
    if (!Object.keys(selectedIcon).length) {
      alert("Please select coin");
      return false;
    } else if (!title) {
      alert("Please write title");
      inputRef.current.focus();
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (isValid()) {
      const id = Math.floor(Math.random() * 1000000000);
      tokensStore.addToken(id, selectedIcon.icon, title, navigate);
    } else {
    }
  };
  return (
    <>
      <Header addToken />
      <div
        className={[
          classes["add-token-page-wrapper"],
          "container",
          "my-4",
        ].join(" ")}
      >
        <div>
          <p className={classes["select-icon-title"]}>Select Icon</p>
        </div>
        <div className={[classes["icons-wrapper"], "row"].join(" ")}>
          {icons.map((item) => (
            <div
              className={[
                classes["icon-img-wrapper"],
                selectedIcon.id === item.id &&
                  classes["icon-img-wrapper-selected"],
              ].join(" ")}
              key={item.id}
              onClick={() => handleSelectedIcon(item)}
            >
              <img alt={item.title} src={item.icon} />
            </div>
          ))}
        </div>
        <div>
          <p className={classes["select-icon-title"]}>Type Name</p>
        </div>
        <div className={classes["app-input-wrapper"]}>
          <input
            placeholder="Binance"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={inputRef}
          />
        </div>
        <div className={[classes["submit-button-wrapper"]].join(" ")}>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </>
  );
};

export default React.memo(AddToken);
