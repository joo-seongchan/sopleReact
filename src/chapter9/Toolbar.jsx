const style = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray",
  },
  greeting: {
    marginRight: 8,
  },
};

export const Toolbar = (props) => {
  const { isLoggedIn, onClickLogin, OnClickLogout } = props;
  return (
    <div style={style.wrapper}>
      {isLoggedIn && <span style={style.greeting}>환영합니다!</span>}

      {isLoggedIn ? (
        <button onClick={OnClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
};
