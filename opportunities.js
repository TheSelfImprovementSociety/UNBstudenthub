const opportunities = [
  // VOLUNTEERING
  {
    title: "Promise Partnership",
    organization: "Promise Partnership",
    category: "Volunteer",
    location: "Saint John",
    type: "Mentoring",
    description: "Mentor school students and help support youth development.",
    purpose: "Mentor school students",
    link: "https://www.instagram.com/promisepartnership/"
  },
  {
    title: "Swim with a Mission",
    organization: "Swim with a Mission",
    category: "Volunteer",
    location: "Saint John",
    type: "Youth & Water Safety",
    description: "Teach young people water safety and swimming skills.",
    purpose: "Teach young ones water safety & swim skills",
    link: "https://www.instagram.com/swam.saintjohn/"
  },
  {
    title: "Saint John Newcomers Centre",
    organization: "Saint John Newcomers Centre",
    category: "Volunteer",
    location: "Saint John",
    type: "Community",
    description: "Support newcomers and contribute to community inclusion.",
    purpose: "Help newcomers",
    link: "https://www.instagram.com/sjnewcomerscentre/"
  },
  {
    title: "PRUDE Inc.",
    organization: "PRUDE Inc.",
    category: "Volunteer",
    location: "Saint John",
    type: "Diversity & Inclusion",
    description: "Get involved in diversity, equity, inclusion and community initiatives.",
    purpose: "Support diversity and inclusion",
    link: "https://www.prudeinc.org/"
  },
  {
    title: "SVNB Helpline",
    organization: "Sexual Violence New Brunswick",
    category: "Volunteer",
    location: "New Brunswick",
    type: "Community Support",
    description: "Explore volunteer opportunities with Sexual Violence New Brunswick.",
    purpose: "Community support",
    link: "https://svnb.ca/en/volunteer/"
  },
  {
    title: "Horizon Health Network",
    organization: "Horizon Health Network",
    category: "Volunteer",
    location: "New Brunswick",
    type: "Healthcare",
    description: "Explore healthcare volunteering opportunities across New Brunswick.",
    purpose: "Healthcare volunteering",
    link: "https://careers.horizonnb.ca/en/volunteering/"
  },
  {
    title: "Social Pediatrics NB",
    organization: "Social Pediatrics NB",
    category: "Volunteer",
    location: "New Brunswick",
    type: "Healthcare & Community",
    description: "Explore opportunities connected to children, youth and community health.",
    purpose: "Support children, youth & community health",
    link: "https://www.nbsocialpediatrics.com/"
  },
  {
    title: "Community Volunteering Club",
    organization: "UNB Saint John",
    category: "Volunteer",
    location: "Saint John",
    type: "Fundraising & Community",
    description: "Take part in fundraising and community support activities through the student club.",
    purpose: "Fundraising / community support",
    link: "https://www.instagram.com/volunteeringunbsj/"
  },
  {
    title: "UNB Volunteer Hub",
    organization: "UNB Career Development & Employment Services",
    category: "Volunteer",
    location: "UNB / Saint John",
    type: "Search Tool",
    description: "Find current volunteer opportunities and community causes available to UNB students.",
    purpose: "Find volunteer opportunities",
    link: "https://www.unb.ca/sas/employment/volunteer-hub.html"
  },
  {
    title: "Saint John Cares Inc.",
    organization: "Saint John Cares Inc.",
    category: "Volunteer",
    location: "Saint John",
    type: "Community",
    description: "Find ways to help others and get involved in the local community.",
    purpose: "Community support",
    link: "https://www.stjohnscares.org/ways-to-help-others.html"
  },
  {
    title: "Volunteer Success",
    organization: "Volunteer Search Engine",
    category: "Volunteer",
    location: "Online",
    type: "Search Tool",
    description: "Search for volunteer opportunities using filters for location, category and student opportunities.",
    purpose: "Search volunteer opportunities",
    link: "https://volunteersuccess.com/opportunities?province=NB&keywords=&categories=&virtual=&events=&person=&student=&adult=&groups=&distance=1&postal_code=&distance_km=25"
  },
  {
    title: "Greater Saint John Volunteer Connector",
    organization: "Greater Saint John Volunteer Connector",
    category: "Volunteer",
    location: "Saint John",
    type: "Search Tool",
    description: "Find volunteer opportunities across Greater Saint John.",
    purpose: "Search local volunteer opportunities",
    link: "https://gsjvolunteer.ca/"
  },

  // CERTIFICATES & TRAINING
  {
    title: "Be There Certificate",
    organization: "Be There Certificate",
    category: "Certificates",
    location: "Online",
    type: "Certificate",
    description: "Complete training focused on how to support someone who may be struggling.",
    purpose: "Build skills for supporting others",
    link: "https://www.betherecertificate.org/"
  },
  {
    title: "Seeds of Change",
    organization: "Sexual Violence New Brunswick",
    category: "Certificates",
    location: "New Brunswick / Online",
    type: "Bystander Training",
    description: "Bystander training. The source information notes discounted or free options for UNB students.",
    purpose: "Learn bystander intervention skills",
    link: "https://svnb.ca/en/courses/seeds-of-change/"
  },
  {
    title: "DEI Training",
    organization: "PRUDE Inc.",
    category: "Certificates",
    location: "Saint John / Online",
    type: "DEI Training",
    description: "Explore diversity, equity and inclusion training designed to build awareness and practical skills.",
    purpose: "Develop diversity, equity & inclusion skills",
    link: "https://www.prudeinc.org/dei/"
  },

  // PLACEHOLDERS FOR FUTURE SECTIONS
  {
    title: "Courses & Learning",
    organization: "Add curated student courses here",
    category: "Courses",
    location: "Online",
    type: "Learning",
    description: "Add online and local courses, learning platforms and educational experiences as you curate them.",
    purpose: "Build knowledge and skills",
    link: "https://www.coursera.org/"
  },
  {
    title: "Jobs & Internships",
    organization: "Add curated student opportunities here",
    category: "Jobs",
    location: "Canada",
    type: "Career",
    description: "Add student jobs, internships, work-study positions and other career opportunities here.",
    purpose: "Gain work experience",
    link: "https://www.unb.ca/"
  },
  {
    title: "Scholarships & Awards",
    organization: "Add curated funding opportunities here",
    category: "Scholarships",
    location: "Canada",
    type: "Funding",
    description: "Add scholarships, awards and other funding opportunities here.",
    purpose: "Find student funding",
    link: "https://www.unb.ca/"
  },
  {
    title: "Leadership & Campus Opportunities",
    organization: "UNB Saint John",
    category: "Leadership",
    location: "Saint John",
    type: "Leadership",
    description: "Add campus leadership roles, student societies and other ways to get involved.",
    purpose: "Build leadership experience",
    link: "https://www.unb.ca/saintjohn/"
  },
  {
    title: "Career & Academic Resources",
    organization: "UNB",
    category: "Career",
    location: "Saint John",
    type: "Resource",
    description: "Add resume, LinkedIn, academic, career and professional development resources.",
    purpose: "Develop career and academic skills",
    link: "https://www.unb.ca/"
  }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const category = document.getElementById("category");
const location = document.getElementById("location");
const count = document.getElementById("count");
const empty = document.getElementById("empty");

const icons = {
  Volunteer: "🤝",
  Certificates: "📜",
  Courses: "🎓",
  Jobs: "💼",
  Scholarships: "🏆",
  Leadership: "🌱",
  Career: "📚"
};

function init() {
  if (!grid || !search || !category || !location || !count || !empty) return;

  // Prevent duplicate filter options if the script is ever initialized twice.
  category.querySelectorAll("option:not(:first-child)").forEach(option => option.remove());
  location.querySelectorAll("option:not(:first-child)").forEach(option => option.remove());

  const categories = [...new Set(opportunities.map(o => o.category))].sort();
  const locations = [...new Set(opportunities.map(o => o.location))].sort();

  categories.forEach(c => category.add(new Option(c, c)));
  locations.forEach(l => location.add(new Option(l, l)));

  document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      category.value = button.dataset.category;
      render();
      const header = document.querySelector(".opportunity-header");
      if (header) {
        window.scrollTo({
          top: header.offsetTop - 25,
          behavior: "smooth"
        });
      }
    });
  });

  search.addEventListener("input", render);
  category.addEventListener("change", render);
  location.addEventListener("change", render);

  render();
}

