import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
const CardWrap = styled("div", {
  img: { width: "100%", maxWidth: 368, height: "auto", br: 24 },
  ".card-title": { fontSize: "$3", maxWidth: 368, mt: 24, height: 60 },
  ".card-text": { fontSize: "$2", color: "$gray", maxWidth: 368 },
});

interface ITrending {
  img: StaticImageData;
  title: string;
  text: string;
  center?: boolean;
}

const Card = ({ img, title, text, center }: ITrending) => {
  return (
    <CardWrap>
      <div>
        <Image src={img} alt="" />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
    </CardWrap>
  );
};

export default Card;
