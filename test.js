const { welcomeMessage } = require('./index');

function runTests() {
    console.log("🧪 Running tests...");
    let passed = 0;
    let total = 0;
    
    total++;
    if (typeof welcomeMessage === 'function') {
        console.log("✅ Test 1 passed: function exists");
        passed++;
    } else {
        console.log("❌ Test 1 failed");
    }
    
    total++;
    const result = welcomeMessage("Test");
    const expected = "Hello, Test! Welcome to GitHub Actions CI/CD lab.";
    if (result === expected) {
        console.log("✅ Test 2 passed: correct message");
        passed++;
    } else {
        console.log("❌ Test 2 failed");
    }
    
    console.log(`\n📊 Results: ${passed}/${total} passed`);
    
    if (passed === total) {
        console.log("✅ All tests passed!");
        process.exit(0);
    } else {
        console.log("❌ Some tests failed!");
        process.exit(1);
    }
}

runTests();