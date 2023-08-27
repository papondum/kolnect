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
import { styled, getCssText } from "@/stitches.config";
const Main = styled("main", {
  m: 0,
  bc: "$basebg",
  width: "100%",
  height: "auto",
  color: "white",
});
const CONTACT = { email: "Sale@ideaslabs.com", mobile: "099-1235690" };
const TRENDING = [
  {
    img: trendingimg1,
    title: "4 สเต็ปเพิ่มยอดขายให้ทะลุเป้าด้วยกลยุทธ์",
    text: "1.เลือกใช้ KOL ที่มีฐานผู้ติดตามจำนวนมากเพื่อสร้าง Visibility 2.นำเสนอข้อมูลผลิตภัณฑ์ผ่าน Topic ที่น่าสนใจสำหรับลูกค้า 3.แจ้งราคา ประสิทธิภาพ ไปจนถึงผลลัพธ์หลังการใช้งาน เพื่อการพิจารณา 4.กระตุ้นให้ลูกค้าเร่งตัดสินใจซื้อ โดยใช้ Call to Action ไปยังแหล่งซื้อสินค้าโดยตรง",
  },
  {
    img: trendingimg2,
    title: "5 เพจโปรโมชั่นมาแรง เอาใจขาช้อป!",
    text: "1.Sale Here Followers: 7.3 M 2.ชอบโปร Followers: 6.3 M 3.ปันโปร Followers: 5.4 M 4.EventPass Followers: 4.1 M 5.โปรฮับ Followers: 3.3 M",
  },
  {
    img: trendingimg3,
    title: "5 อันดับ TikToker คนติดตามมากที่สุด",
    text: "1.รัชนก สุวรรณเกตุ Followers: 15.6 M 2.TACHAYA Followers: 7.5 M 3.Japan and friends Followers: 2.7 M 4.Kikk Followers: 8.5 M 5.NIKKUNATIP Followers: 8.5 M",
  },
];
export default function Home() {
  return (
    <>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <Main>
        <HeaderNav />
        <Banner />
        <SubBanner />
        <Approach />
        <WorkingPhase />
        <PlatformData />
        <Credential />
        <Clients />
        <Trending data={TRENDING} />
        <Packages />
        <Contact email={CONTACT.email} mobile={CONTACT.mobile} />
        <Footer />
      </Main>
    </>
  );
}
