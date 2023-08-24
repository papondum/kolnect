import { styled } from "@/stitches.config";
import Image from "next/image";
import BestRate from "@/app/assets/banner/best-price.svg";
import BestPerform from "@/app/assets/banner/best-perform.svg";
import BestOutcome from "@/app/assets/banner/best-outcome.svg";
import Text from "@/app/components/text";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "$basebg",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 1304,
  px: 32,
  margin: "0 auto",
  mb: 102,
  ".box": {
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "364px",
    h5: {
      fontSize: "$5",
      marginTop: "$6",
      marginBottom: "$2",
    },
    p: {
      fontSize: "$3",
      color: "$gray",
      lineHeight: "$7",
    },
    "@maxlg": {
      margin: "auto",
      mb: 50,
    },
  },
  "@maxlg": {
    display: "block",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <Text className="box">
        <Image src={BestRate} alt="best-rate" />
        <h5>Better Rate</h5>
        <p>The best deal of KOL Package</p>
      </Text>
      <Text className="box">
        <Image src={BestPerform} alt="best-perform" />
        <h5>Better Perform</h5>
        <p>To help connect network of Influencers</p>
      </Text>
      <Text className="box">
        <Image src={BestOutcome} alt="best-outcome" />
        <h5>Better Outcome</h5>
        <p>To guarantee well-perform package</p>
      </Text>
    </Wrap>
  );
};

export default View;
