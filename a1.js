

/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ashika sapkota  Student ID: 14306739  Date: 5/24/2024
********************************************************************************/

console.log("Hello World"); 
// Step 3: Creating the "Server Paths"
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Ashika Sapkota",
    "Student Email asapkota13@myseneca.ca Ashika Sapkota",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

// Step 4: Creating the "web server simulator" Function - "httpRequest"
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Step 5: Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/")); // 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // 200: This course name is WEB700. This assignment was prepared by Ashika Sapkota
console.log(httpRequest("GET", "/contact")); // 200: Student Email asapkota13@myseneca.ca Ashika Sapkota
console.log(httpRequest("POST", "/login")); // 200: Hello, User Logged In
console.log(httpRequest("GET", "/panel")); // 200: Main Panel
console.log(httpRequest("POST", "/logout")); // 200: Logout Complete. Goodbye
console.log(httpRequest("PUT", "/")); // 404: Unable to process PUT request for /

// Step 6: Automating the Tests by creating a "automateTests" Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    
    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }
    
    setInterval(randomRequest, 1000);
}

// Step 7: Invoke the "automateTests" function
automateTests();
