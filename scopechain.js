{
    // scope1 - Block 1
    let fruit = "apple";
    {
        // scope2 - Block 2
        let fruit2 = "Mango";
        {
            // scope3 - Block 3
            let fruit3 = "Kiwi";
            console.log("scope3:", fruit3); // Kiwi
            console.log("scope3:", fruit2); // Mango
            console.log("scope3:", fruit);  // Apple
        }
        console.log("scope2:", fruit2); // Mango
        console.log("scope2:", fruit);  // Apple
    }
    console.log("scope1:", fruit); // Apple
    // console.log("scope1:", fruit2); // ❌ ReferenceError
    // console.log("scope1:", fruit3); // ❌ ReferenceError
}

