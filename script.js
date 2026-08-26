let opportunities = [];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const category = document.getElementById("category");
const locationFilter = document.getElementById("location");
const count = document.getElementById("count");
const empty = document.getElementById("empty");

async function loadOpportunities() {
  try {
    const response = await fetch("./opportunities.json?v=2", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load opportunities.json");
    opportunities = await response.json();
    buildFilters();
    render();
  } catch (error) {
    console.error(error);
    grid.innerHTML = `
      <div class="error-card">
        <strong>Opportunity data could not be loaded.</strong>
        <span>Please refresh the page or check that opportunities.json is in the repository.</span>
      </div>`;
    count.textContent = "";
  }
}

function buildFilters() {
  const categories = [...new Set(opportunities.map(o => o.category))].sort();
  const locations = [...new Set(opportunities.map(o => o.location))].sort();

  category.innerHTML = '<option value="All">All types</option>';
  locationFilter.innerHTML = '<option value="All">All locations</option>';

  categories.forEach(value => category.add(new Option(value, value)));
  location.forEach(value => locationFilter.add(new Option(value, value)));
}

function render() {
  const term = search.value.trim().toLowerCase();
  const selectedCategory = category.value;
  const selectedLocation = locationFilter.value;

  const results = opportunities.filter(o => {
    const searchable = [
      o.title, o.organization, o.category, o.location,
      o.type, o.description, o.purpose
    ].join(" ").toLowerCase();

    return (!term || searchable.includes(term)) &&
      (selectedCategory === "All" || o.category === selectedCategory) &&
      (selectedLocation === "All" || o.location === selectedLocation);
  });

  grid.innerHTML = results.map(o => `
    <article class="card">
      <div class="card-top">
        <span class="tag">${escapeHtml(o.category)}</span>
        <span class="type">${escapeHtml(o.type)}</span>
      </div>
      <h3>${escapeHtml(o.title)}</h3>
      <div class="org">${escapeHtml(o.organization)}</div>
      <p>${escapeHtml(o.description)}</p>
      <div class="purpose"><strong>Purpose</strong>${escapeHtml(o.purpose)}</div>
      <div class="meta">${escapeHtml(o.location)}</div>
      <a class="apply" href="${escapeAttribute(o.link)}" target="_blank" rel="noopener noreferrer">Learn more</a>
    </article>
  `).join("");

  count.textContent = `${results.length} ${results.length === 1 ? "opportunity" : "opportunities"}`;
  empty.style.display = results.length ? "none" : "block";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function escapeAttribute(value) {
  const safe = String(value);
  return /^https?:\/\//i.test(safe) ? safe.replace(/"/g, "%22") : "#";
}

search.addEventListener("input", render);
category.addEventListener("change", render);
locationFilter.addEventListener("change", render);

loadOpportunities();
