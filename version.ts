// Creating interface for Input
interface Version {
    version: string,
    releaseDate: Date,
    bugID: string[] | string,
    features: string[] | string,
    author: string[] | string,
    versionType: string
}
// Version informations
const data: Version[] = [{
    version: "3.1.3",
    releaseDate: new Date("02-02-2010"),
    bugID: "BUG1",
    features: ["67A", "87Z"],
    author: ["Apple", "Vivo"],
    versionType: "patch"
},
{
    version: "4.2.1",
    releaseDate: new Date("22-11-2010"),
    bugID: "BUG2",
    features: ["67A", "76K"],
    author: ["Oppo", "Samsung"],
    versionType: "Enhancement"
},
{
    version: "5.1.1",
    releaseDate: new Date("07-05-2012"),
    bugID: "BUG3",
    features: ["91A", "55B"],
    author: ["Apple", "Samsung"],
    versionType: "patch"
},
{
    version: "6.1.6",
    releaseDate: new Date("21-02-2014"),
    bugID: "BUG4",
    features: ["56A", "34A"],
    author: ["Apple", "Xiomi"],
    versionType: "major"
},
{
    version: "7.1.2",
    releaseDate: new Date("30-06-2014"),
    bugID: "BUG5",
    features: ["45G", "45J"],
    author: ["Xiomi"],
    versionType: "patch"
}
]
// Bug List
const bugList = [{
    bugID: "BUG1",
    bug: "Fixes issue"
}, {
    bugID: "BUG2",
    bug: "performance"
}, {
    bugID: "BUG3",
    bug: "Fixes battery drain bug."
}, {
    bugID: "BUG4",
    bug: "audio profile for speakerphone"
}, {
    bugID: "BUG5",
    bug: "Stability"
}
]
// find Information by Year
function findByReleaseYear(year: any) {
    console.log("---------------------------------------------------------------------------")
    let filteredYear = data.filter(n => n.releaseDate.toString().includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.log(filteredYear)
    console.log("---------------------------------------------------------------------------")
}
// find Information by Bug
function findByBugID(str: string) {
    console.log("---------------------------------------------------------------------------")
    bugList.forEach(element => {
        if (element.bugID == str) {
            console.log(element.bug)
        }
    })
    console.log("---------------------------------------------------------------------------")
}
// find Information by Type
function findByType(type: string) {
    console.log("---------------------------------------------------------------------------")
    let findType = data.filter(n => n.versionType.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.table(findType)
    console.log("---------------------------------------------------------------------------")
}
// find Information by Features
function findByFeature(str: string) {
    console.log("---------------------------------------------------------------------------")
    let feature = data.filter(n => n.features.includes(str))
    console.log(`${feature.length} versions have ${str} Feature...`)
    console.log(feature)
    console.log("---------------------------------------------------------------------------")
}
// Finding which author had more Updated
function findHighestUpdatedByAuthor() {
    let authorNames: string[] = []
    data.forEach(element => {
        for (let i of element.author) {
            authorNames.push(i)
        }
    });
    let m = 1
    let authorName = "default";
    let mostFrequent = 1
    for (let i = 0; i < authorNames.length; i++) {
        for (let j = 1; j < authorNames.length; j++) {
            if (authorNames[i] == authorNames[j]) {
                m++
            }
            if (mostFrequent < m) {
                mostFrequent = m
                authorName = authorNames[i]
            }
        }
        m = 0
    }
    console.log("---------------------------------------------------------------------------")
    console.log(`The author ${authorName} has worked on more no of releases, the count is ${mostFrequent}`)
    console.log("---------------------------------------------------------------------------")
}
//---------------------------------------------------------------------------------------
// Question 1
// How many releases were made in year
console.log("Question 1")
findByReleaseYear(2010)

// Question 2
// In which release specific bugid is present
console.log("Question 2")
findByBugID("BUG1")

// Question 3
// Which author has worked in many releases
console.log("Question 3")
findHighestUpdatedByAuthor()

// Question 4
// How many releases were type of major
console.log("Question 4")
findByType("major")

// Question 5
// How many versions have the specific feature name
console.log("Question 5")
findByFeature("67A")

//---------------------------------------------------------------------------------------