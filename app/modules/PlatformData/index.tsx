"use client";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { styled } from "@/stitches.config";
import { Pie } from "react-chartjs-2";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "orange",
  maxWidth: 1440,
  p: "$3",
  display: "grid",
  gridTemplate: "1fr 1fr / 1fr 1fr 1fr",
  "@maxlg": {
    gridTemplate: "1fr 1fr / 1fr 1fr",
  },
  "@maxsm": {
    gridTemplate: "1fr  / 1fr",
  },
  ".box": {
    textAlign: "center",
    p: "$3",
  },
});
const View = ({}: IProps) => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  //TODO: Chart dynamic easy config value
  return (
    <Wrap>
      <div>Title Platform data</div>
      <div className="box">
        <Pie
          data={data}
          // options={...}
          // {...props}
        />
      </div>

      <div className="box">Graph2</div>
      <div className="box">GraphStat</div>
      <div className="box">Graph4</div>
      <div className="box">Graph5</div>
    </Wrap>
  );
};

export default View;
