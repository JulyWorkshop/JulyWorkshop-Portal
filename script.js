(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("july-workshop-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("july-workshop-theme", nextTheme);
  });

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = ["home", "projects", "about"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));
  }
})();
