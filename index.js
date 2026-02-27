// Simple Node.js application for CI/CD lab
console.log("🚀 CI/CD Pipeline Lab");
console.log("Application started successfully!");

function welcomeMessage(name) {
    return `Hello, ${name}! Welcome to GitHub Actions CI/CD lab.`;
}

if (require.main === module) {
    const name = "Student";
    console.log(welcomeMessage(name));
}

module.exports = { welcomeMessage };