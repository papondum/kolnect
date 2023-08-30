import HeaderNav from "@/app/modules/HeaderNav";
import Banner from "@/app/modules/Banner";
import SubBanner from "@/app/modules/SubBanner";
import Approach from "@/app/modules/Approach";
import WorkingPhase from "@/app/modules/WorkingPhase";
import PlatformData from "@/app/modules/PlatformData";
import Credential from "@/app/modules/Credential";
import Clients from "@/app/modules/Clients";
import Trending from "@/app/modules/Trending";
import Packages from "@/app/modules/Packages";
import Contact from "@/app/modules/Contact";

import Footer from "@/app/modules/Footer";
import trendingimg1 from "@/app/assets/Pic_Trending Issues/kol-1-03-02.jpg";
import trendingimg2 from "@/app/assets/Pic_Trending Issues/kol-1-04.jpg";
import trendingimg3 from "@/app/assets/Pic_Trending Issues/kol-1-03.jpg";

import packagesimg1 from "@/app/assets/Icon_Packages/Group.png";
import packagesimg2 from "@/app/assets/Icon_Packages/growth 1.png";
import packagesimg3 from "@/app/assets/Icon_Packages/social-media-2 1.png";
import packagesimg4 from "@/app/assets/Icon_Packages/social-media-3 1.png";
import packagesimg5 from "@/app/assets/Icon_Packages/website-3 1.png";
import { styled, getCssText, globalStyles } from "@/stitches.config";

const Main = styled("main", {
  m: 0,
  bc: "$basebg",
  width: "100%",
  height: "auto",
  color: "white",
});
const PLATFORM_DATA = [
  {
    type: "pie",
    labels: ["Product 1", "Product 2", "Product 3"],
    title: "Product category (%)",
    values: [60, 10, 30],
    position: "mid",
  },
  {
    type: "pie",
    labels: ["Product 1", "Product 2", "Product 3"],
    title: "SOW (%)",
    values: [60, 10, 30],
    position: "right",
  },
  {
    type: "radar",
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    title: "Posted channel (%)",
    values: [4, 4, 3, 5, 3, 1],
    position: "",
  },
  {
    type: "pie",
    labels: ["Product 1", "Product 2", "Product 3"],
    title: "KOL gender (%)",
    values: [60, 10, 30],
    position: "mid",
  },
  {
    type: "pie",
    labels: ["Product 1", "Product 2", "Product 3"],
    title: "KOL tier (%)",
    values: [60, 10, 30],
    position: "right",
  },
];
const CONTACT = { email: "Sale@ideaslabs.com", mobile: "099-1235690" };
const PACKAGES_DATA = [
  {
    img: packagesimg3,
    title: "Promotion Addict",
    text: `POWER REACH PACKAGE<br/>
    &#8226; Sale here /Punpro / Rooyoung / Eventpass >> In package</be>
    &#8226; 19 M Followers`,
  },
  {
    img: packagesimg1,
    title: "Performance Package",
    text: `PROMOTION PAGE<br />
    &#8226;Size XS - L<br />
    &#8226;Sale here /Punpro / Rooyoung / Eventpass / Tidpro <br />
    &#8226;1.5 M - 13 M Followers`,
  },

  {
    img: packagesimg4,
    title: "KOLS Customized",
    text: `&#8226; Objective : CONVERSION & Encourage action<br/>
    &#8226; Nano 1,001-10,000 / Micro 10,001-50,000<br/>
    &#8226; Minimum budget 50,000 thb/campaign<br/>
    Start from 15 KOLS
    `,
  },
  {
    img: packagesimg2,
    title: "Value Package",
    text: `FOOD PAGE<br/>
    &#8226; Size S - L<br/>
    &#8226; Starving time / GinMaiYood / CookClick / IAMEAT / กินกับนอน <br/>
    &#8226; 1.6 M - 7 M Followers`,
  },
  {
    img: packagesimg5,
    title: "Food Lover",
    text: `POWER REACH PACKAGE<br/>
    &#8226; Starving time / GinMaiYood / CookClick / IAMEAT / กินกับนอน >> In package<br/>
    &#8226; 10 M Followers`,
  },
];
const TRENDING_DATA = [
  {
    img: trendingimg1,
    title: "4 สเต็ปเพิ่มยอดขายให้ทะลุเป้าด้วยกลยุทธ์",
    text: "1.เลือกใช้ KOL ที่มีฐานผู้ติดตามจำนวนมากเพื่อสร้าง Visibility<br/>2.นำเสนอข้อมูลผลิตภัณฑ์ผ่าน Topic ที่น่าสนใจสำหรับลูกค้า<br/>3.แจ้งราคา ประสิทธิภาพ ไปจนถึงผลลัพธ์หลังการใช้งาน เพื่อการพิจารณา<br/>4.กระตุ้นให้ลูกค้าเร่งตัดสินใจซื้อ โดยใช้ Call to Action ไปยังแหล่งซื้อสินค้าโดยตรง",
  },
  {
    img: trendingimg2,
    title: "5 เพจโปรโมชั่นมาแรง เอาใจขาช้อป!",
    text: "1.Sale Here Followers: 7.3 M<br/>2.ชอบโปร Followers: 6.3 M<br/>3.ปันโปร Followers: 5.4 M<br/>4.EventPass Followers: 4.1 M<br/>5.โปรฮับ Followers: 3.3 M",
  },
  {
    img: trendingimg3,
    title: "5 อันดับ TikToker คนติดตามมากที่สุด",
    text: "1.รัชนก สุวรรณเกตุ Followers: 15.6 M<br/>2.TACHAYA Followers: 7.5 M<br/>3.Japan and friends Followers: 2.7 M<br/>4.Kikk Followers: 8.5 M<br/>5.NIKKUNATIP Followers: 8.5 M",
  },
];
const CREDENTIAL_DATA = [
  { label: "Years in business", value: 5 },
  { label: "Success Campaige", value: 800 },
  { label: "Industries", value: 17 },
  { label: "Customers", value: 2000 },
];
const APPROACH_DATA = [
  { content: "Pick the right KOLs with strategy-drive" },
  { content: "Choose the right platform of each audiences" },
  { content: "Connect with the right message" },
];
export default function Home() {
  globalStyles();
  return (
    <>
      {/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} /> */}
      <Main>
        <HeaderNav />
        <Banner />
        <SubBanner />
        <Approach data={APPROACH_DATA} />
        <WorkingPhase />
        <PlatformData data={PLATFORM_DATA} />
        <Credential data={CREDENTIAL_DATA} />
        <Clients />
        <Trending data={TRENDING_DATA} />
        <Packages data={PACKAGES_DATA} />
        <Contact email={CONTACT.email} mobile={CONTACT.mobile} />
        <Footer />
      </Main>
    </>
  );
}
