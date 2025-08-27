// Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/blog4.jpeg";
import blog5 from "../assets/blog5.jpeg";
import blog6 from "../assets/blog6.jpeg";
import bgPattern from "../assets/blog-bg.png";

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
  {
    id: 4,
    title: "Building Strong Bones at Every Age",
    post: "Bone health is vital for strength, mobility, and overall wellness. Learn how to protect your bones at every stage of life.",
    date: "July 10, 2024",
    author: "Guest",
    image: blog4,
    paragraphs: [
      "Bone health is crucial at every stage of life. Strong bones provide structure, protect organs, anchor muscles, and store calcium.",
      "Whether you're in your teens or your golden years, there are effective strategies to maintain and improve bone strength.",
    ],
    extra: {
      intro:
        "Healthy bones are built over a lifetime. The right habits can protect you from osteoporosis and fractures later in life.",
      causesTitle: "Key Factors for Strong Bones",
      causes: [
        "Adequate calcium and vitamin D intake",
        "Regular weight-bearing and strength-training exercises",
        "Avoiding smoking and excessive alcohol",
        "Hormonal balance and regular health screenings",
        "Genetic predisposition and family history",
        "Maintaining a balanced diet rich in nutrients",
      ],
      symptomsTitle: "Signs Your Bones May Need Attention",
      symptomsIntro:
        "Bone loss can be silent. Watch for these signs, especially as you age:",
      symptoms: [
        {
          title: "Frequent Fractures",
          desc: "Especially from minor falls or stress",
        },
        {
          title: "Back or Neck Pain",
          desc: "Caused by fractured or collapsed vertebrae",
        },
        {
          title: "Loss of Height",
          desc: "Gradual stooping or shrinking in stature",
        },
      ],
      reliefTitle: "How to Boost Bone Health",
      reliefIntro:
        "Here are proven ways to strengthen your bones and reduce the risk of osteoporosis:",
      relief: [
        "Consume calcium-rich foods like dairy, leafy greens, and almonds",
        "Get regular sun exposure or take vitamin D supplements",
        "Engage in resistance training and balance exercises",
        "Avoid a sedentary lifestyle",
        "Consult your doctor for bone density tests after age 50",
      ],
      tipTitle: "Your Bone Health Matters",
      tipText:
        "Protecting your bones early helps ensure mobility, independence, and vitality throughout life.",
    },
  },
  {
    id: 5,
    title: "Joint Replacement Myths Busted!",
    post: "Debunking the most common misconceptions about hip, knee, and shoulder replacement surgeries.",
    date: "July 15, 2024",
    author: "Guest",
    image: blog5,
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
  {
    id: 6,
    title: "Recovering After Orthopedic Surgery",
    post: "Orthopedic surgery can be life-changing, offering relief from chronic pain and improved mobility. Understanding the recovery process ensures a smoother return to daily life.",
    date: "August 27, 2024",
    author: "Guest",
    image: blog6,
    paragraphs: [
      "Undergoing orthopedic surgery can be a life-changing step toward relieving chronic pain or improving mobility.",
      "Whether it’s a joint replacement, fracture repair, or spinal surgery, understanding the recovery process helps ensure a smoother, faster return to your daily activities.",
    ],
    extra: {
      intro:
        "Recovery after orthopedic surgery depends on multiple factors. With the right care and discipline, you can heal faster and regain mobility.",
      causesTitle: "Factors That Affect Recovery",
      causes: [
        "Type and complexity of surgery",
        "Your overall health and age",
        "Pre-surgery physical condition",
        "Postoperative care and rehab adherence",
        "Nutrition and rest during recovery",
        "Support from caregivers and medical professionals",
      ],
      symptomsTitle: "What You Might Experience After Surgery",
      symptomsIntro:
        "Post-surgery symptoms are common and usually temporary. Expect:",
      symptoms: [
        {
          title: "Swelling & Bruising",
          desc: "Around the surgical site as your body heals",
        },
        {
          title: "Temporary Pain",
          desc: "Managed with medication and gradually subsides",
        },
        {
          title: "Limited Mobility",
          desc: "Initially restricted depending on surgery type",
        },
      ],
      reliefTitle: "Steps for a Successful Recovery",
      reliefIntro:
        "Taking an active role in your recovery journey helps speed healing and restore mobility.",
      relief: [
        "Follow all post-operative instructions from your surgeon",
        "Attend physical therapy sessions consistently",
        "Eat a balanced diet rich in protein and vitamins",
        "Avoid smoking and alcohol to enhance healing",
        "Use assistive devices as recommended (crutches, braces, etc.)",
      ],
      tipTitle: "Stay Committed",
      tipText:
        "Recovery is a gradual process. With patience and consistency, you’ll return to your active lifestyle.",
    },
  },
];
const Blogs = ({ home = false }) => {
  // if home = true → only show 3 blogs, else show all
  const postsToShow = home ? blogPosts.slice(0, 3) : blogPosts;

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

        <div className="row g-lg-4 ms-lg-5 me-lg-5">
          {postsToShow.map((post) => (
            <div className="col-md-4 mt-3 feed" key={post.id}>
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

        {/* Show "View All Blogs" button only on home */}
        {home && (
          <div className="text-center mt-4">
            <Link
              to="/blog"
              className="btn btn-primary fw-semibold rounded-pill px-4"
            >
              View All Blogs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
