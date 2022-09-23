import React, { useState, useEffect } from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDriection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },

  messageText: {
    color: "black",
    fontSize: 16,
  },
};

export const Chapter6 = (props) => {
  const [i, setI] = useState(props);
  useEffect(() => {
    setI(props);
  }, [i]);

  return (
    <div style={styles.wrapper}>
      <span style={styles.messageText}>{i.message}</span>
    </div>
  );
};
