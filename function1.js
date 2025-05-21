function customerdetails(location,dob,number,company){
    let customername="SANDEEP";
    console.log("CustomerName: " +customername);
    console.log("CustomerLocation: "+location)
    console.log("CustomerDOB: "+dob)
    console.log("CustomerNumber: " +number)
    console.log("CustomerCompany: " +company)
    
}
customerdetails("KDP",30/04/1996","8886264026","SHIFHA")

//here (location,dob,number,comapny )these are parameters.
//here (""KDP",30/04/1996","8886264026","SHIFHA"") are arguments.

function companydetails( name,branchno,numofbranches){
    let branchesstates=["AP","TS","TN"]
    let telanganabranches=["HYD","WARANGAL"] //Implemented array
    var andhrabranches ={                   //Implemented Object
        branch1:"Vijayawada",
        branch2:"Amaravathi",
        branch3:"Kadapa",
 
    }
    console.log("CompanyName: " +name)
    console.log("TamilBranche:" +branchesstates[2])
    console.log("TS Branch:" +telanganabranches[0])
    console.log("Branches in Rayalaseema: " +andhrabranches.branch3)

}
companydetails("SHIFHA","2","5")
 //optional parameter
function movie( moviename,hero,heroine,language,releasedate,collection){
    console.log("MOVIENAME:" +moviename)
   console.log("HERONAME: " +hero)
    console.log("HEROINENAME: " +heroine)
    console.log("MovieLangiage: "+language)
     releasedate = releasedate || "May 1st"; 
    console.log("MovieReleaseDate: " +releasedate)
   
    console.log("MOVIECOLLECTION:" +collection)
}
movie("HIT3","NANI","SRINIDHI","TELUGU","", "150cr")

//default parameter

function paper(name,owner,language, origin="Andhra Pradesh"){
    document.write("Papername: " +name)
    document.write("PaperOwner: " +owner)
    document.write("PaperLanguage: " +language)
    document.write("PaperOrigin: " +origin)

}
paper("ENADU","RamojiNaidu","Telugu")
console.log(paper)

//rest parameters
function music(... parameters){
    console.log(parameters)
console.log("MUSICRECTOR: " +parameters[0])
console.log("MOVIENAME: " +parameters[1])
console.log("MUSICLANGUAGE:" +parameters[2])
console.log("MOVIEDIRECTOR:" +parameters[3])
}
music("A.R.RAHMAN","BOMBAY","MULTIPLE","MANI RTANAM")