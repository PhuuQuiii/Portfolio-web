import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Backend Developer</h4>
                <h5>Self-employed & Vietnam Aviation Academy</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed backend solutions for small businesses using Node.js,
              Python, and PHP. Participated in robotics &amp; IoT competitions
              and conducted research on ML applications in aviation systems.
              Contributed to the Smart Airport project featured on VnExpress.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Software KK VAT Co., Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built an electronic contract management platform — designed UI/UX,
              developed frontend interfaces, integrated RESTful APIs, and
              implemented authentication with 2FA and RBAC.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>Stitch Digital Solutions · Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built CRM features for bespoke tailoring businesses in Thailand
              and Hong Kong — Supabase auth, OCR pipelines, cross-platform
              handwriting measurement (iPad &amp; Android), and a SendGrid email
              integration system.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Repair Executive &amp; Co-Founder</h4>
                <h5>ST Engineering &amp; BASO Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Aviation systems at ST Engineering (VSTEA / VAECO). Simultaneously
              co-founding BASO — building a trust-based motorcycle rescue
              platform launching hyper-local in Ho Chi Minh City.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
