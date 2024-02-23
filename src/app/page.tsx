import Count from "@/modules/core/components/sections/Count";
import CustomersChoose from "@/modules/core/components/sections/CustomersChoose";
import Hero from "@/modules/core/components/sections/Hero";
import VisitGuide from "@/modules/core/components/sections/VisitGuide";
import Proxy from "@/modules/core/components/sections/Proxy";
import Faq from "@/modules/core/components/sections/Faq";
import Work from "@/modules/core/components/sections/Work";
import Feature from "@/modules/core/components/sections/Feature";
import Header from "@/modules/core/components/sections/Header";
import Footer from "@/modules/core/components/sections/Footer/Index";
import Subscription from "@/modules/core/components/sections/Subscription";
import Partner from "@/modules/core/components/sections/Partner";
import Compare from "@/modules/core/components/sections/Compare";
import Pricing from "@/modules/core/components/sections/Pricing";
import ProxyFarm from "@/modules/core/components/sections/ProxyFarm";
import Cta from "@/modules/core/components/sections/Cta";
import SocialMedia from "@/modules/core/components/sections/SocialMedia";


export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <CustomersChoose></CustomersChoose>
      <Count></Count>
      <Feature></Feature>
      <Work></Work>
      <VisitGuide></VisitGuide>
      <Compare></Compare>
      <Partner></Partner>
      <Pricing></Pricing>
      <ProxyFarm></ProxyFarm>
      <Proxy></Proxy>
      <Faq></Faq>
      <Cta></Cta>
      <SocialMedia></SocialMedia>
      <Subscription></Subscription>
      <Footer></Footer>
    </main>
  );
}
