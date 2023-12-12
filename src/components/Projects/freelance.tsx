import React, { useState } from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

import AirBnbNewsImg from "../../assets/airbnb_news_clone_1.png";
import AirBnbNewsImg2 from "../../assets/airbnb_news_clone_2.png";
import AirBnbNewsImg3 from "../../assets/airbnb_news_clone_3.png";
import AirBnbFrontend from "../../assets/airbnb_frontend_1.png";
import AirBnbFrontend2 from "../../assets/airbnb_frontend_2.png";
import AirBnbFrontend3 from "../../assets/airbnb_frontend_3.png";
import JWM1 from "../../assets/JuniorWebMasters1.png";
import JWM2 from "../../assets/JuniorWebMasters2.png";
import JWM3 from "../../assets/JuniorWebMasters3.png";
import JWM4 from "../../assets/JuniorWebMasters4.png";
import JWM5 from "../../assets/JuniorWebMasters5.png";
import Zazous1 from "../../assets/Zazous1.png";
import Zazous2 from "../../assets/Zazous2.png";
import Zazous3 from "../../assets/Zazous3.png";
import Zazous4 from "../../assets/Zazous4.png";
import Zazous5 from "../../assets/Zazous5.png";
import Zazous6 from "../../assets/Zazous6.png";

export default function Freelance(props: any) {
  const { screenWidth, resetImgs, expandedTile } = props;

  return (
    <div
      className={`col-md-4 projects 
  ${screenWidth < 768 ? "row" : ""}
  }`}
    >
      <ProjectTile
        id={1}
        expandedTile={expandedTile}
        title="Junior Web Masters"
        description="Online web development learning platform tailored for young minds"
        longDescription="Junior Web Masters is an educational platform dedicated to introducing 6th graders to the world of web development and programming. This initiative is designed to empower young learners with essential coding skills, preparing them for the digital future. Junior Web Masters, aims to provide a comprehensive and supportive platform for 6th graders to start their coding journey, offering a structured curriculum, mentorship, and a safe, engaging learning environment. It fosters the development of crucial problem-solving skills and creativity while ensuring inclusivity and personalized support. This initiative is well-positioned to help young learners become the web developers of the future."
        technologies={[
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind",
          "Shadcn",
          "CSS Modules",
          "Firebase",
          "NextAuth",
          "Stripe Payments",
        ]}
        images={[JWM1, JWM2, JWM3, JWM4, JWM5]}
        resetImgs={resetImgs}
        siteLink="https://juniorwebmasters.org"
        githubLink="https://github.com/JordanReady"
      />

      <ProjectTile
        id={2}
        expandedTile={expandedTile}
        title="Local Bridal Site"
        description="Responsive website featuring an elegant display of dresses and tuxedos, seamless appointment booking, genuine customer reviews, direct contact options, and integrated social links."
        longDescription="As a freelance software engineer, I crafted a dynamic website for Zazous Bridal Boutique & Tuxedos, seamlessly blending elegance with functionality. The site showcases the latest dresses, tuxedos, and formal wear, with a user-friendly design optimized for both desktop and mobile experiences.

        Key Features:
        
        Captivating dress showcase for an enchanting shopping experience.
        Streamlined appointment booking system for easy scheduling.
        Reviews section building trust through positive customer experiences.
        Contact form facilitating direct communication with the store.
        Integration of social media links for the latest updates."
        technologies={["Next.js", "React", "CSS Modules", "Bridal Live Api"]}
        images={[Zazous1, Zazous2, Zazous3, Zazous4, Zazous5, Zazous6]}
        resetImgs={resetImgs}
        siteLink="https://zazous.vercel.app/"
        githubLink="https://github.com/JordanReady"
      />
    </div>
  );
}
