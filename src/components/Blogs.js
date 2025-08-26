import React from "react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import bgPattern from "../assets/blog-bg.png";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "When Should You See an Orthopedic Surgeon?",
    post: "Discover the key signs and symptoms that indicate it's time to consult an orthopedic specialist.",
    date: "January 17, 2025",
    author: "Guest",
    image: blog1,
    paragraphs: [
      "Orthopedic surgeons are experts in diagnosing and treating musculoskeletal issues, including bones, joints, muscles, and ligaments.",
      "Delaying treatment can lead to worsening pain, reduced mobility, and complications that require more invasive procedures.",
      "Understanding when to seek help can ensure quicker recovery and prevent chronic damage.",
    ],
    extra: {
      intro:
        "You should consider seeing an orthopedic surgeon if pain or mobility issues persist beyond a few days, or if you experience recurring injuries.",
      causesTitle: "Common Reasons to Visit",
      causes: [
        "Persistent joint or back pain",
        "Injuries that don’t heal with rest",
        "Limited range of motion",
        "Bone fractures or suspected fractures",
        "Joint swelling or deformity",
      ],
      symptomsTitle: "Warning Signs",
      symptomsIntro:
        "Some symptoms indicate you should seek orthopedic consultation immediately:",
      symptoms: [
        { title: "Severe Pain", desc: "Pain that interferes with daily life" },
        { title: "Swelling", desc: "Unexplained swelling in joints or limbs" },
        {
          title: "Mobility Issues",
          desc: "Difficulty walking or using a limb",
        },
      ],
      reliefTitle: "Treatment Options",
      reliefIntro:
        "Treatment varies depending on the diagnosis, but may include:",
      relief: [
        "Physical therapy and rehabilitation",
        "Pain management strategies",
        "Minimally invasive procedures",
        "Surgical interventions when necessary",
      ],
      tipTitle: "Act Early for Better Outcomes",
      tipText:
        "Timely consultation with an orthopedic specialist can prevent further complications and speed up recovery.",
    },
  },
  {
    id: 2,
    title: "Understanding Osteoarthritis: Causes, Symptoms, and Relief",
    post: "A practical guide to managing osteoarthritis through lifestyle changes, therapy, and modern treatments.",
    date: "December 16, 2024",
    author: "Guest",
    image: blog2,
    paragraphs: [
      "Osteoarthritis is a degenerative joint disease that gradually wears away cartilage, leading to pain and stiffness.",
      "While age is a major factor, lifestyle, injuries, and genetics also play significant roles.",
      "Early detection and consistent management can greatly improve quality of life.",
    ],
    extra: {
      intro:
        "Osteoarthritis is one of the most common causes of joint discomfort worldwide, affecting millions of people.",
      causesTitle: "What Causes Osteoarthritis?",
      causes: [
        "Aging and natural joint wear-and-tear",
        "Previous joint injuries or trauma",
        "Obesity increasing stress on weight-bearing joints",
        "Repetitive stress due to job or activity",
        "Genetic predisposition",
        "Joint abnormalities present since birth",
      ],
      symptomsTitle: "Recognizing the Symptoms",
      symptomsIntro:
        "Osteoarthritis symptoms may develop gradually and worsen over time. Common signs include:",
      symptoms: [
        { title: "Joint Pain", desc: "Aching during or after movement" },
        {
          title: "Stiffness",
          desc: "Noticeable after inactivity or waking up",
        },
        {
          title: "Loss of Flexibility",
          desc: "Reduced range of motion in joints",
        },
      ],
      reliefTitle: "Managing and Finding Relief",
      reliefIntro:
        "While there’s no cure for osteoarthritis, symptoms can be managed effectively through:",
      relief: [
        "Physical therapy and low-impact exercises",
        "Pain-relieving medications or anti-inflammatories",
        "Weight management to reduce joint pressure",
        "Joint support devices like braces or orthotics",
        "Surgical options in severe cases (e.g., joint replacement)",
      ],
      tipTitle: "Don't Ignore Joint Pain",
      tipText:
        "Osteoarthritis is manageable with timely care. Speak to an orthopaedic specialist if you’re experiencing ongoing symptoms.",
    },
  },
  {
    id: 3,
    title: "Joint Replacement Myths Busted!",
    post: "Debunking the most common misconceptions about hip, knee, and shoulder replacement surgeries.",
    date: "July 15, 2024",
    author: "Guest",
    image: blog3,
    paragraphs: [
      "Many people avoid joint replacement surgery due to misconceptions and fear of long recovery times.",
      "Modern surgical techniques and rehabilitation protocols have drastically improved success rates.",
      "Knowing the facts can help you make informed healthcare decisions.",
    ],
    extra: {
      intro:
        "Joint replacement is a safe and effective procedure for restoring mobility and reducing chronic joint pain.",
      causesTitle: "Common Myths",
      causes: [
        "You’ll be bedridden for months after surgery",
        "Artificial joints don’t last long",
        "Surgery is only for the elderly",
        "Pain after surgery is unbearable",
        "Rehabilitation takes years",
      ],
      symptomsTitle: "When Is It Needed?",
      symptomsIntro: "Joint replacement may be considered if you have:",
      symptoms: [
        {
          title: "Severe Joint Pain",
          desc: "Persistent pain despite other treatments",
        },
        { title: "Joint Deformity", desc: "Visible changes in joint shape" },
        {
          title: "Loss of Function",
          desc: "Inability to carry out daily activities",
        },
      ],
      reliefTitle: "The Reality of Recovery",
      reliefIntro:
        "With modern techniques, most patients recover mobility within weeks to months.",
      relief: [
        "Early mobilization after surgery",
        "Structured physiotherapy programs",
        "Minimally invasive surgical options",
        "Prosthetics lasting 15–20 years or more",
      ],
      tipTitle: "Knowledge is Power",
      tipText:
        "Don’t let myths hold you back from life-changing surgery. Speak to an orthopedic specialist to learn the facts.",
    },
  },
];

const Blogs = () => {
  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(255,255,255,0.95)", zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="container position-relative z-2" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <span className="testimonial-badge">💙 Doctor's Blogs</span>
          <h2 className="fw-bold mt-3">Insights That Empower Your Health</h2>
          <p className="text-muted">
            Latest articles and tips written by professionals for your
            well-being.
          </p>
        </div>

        <div className="row g-lg-4 ms-lg-5 me-lg-5 ">
          {blogPosts.map((post) => (
            <div className="col-md-4 mt-3feed" key={post.id}>
              <div className="blog-card h-100 rounded-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="img-fluid w-100"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="p-3 flex-grow-1">
                  <h5 className="fw-semibold">{post.title}</h5>
                  <div className="d-flex text-muted small mb-2">
                    <i className="bi bi-calendar-event me-1"></i>
                    {post.date}
                    <span className="mx-2">•</span>
                    <i className="bi bi-tag me-1"></i>
                    Event
                  </div>
                </div>
                <div className="read-more-btn text-center">
                  <Link
                    to={`/singleblog/${post.id}`}
                    state={{ blog: post }}
                    className="text-white text-decoration-none fw-semibold"
                  >
                    READ MORE <i className="bi bi-arrow-up-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
