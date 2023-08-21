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
  p: "$6",
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
    maxWidth: 250,
  },
  ".mid": { m: "auto", "@maxlg": { m: "auto" } },
  ".right": { ml: "auto", "@maxlg": { m: "auto" } },
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
    <Wrap id="platform-data">
      <div>Title Platform data</div>
      <div className="box mid">
        <Pie data={data} />
      </div>
      <div className="box right">
        <Pie data={data} />
      </div>
      <div className="box">GraphStat</div>
      <div className="box mid">
        <Pie data={data} />
      </div>
      <div className="box right">
        <Pie data={data} />
      </div>
    </Wrap>
  );
};

export default View;
