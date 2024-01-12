document.addEventListener('DOMContentLoaded', function() {
    var projects = [
        // { name: 'Project 1', description: 'Description of project 1', link: 'http://link-to-project1.com' },
        // Add more projects here
    ];

    var projectsContainer = document.getElementById('projects');
    projects.forEach(function(project) {
        var projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
});