function render() {
  const term = search.value.trim().toLowerCase();
  const selectedCategory = category.value;
  const selectedLocation = location.value;

  const results = opportunities.filter(o => {
    const searchable = [
      o.title,
      o.organization,
      o.category,
      o.location,
      o.type,
      o.description,
      o.purpose
    ].join(" ").toLowerCase();

    return (!term || searchable.includes(term))
      && (selectedCategory === "All" || o.category === selectedCategory)
      && (selectedLocation === "All" || o.location === selectedLocation);
  });

  grid.innerHTML = "";

  results.forEach(o => {
    const card = document.createElement("article");
    card.className = "card";

    const safeLink = /^https?:\/\//i.test(o.link) ? o.link : "#";

    card.innerHTML = `
      <span class="tag">${icons[o.category] || "⭐"} ${escapeHtml(o.category)}</span>
      <h3>${escapeHtml(o.title)}</h3>
      <div class="org">${escapeHtml(o.organization)}</div>
      <p>${escapeHtml(o.description)}</p>
      <div class="purpose"><strong>Purpose:</strong> ${escapeHtml(o.purpose)}</div>
      <div class="meta">
        <span>📍 ${escapeHtml(o.location)}</span>
        <span>✦ ${escapeHtml(o.type)}</span>
      </div>
      <a class="apply" href="${safeLink}" target="_blank" rel="noopener noreferrer">Apply / Learn More →</a>
    `;

    grid.appendChild(card);
  });

  count.textContent = `${results.length} ${results.length === 1 ? "opportunity" : "opportunities"}`;
  empty.style.display = results.length ? "none" : "block";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
