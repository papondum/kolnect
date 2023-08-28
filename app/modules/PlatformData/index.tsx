"use client";
import {
  Chart,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels
);
import { styled } from "@/stitches.config";
import { Pie, Radar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Text from "@/app/components/text";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}

interface IChartProps {
  title: string;
  data: number[];
  labels: string[];
}

const Wrap = styled("div", {
  bc: "$basebg",
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
    maxWidth: 295,
  },
  ".mid": { m: "auto", "@maxlg": { m: "auto" } },
  ".right": { ml: "auto", "@maxlg": { m: "auto" } },
  ".title": {
    h3: { fontSize: "$7", mb: "$3", span: { color: "$primary" } },
    h5: { fontSize: "$4", mb: "$7" }
  },
});

const RadarChart = ({ title, labels, data }: IChartProps) => {
  const radarData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: "rgba(124, 198, 182, 0.50)",
        borderColor: "#7CC6B6",
        borderWidth: 2.68,
        fill: true,
      },
    ],
  };

  const radarConfig = {
    scales: {
      r: {
        angleLines: {
          color: "#E6517A",
        },
        grid: {
          color: "#E6517A",
        },
        pointLabels: {
          color: "rgb(255, 205, 86)",
        },
        max: 7,
        min: 0,
        ticks: {
          stepSize: 1,
          display: false,
        },
        datasets: {
          title: {
            display: false,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return <Radar data={radarData} options={radarConfig} />;
};

const PieChart = ({ data, title, labels }: IChartProps) => {
  const pieData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          "#E6517A",
          "#7CC6B6",
          "#F9CF3D",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const pieConfig = {
    borderWidth: 0,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as "bottom", //to resolve warning as https://github.com/microsoft/TypeScript/issues/11465
        labels: {
          padding: 32,
          usePointStyle: true,
          pointStyle: 'circle',
          generateLabels: (chart: any) => {
            return chart.config['_config'].data.labels.map((label: string, index: number) => ({
              text: label,
              fillStyle: chart.config['_config'].data.datasets[0].backgroundColor[index],
              strokeStyle: chart.config['_config'].data.datasets[0].backgroundColor[index],
              fontColor: chart.config['_config'].data.datasets[0].backgroundColor[index]
            }))
          }
        }
      },
      datalabels: {
        color: 'white',
        formatter: (value: number) => `${value}%`
      }
    }
  };

  return <Pie data={pieData} options={pieConfig} />;
};

const View = ({}: IProps) => {
  //TODO: Chart dynamic easy config value
  return (
    <Wrap id="platform-data">
      <Text className="title">
        <h3>
          Our <br />
          <span>Platform Data</span>
        </h3>
      </Text>
      <div className="box mid">
        <Text className="title">
          <h5>Product category (%)</h5>
        </Text>
        <PieChart
          labels={["Red", "Blue", "Yellow"]}
          title="My First Dataset"
          data={[60, 30, 10]}
        />
      </div>
      <div className="box right">
        <Text className="title">
          <h5>SOW (%)</h5>
        </Text>
        <PieChart
          labels={["Red", "Blue", "Yellow"]}
          title="My First Dataset"
          data={[300, 50, 100]}
        />
      </div>
      <div className="box">
        <Text className="title">
          <h5>Posted channel (%)</h5>
        </Text>
        <RadarChart
          labels={[
            "Thing 1",
            "Thing 2",
            "Thing 3",
            "Thing 4",
            "Thing 5",
            "Thing 6",
          ]}
          data={[4, 4, 3, 5, 3, 1]}
          title={"Posted channel (%)"}
        />
      </div>
      <div className="box mid">
        <Text className="title">
          <h5>KOL gender (%)</h5>
        </Text>
        <PieChart
          labels={["Red", "Blue", "Yellow"]}
          title="My First Dataset"
          data={[300, 50, 100]}
        />
      </div>
      <div className="box right">
        <Text className="title">
          <h5>KOL tier (%)</h5>
        </Text>
        <PieChart
          labels={["Red", "Blue", "Yellow"]}
          title="My First Dataset"
          data={[300, 50, 100]}
        />
      </div>
    </Wrap>
  );
};

export default View;
