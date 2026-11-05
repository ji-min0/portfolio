// About 페이지 데이터 (한/영)
export type TabItem = { label: string; value: string };
export type AboutLang = { paragraphs: string[]; tabs: { skills: TabItem[]; experience: TabItem[]; education: TabItem[] } };

export const about: { kr: AboutLang; en: AboutLang } = {
  "kr": {
    "paragraphs": [
      "현장의 업무 방식을 이해하고, 그것을 정책과 시스템으로 옮기는 PM을 지향합니다. 직접 근무했던 영화관의 출퇴근·교대·급여 업무를 사내 시스템으로 기획했고, 7인 개발팀의 멘토(러닝헬퍼)로 요구사항과 API 명세, DB 설계, 클라우드 인프라를 먼저 확정해 실서비스 배포까지 이끌었습니다. 지금은 코디세이 AI 올인원 과정에서 AI 기술을 익히며 다룰 수 있는 범위를 넓히고 있습니다.",
      "제가 가장 중요하게 여기는 건 시스템이 실제 업무 방식과 맞는 것입니다. 규정이 정한 것은 놓칠 수 없게 막고, 현장에서 자주 생기는 실수는 예외 정책으로 흡수하며, 사람 사이의 부탁으로 처리되던 일은 승인 흐름이 있는 신청으로 옮깁니다. 개발 전에는 명세를 먼저 확정해 팀이 같은 기준으로 움직이게 하고, 진행이 막히면 기다리기보다 대안을 찾아 먼저 움직입니다. AI가 내놓은 결과도 실제 구조와 근거를 확인한 뒤에 씁니다.",
      "Django·FastAPI 백엔드와 AWS(EC2, CloudFront, EventBridge, CloudFormation) 구성을 직접 다뤄봤기 때문에 개발팀과 같은 언어로 구현 범위와 리스크를 이야기할 수 있습니다. 국어국문학을 전공하며 생각을 글로 정리하는 법을, 학생홍보대사로 100명 넘는 사람들 앞에서 설명하는 법을 익혔습니다. 현업과 개발팀 사이에서 내용을 정확하게 옮기고, 합의한 것을 누구나 읽을 수 있는 문서로 남기는 일이 제가 가장 잘할 수 있는 일입니다."
    ],
    "tabs": {
      "skills": [
        {
          "label": "기획·문서화",
          "value": "요구사항 정의, API 명세 작성, 기술 문서화, 일정·이슈 관리, 코드 리뷰"
        },
        {
          "label": "협업 도구",
          "value": "Notion, Jira, Swagger UI, draw.io, dbdiagram, Excel, Google Sheets"
        },
        {
          "label": "언어 / 프레임워크",
          "value": "Python, Django, Django REST Framework, FastAPI, Flask"
        },
        {
          "label": "데이터베이스",
          "value": "PostgreSQL, MySQL, Redis"
        },
        {
          "label": "클라우드 / 인프라",
          "value": "AWS(EC2, S3, IVS, EventBridge, CloudFormation), Docker, Nginx, GitHub Actions, Celery"
        },
        {
          "label": "AI",
          "value": "LangGraph, LangChain, RAG"
        },
        {
          "label": "버전 관리",
          "value": "Git, GitHub"
        }
      ],
      "experience": [
        {
          "label": "2026.02 - 2026.03",
          "value": "OZ 코딩스쿨 러닝헬퍼(2개월 계약) — 게추 기획·API 명세 총괄"
        },
        {
          "label": "2025.11.",
          "value": "AWS JAM — 챌린지 6개 중 4개 해결"
        },
        {
          "label": "2023.01 - 2024.03",
          "value": "경북대학교 학생홍보대사 — 캠퍼스 투어·입시 설명, 100명 이상 규모 발표"
        },
        {
          "label": "2021.11.",
          "value": "AI 기반 앱 개발 교육과정"
        }
      ],
      "education": [
        {
          "label": "2026.07 - 재학 중",
          "value": "코디세이 AI 올인원 과정 2기"
        },
        {
          "label": "2026.06 - 2026.07",
          "value": "42 경산 라피신 — C 언어 학습"
        },
        {
          "label": "2025.08 - 2026.02",
          "value": "OZ 코딩스쿨 KDT 백엔드 과정 수료"
        },
        {
          "label": "2021.03 - 2026.02",
          "value": "경북대학교 국어국문학과 졸업"
        }
      ]
    }
  },
  "en": {
    "paragraphs": [
      "I aim to be a PM who understands how work actually happens and turns it into policies and systems. I planned an internal system for the scheduling, attendance, shift-change, and payroll workflows I experienced firsthand as a movie theater employee, and as mentor (Learning Helper) to a seven-person development team I finalized requirements, API specs, database design, and cloud infrastructure up front and led the project through to a live deployment. I am currently broadening that range by studying AI in the Codyssey AI program.",
      "What I care about most is a system that fits the way people really work. Rules that must be followed should be impossible to miss, common on-the-ground mistakes should be absorbed by exception policies, and favors traded between people should become requests with an approval flow. Before development starts, I finalize the specs so the team moves by the same standard; when progress stalls, I look for an alternative and move first rather than wait. I use AI output only after checking it against the real structure and the evidence behind it.",
      "Because I have worked hands-on with Django and FastAPI backends and AWS (EC2, CloudFront, EventBridge, CloudFormation), I can discuss scope and risk with developers in their own terms. Studying Korean Language and Literature taught me to organize my thinking in writing, and serving as a student ambassador taught me to explain things to audiences of over 100 people. Carrying meaning accurately between business teams and developers, and turning what was agreed into documents anyone can read, is what I do best."
    ],
    "tabs": {
      "skills": [
        {
          "label": "Planning / Documentation",
          "value": "Requirements definition, API specification, technical writing, schedule and issue management, code review"
        },
        {
          "label": "Collaboration Tools",
          "value": "Notion, Jira, Swagger UI, draw.io, dbdiagram, Excel, Google Sheets"
        },
        {
          "label": "Language / Frameworks",
          "value": "Python, Django, Django REST Framework, FastAPI, Flask"
        },
        {
          "label": "Database",
          "value": "PostgreSQL, MySQL, Redis"
        },
        {
          "label": "Cloud / Infrastructure",
          "value": "AWS (EC2, S3, IVS, EventBridge, CloudFormation), Docker, Nginx, GitHub Actions, Celery"
        },
        {
          "label": "AI",
          "value": "LangGraph, LangChain, RAG"
        },
        {
          "label": "Version Control",
          "value": "Git, GitHub"
        }
      ],
      "experience": [
        {
          "label": "2026.02 - 2026.03",
          "value": "OZ Coding School Learning Helper (2-month contract) — led planning and API specs for Gechu"
        },
        {
          "label": "2025.11.",
          "value": "AWS JAM — solved 4 of 6 challenges"
        },
        {
          "label": "2023.01 - 2024.03",
          "value": "Kyungpook National University Student Ambassador — campus tours, presentations to 100+ people"
        },
        {
          "label": "2021.11.",
          "value": "AI-Based Application Development Program"
        }
      ],
      "education": [
        {
          "label": "2026.07 - Present",
          "value": "Codyssey AI All-in-One Program (2nd cohort)"
        },
        {
          "label": "2026.06 - 2026.07",
          "value": "42 Gyeongsan Piscine — C programming"
        },
        {
          "label": "2025.08 - 2026.02",
          "value": "OZ Coding School KDT Backend Course"
        },
        {
          "label": "2021.03 - 2026.02",
          "value": "Kyungpook National University, B.A. Korean Language and Literature"
        }
      ]
    }
  }
};
