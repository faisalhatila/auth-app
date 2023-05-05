import React from "react";
import { observer } from "mobx-react-lite";
import Header from "../../Components/Header/Header";
import Token from "../../Components/Token/Token";
import { useStore } from "../../Hooks/useStore";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Tokens = observer(() => {
  const {
    rootStore: { tokensStore },
  } = useStore();
  return (
    <div data-testid="tokens">
      <Header />
      <div className="container">
        {!!tokensStore.getTokens.length ? (
          tokensStore.getTokens.map((token, i) => {
            const obj = {
              ...token,
              percentage: token.time,
            };
            return (
              <Token
                key={token.id}
                circleWidth={120}
                token={obj}
                last={i === tokensStore.getTokens.length - 1}
              />
            );
          })
        ) : (
          <div
            className={[
              classes["no-data-wrapper"],
              "d-flex",
              "flex-column",
              "justify-content-center",
              "align-items-center",
            ].join(" ")}
            data-testid="no-data"
          >
            <p>No App Affiliated</p>
            <p>
              Click <Link to="/add-token">Here</Link> to add app.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
});

export default Tokens;
