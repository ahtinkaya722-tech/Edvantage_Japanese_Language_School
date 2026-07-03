export default function Home() {
  return (
    <main>
      <section className="edv-intro-title">
        <div className="container text-center">
          <h1>Welcome To EDVANTAGE LANGUAGE SCHOOL</h1>
        </div>
      </section>
      {/* Welcome Section */}
      <section className="edv-welcome" id="welcome">
      
        <div className="container d-flex justify-content-center">
          <div className="edv-hero-box edv-fade-left">
         
          </div>
        </div>
        <div className="container text-center mt-4">
          <h4>Your Gateway to Japanese Language and Culture in Myanmar</h4>
          <p className="text-muted">
            We help students in Myanmar learn Japanese with confidence through
            structured courses, experienced instructors, and JLPT-focused training.
            Begin your journey toward Japan today.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="edv-reason py-5" id="reason">
        <div className="container">
          <div className="text-center mb-4">
            <span className="edv-eyebrow">Our Advantages</span>
            <h2>Why Choose Us? Three Reasons</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="edv-feature-card edv-fade-left">
                <h4>Experienced Instructors</h4>
                <p>Learn from qualified teachers with real JLPT teaching experience.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edv-feature-card edv-fade-left">
                <h4>JLPT-Focused Training</h4>
                <p>Structured lessons designed to help you pass N5–N1 confidently.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edv-feature-card edv-fade-left">
                <h4>Supportive Learning Environment</h4>
                <p>Small class sizes and personalized support to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="edv-location py-5" id="location">
        <div className="container">
          <div className="text-center mb-4">
            <span className="edv-eyebrow">Find Us</span>
            <h2>Our Location</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <div className="edv-location-card edv-fade-left">
                <h5>
                  <i className="fa-solid fa-location-crosshairs"></i> Sanchaung Campus
                </h5>
                <p>အမှတ် ၁၉၊ မကြီးကြီးလမ်း၊ စမ်းချောင်းမြို့နယ်၊ မဟာမြိုင်မှတ်တိုင်။</p>
                <p>ဖုန်းနံပါတ် - 09 980 805 677, 09 980 805 622</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="edv-location-card edv-fade-left">
                <h5>
                  <i className="fa-solid fa-location-crosshairs"></i> Tamwe Campus
                </h5>
                <p>
                  အမှတ် (၁၂၀)၊ (၃) လွှာ၊ ကျောက်မြောင်းလမ်း၊
                  <br />
                  ကျားကွက်သစ်ရပ်ကွက်၊ တာမွေမြို့နယ်၊ ကျောက်မြောင်းစျေး။
                </p>
                <p>ဖုန်းနံပါတ် - 09 406 810 504, 09 771 558 204</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="edv-review py-5" id="review">
        <div className="container">
          <div className="text-center mb-4">
            <span className="edv-eyebrow">Testimonials</span>
            <h2>What Our Students Say</h2>
            <p className="text-muted">
              Students choose EDVANTAGE for clear lessons, supportive teachers, and practical JLPT preparation.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {
                img: "/image/feedback-1.jpg",
                name: "Nu Hk Ra",
                level: "N4 Student",
                text: "The teachers explain grammar clearly and give us many practice questions. I became more confident before my JLPT exam.",
              },
              {
                img: "/image/feedback-4.jpg",
                name: "Mo Mo",
                level: "Japanese Beginner Class",
                text: "The class schedule, homework, and speaking practice helped me study consistently. EDVANTAGE feels supportive from day one.",
              },
              {
                img: "/image/feedback-6.jpg",
                name: "Mya Myint Zu Lin",
                level: "N5 Student",
                text: "I like the friendly environment and activities after class. It makes learning Japanese more enjoyable and easier to continue.",
              },
            ].map((t, i) => (
              <div className="col-md-4" key={i}>
                <div className="edv-testimonial-card edv-fade-left">
                  <div className="edv-stars">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p>&ldquo;{t.text}&rdquo;</p>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <img src={t.img} alt={t.name} className="edv-testimonial-img" />
                    <div>
                      <h6 className="mb-0">{t.name}</h6>
                      <small className="text-muted">{t.level}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="edv-activity py-5" id="activity">
        <div className="container">
          <div className="text-center mb-4">
            <span className="edv-eyebrow">School Life</span>
            <h2>Activities</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="edv-activity-gallery">
                <div className="edv-gallery-left">
                  <img src="/image/DSC00153.png" alt="Field Day" className="edv-fade-left" />
                  <img src="/image/Gomi Zero Day 2025 Oct.png" alt="Gomi Zero Day" className="edv-fade-left" />
                </div>
                <div className="edv-gallery-right">
                  <img src="/image/FC.jpg" alt="School activity" className="edv-fade-right" />
                  <img src="/image/Thingyan Frame 2.jpg" alt="Thingyan Frame" className="edv-fade-right" />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
              {[
                {
                  title: "Field Day After JLPT",
                  text: "After completing the JLPT exam, we organize a fun Field Day on the following day. It is a time for students to relax, enjoy activities, and celebrate their hard work together.",
                },
                {
                  title: "Water Festival Celebration",
                  text: "Every April, we celebrate the Water Festival with our students. It is a joyful event where everyone enjoys traditional water activities and creates unforgettable memories.",
                },
                {
                  title: "Edvantage FC",
                  text: "Edvantage FC is our school football club, organized and held within our campus. Students can join, play together, and build teamwork through sports.",
                },
                {
                  title: "Gomi Zero Day",
                  text: "Gomi Zero Day is a special activity where students work together to clean and protect the environment. Through this event, we learn the importance of cleanliness, responsibility, and caring for our community.",
                },
              ].map((a, i) => (
                <div className="edv-activity-item edv-fade-up" key={i}>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="edv-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <h4>EDVANTAGE</h4>
              <p>
                EDVANTAGE Japanese Language School helps students in Myanmar learn Japanese
                with confidence through structured courses and JLPT-focused training.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#welcome">Home</a></li>
                <li><a href="#reason">Why Choose Us</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#review">Reviews</a></li>
                <li><a href="#activity">Activities</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p><i className="fa-solid fa-phone"></i> 09 980 805 677</p>
              <p><i className="fa-solid fa-phone"></i> 09 980 805 622</p>
              <p><i className="fa-solid fa-envelope"></i> info@edvantage-mm.com</p>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <div className="edv-social">
                <a href="https://www.facebook.com/edvantagejapaneseschool/" aria-label="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@edvantagejapanese?is_from_webapp=1&sender_device=pc" aria-label="TikTok">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="https://m.me/edvantagejapaneseschool" aria-label="Messenger">
                  <i className="fa-brands fa-facebook-messenger"></i>
                </a>
                <a href="https://t.me/edv_stu_service" aria-label="Telegram">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <p className="text-center mb-0">
            &copy; 2026 EDVANTAGE Japanese Language School. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
