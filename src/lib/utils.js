import { segments } from "../localstore";

export const weelColors = () => {
  let arr = [];
  let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  segments.forEach((el) => {
    let color = colors.shift();
    arr.push(color);
    colors.push(color);
  });

  return arr;
};
