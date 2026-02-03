// Data for dynamic sections
const skills = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Data Science",
    "Python, R, MATLAB",
    "Research Methodology",
    "Academic Writing"
];

const projects = [
    {
        title: "AI-based Student Performance Predictor",
        description: "Developed a machine learning model to predict student outcomes using demographic and academic data.",
        link: "#"
    },
    {
        title: "NLP for Automated Grading",
        description: "Created a natural language processing system to automate grading of short answers and essays.",
        link: "#"
    },
    {
        title: "Research Paper Recommender System",
        description: "Built a recommender system to suggest relevant research papers to students and faculty.",
        link: "#"
    }
];

const experience = [
    {
        role: "Professor of Computer Science",
        place: "ABC University",
        years: "2015 - Present",
        details: "Leading research in AI and mentoring graduate students."
    },
    {
        role: "Associate Professor",
        place: "XYZ Institute of Technology",
        years: "2010 - 2015",
        details: "Taught core courses in machine learning and data science."
    },
    {
        role: "Postdoctoral Researcher",
        place: "Global AI Lab",
        years: "2008 - 2010",
        details: "Worked on deep learning algorithms for image recognition."
    }
];

// Render skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Render projects
const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}">Learn more</a>`;
    projectsList.appendChild(div);
});

// Render experience
const experienceList = document.getElementById('experience-list');
experience.forEach(exp => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${exp.role}</strong> at ${exp.place} (${exp.years})<br><span>${exp.details}</span>`;
    experienceList.appendChild(li);
});

// Contact form handler
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = "Thank you for reaching out! Your message has been sent.";
    contactForm.reset();
});
