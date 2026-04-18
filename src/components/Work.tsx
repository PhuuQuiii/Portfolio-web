import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Smart Airport Passenger System",
    category: "IoT / AI",
    tools: "Next.js, Python, Node.js, LangChain, LLMs, E-ra IoT",
    image: `${base}images/robot-huong-dan-khach-san-bay-4893-5093-1712846727.jpg.webp`,
    link: "https://vnexpress.net/sinh-vien-lam-hop-thong-minh-chi-dan-hanh-khach-o-san-bay-4732578.html",
  },
  {
    title: "AI Facial Recognition Attendance",
    category: "Machine Learning",
    tools: "Python, Flask, FastAPI, MTCNN, FaceNet, SVM, Docker",
    image: `${base}images/nckh_1.jpg`,
    link: "https://fitvaa.edu.vn/Public/Science/ViewPublicRe/Khoa_Cong_Nghe_Thong_Tin_Hoc_Vien_Hang_khong_Viet_Nam/lkJHTy@988.VAA",
  },
  {
    title: "IoT Innovation — VAA Contest",
    category: "IoT / Embedded",
    tools: "Next.js, Python, Node.js, C++, E-ra IoT, Tinker Board R2.0",
    image: `${base}images/IOT2.jpg`,
    link: "https://vaa.edu.vn/02-du-an-cua-sinh-vien-hoc-vien-hang-khong-viet-nam-xuat-sac-dat-giai-tai-cuoc-thi-ve-internet-van-vat/",
  },
  {
    title: "Freelance Mobile — Upwork",
    category: "iOS / Flutter",
    tools: "Flutter, Swift, FastAPI, AWS (EC2, S3), RESTful API",
    image: `${base}images/upwork.jpg`,
    link: "https://www.upwork.com/freelancers/~0103fd47d4f53494c4",
  },
  {
    title: "B2C E-Commerce Platform",
    category: "Full-Stack",
    tools: "React Native, Redux, Express.js, MongoDB, Docker, NGINX-RTMP",
    image: `${base}images/placeholder.webp`,
    link: "https://github.com/PhuuQuiii/E-Commerce",
  },
  {
    title: "Footwear E-Commerce Platform",
    category: "Full-Stack",
    tools: "Django, MySQL, Bootstrap, VNPay, Docker, WebSocket",
    image: `${base}images/placeholder.webp`,
    link: "https://github.com/PhuuQuiii/ecommer_django",
  },
];

const Work = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth <= 1024) return;

      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
