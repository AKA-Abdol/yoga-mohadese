export const divideHistoryFuture = <T>(oldArr: T[], newArr: T[]) => {
  const history = oldArr.filter((item) => !newArr.includes(item));
  const future = newArr.filter((item) => !oldArr.includes(item));
  return {
    history,
    future,
  };
};
