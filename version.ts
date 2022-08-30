// Creating interface for Input
interface Version {
    version: string,
    releaseDate: string,
    bugs: string[] | string,
    features: string[] | string,
    author: string[] | string,
    versionType: string
}
// Version informations
const data: Version[] = [{
    version: "3.1.3",
    releaseDate: "February 2, 2010",
    bugs: ["Fixes issue"],
    features: ["67A", "87Z"],
    author: ["Apple", "Vivo"],
    versionType: "patch"
},
{
    version: "4.2.1",
    releaseDate: "November 22, 2010",
    bugs: ["performance"],
    features: ["67A", "76K"],
    author: ["Oppo", "Samsung"],
    versionType: "Enhancement"
},
{
    version: "5.1.1",
    releaseDate: "May 7, 2012",
    bugs: ["Fixes battery drain bug."],
    features: ["91A", "55B"],
    author: ["Apple", "Samsung"],
    versionType: "patch"
},
{
    version: "6.1.6",
    releaseDate: "February 21, 2014",
    bugs: ["audio profile for speakerphone"],
    features: ["56A", "34A"],
    author: ["Apple", "Xiomi"],
    versionType: "major"
},
{
    version: "7.1.2",
    releaseDate: "June 30, 2014",
    bugs: ["Stability"],
    features: ["45G", "45J"],
    author: ["Xiomi"],
    versionType: "patch"
}
]
// find Information by Year
function findByReleaseYear(year: any) {
    console.log("---------------------------------------------------------------------------")
    let filteredYear = data.filter(n => n.releaseDate.includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.log(filteredYear)
    console.log("---------------------------------------------------------------------------")
}
// find Information by Bug
function findByBug(str: string) {
    console.log("---------------------------------------------------------------------------")
    let bug = data.filter(n => n.bugs.includes(str))
    console.log(`${bug.length} version have ${str} Bug...`)
    console.log(bug)
    console.log(bug.length, "Bugs")
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
// find Information by Author Name
function findByAuthor(name: string) {
    console.log("---------------------------------------------------------------------------")
    let authorName = data.filter(n => n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.log(authorName)
    console.log("---------------------------------------------------------------------------")
}
// find Information by Version
function findByVersion(ver: string) {
    console.log("---------------------------------------------------------------------------")
    let version = data.filter(n => n.version == ver)
    console.log(version)
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
findHighestUpdatedByAuthor()
findByType("patch")
findByBug("Stability")
findByReleaseYear(2010)
findByFeature("67A")
findByAuthor("Apple")
findByVersion("5.1.1")
//---------------------------------------------------------------------------------------