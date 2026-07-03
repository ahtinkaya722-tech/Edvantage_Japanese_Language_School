export default function NLevel() {
  const levels = [
    {
      code: "N5",
      title: "Beginner Foundation",
      desc: "Hiragana, Katakana, basic grammar, daily vocabulary, simple reading, and listening practice.",
    },
    {
      code: "N4",
      title: "Basic Communication",
      desc: "Essential sentence patterns, conversation practice, reading short passages, and exam drills.",
    },
    {
      code: "N3",
      title: "Intermediate Japanese",
      desc: "Stronger grammar, kanji growth, longer reading, listening strategies, and timed practice.",
    },
    {
      code: "N2",
      title: "Upper Intermediate",
      desc: "Advanced grammar, natural expressions, speed reading, vocabulary building, and mock tests.",
    },
    {
      code: "N1",
      title: "Advanced Mastery",
      desc: "Complex reading, advanced listening, formal expressions, exam strategy, and intensive revision.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="edv-nlevel-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="edv-eyebrow">JLPT Preparation</span>
              <h1 className="edv-fade-left">Japanese Classes From N5 To N1</h1>
              <p className="edv-fade-left">
                Study Japanese step by step with EDVANTAGE through structured lessons,
                exam practice, speaking support, and online or on-campus learning.
              </p>
              <div className="d-flex gap-3 mt-3 edv-fade-left">
                <a href="#class" className="btn btn-success">View Classes</a>
                <a
                  href="https://www.facebook.com/edvantagejapaneseschool"
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Page
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/image/Double Campus Advantages 2026.png"
                alt="EDVANTAGE campus class information"
                className="img-fluid rounded edv-fade-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is JLPT */}
      <section className="edv-nlevel-intro py-5">
        <div className="container">
          <div className="edv-intro-panel edv-fade-left">
            <h2>What Is JLPT?</h2>
            <p>
              The Japanese-Language Proficiency Test is an international exam that measures
              Japanese ability from beginner level N5 to advanced level N1. EDVANTAGE classes
              help students build vocabulary, grammar, reading, listening, and test confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="edv-nlevel-classes py-5" id="class">
        <div className="container">
          <div className="text-center mb-4">
            <span className="edv-eyebrow">Class Levels</span>
            <h2>Choose Your JLPT Level</h2>
            <p className="text-muted">
              Start from the right level and move forward with a clear study path.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {levels.map((l) => (
              <div className="col-md-4 col-lg-3" key={l.code}>
                <div className="edv-level-card edv-fade-up">
                  <span className="edv-level-code">{l.code}</span>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Options */}
      <section className="edv-nlevel-details py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <span className="edv-eyebrow">Learning Options</span>
              <h2 className="edv-fade-left">Online And On-Campus Support</h2>
              <p className="edv-fade-left">
                EDVANTAGE supports students with organized lessons, regular practice, and campus options
                for learners who want a classroom environment.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="edv-detail-list list-unstyled edv-fade-right">
                <li>
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <span>Experienced Japanese language instructors</span>
                </li>
                <li>
                  <i className="fa-solid fa-book-open-reader"></i>
                  <span>JLPT-focused vocabulary, grammar, reading, and listening</span>
                </li>
                <li>
                  <i className="fa-solid fa-clipboard-check"></i>
                  <span>Practice tests and revision before exam season</span>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Sanchaung and Tamwe campus contact support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
