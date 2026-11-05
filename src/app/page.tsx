import Link from "next/link";
import { FaArrowDown, FaArrowRight, FaFileLines, FaSitemap, FaCloud } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const STRENGTHS = [
  {
    icon: <FaSitemap />,
    title: "현업 요구 → 시스템",
    body: "업무가 실제로 어떻게 돌아가고 어디서 막히는지 먼저 파악하고, 규정과 현장 예외를 시스템 정책으로 옮깁니다.",
  },
  {
    icon: <FaFileLines />,
    title: "명세·문서화",
    body: "요구사항·API 명세·ERD를 개발 전에 확정하고, 합의한 내용을 누구나 읽을 수 있는 문서로 남깁니다.",
  },
  {
    icon: <FaCloud />,
    title: "AWS 인프라",
    body: "EC2·CloudFront·EventBridge 구성과 IAM 기반 배포를 직접 다뤄, 개발팀과 같은 언어로 구조와 리스크를 판단합니다.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="hero-role">IT System PM · Backend</p>
        <h1>
          Hi, I&apos;m <span>Jimin</span>
          <br />
          Kang From Korea
        </h1>
        <p className="hero-desc">
          현장의 업무를 이해하고 시스템으로 옮기는, 기술을 아는 PM을 지향합니다.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="btn btn-fill">
            프로젝트 보기 <FaArrowRight />
          </Link>
          <Link href="/contact" className="btn">
            연락하기
          </Link>
        </div>
        <a href="#work" className="scroll-hint">
          <FaArrowDown /> scroll
        </a>
      </section>

      <section className="section container" id="work">
        <p className="eyebrow">WHAT I DO</p>
        <div className="section-head">
          <h2>업무를 이해하고, 시스템으로 옮깁니다</h2>
        </div>
        <div className="strengths">
          {STRENGTHS.map((s) => (
            <div className="strength" key={s.title}>
              <div className="strength-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">SELECTED WORK</p>
        <div className="section-head">
          <h2>Projects</h2>
          <Link href="/projects" className="back-link">
            전체 보기 <FaArrowRight />
          </Link>
        </div>
        <div className="work-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
