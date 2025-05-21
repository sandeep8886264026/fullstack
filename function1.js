// Function with parameters and arguments
function customerDetails(location, dob, number, company) {
    let customerName = "SANDEEP";
    console.log("Customer Name: " + customerName);
    console.log("Customer Location: " + location);
    console.log("Customer DOB: " + dob);
    console.log("Customer Number: " + number);
    console.log("Customer Company: " + company);
}

// Corrected date argument (should be in quotes)
customerDetails("KDP", "30/04/1996", "8886264026", "SHIFHA");


// Function demonstrating array and object usage
function companyDetails(name, branchNo, numOfBranches) {
    let branchesStates = ["AP", "TS", "TN"];
    let telanganaBranches = ["HYD", "WARANGAL"]; // Array
    let andhraBranches = {                       // Object
        branch1: "Vijayawada",
        branch2: "Amaravathi",
        branch3: "Kadapa",
    };

    console.log("Company Name: " + name);
    console.log("Tamil Nadu Branch: " + branchesStates[2]);
    console.log("TS Branch: " + telanganaBranches[0]);
    console.log("Branch in Rayalaseema: " + andhraBranches.branch3);
}

companyDetails("SHIFHA", "2", "5");


// Function with optional parameter using fallback (||)
function movie(movieName, hero, heroine, language, releaseDate, collection) {
    releaseDate = releaseDate || "May 1st"; // Fallback value
    console.log("Movie Name: " + movieName);
    console.log("Hero Name: " + hero);
    console.log("Heroine Name: " + heroine);
    console.log("Language: " + language);
    console.log("Release Date: " + releaseDate);
    console.log("Collection: " + collection);
}

movie("HIT3", "NANI", "SRINIDHI", "TELUGU", "", "150cr");


// Function with default parameter
function paper(name, owner, language, origin = "Andhra Pradesh") {
    console.log("Paper Name: " + name);
    console.log("Owner: " + owner);
    console.log("Language: " + language);
    console.log("Origin: " + origin);
}

paper("ENADU", "Ramoji Naidu", "Telugu");


// Function using rest parameters
function music(...parameters) {
    console.log("All Parameters:", parameters);
    console.log("Music Director: " + parameters[0]);
    console.log("Movie Name: " + parameters[1]);
    console.log("Music Language: " + parameters[2]);
    console.log("Movie Director: " + parameters[3]);
}

music("A.R.RAHMAN", "BOMBAY", "MULTIPLE", "MANI RATNAM");
