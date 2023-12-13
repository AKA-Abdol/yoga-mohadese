export const level2farsi = (level: number) => {
  let levelString: string;
  switch (level) {
    case 1:
      levelString = "مقدماتی";
      break;
    case 2:
      levelString = "متوسط";
      break;
    case 3:
      levelString = "پیشرفته";
      break;
    default:
      levelString = "ترم";
  }
  return levelString;
};
