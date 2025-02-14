const lotr = {title:"Lord of the Rings", description:"Awesome", author:"JRR Tolkien", pages: 1008}
console.log(lotr)
console.log(lotr.title)
console.log(lotr.description)
console.log(lotr.author)
console.log(lotr.pages)

function printAttributes(object) { 
    Object.values(object).forEach((val) => console.log(val))
}

function updateDescription(book, description) {
    book.description = description
}

updateDescription(lotr, "The Best")
console.log(lotr)
console.log(lotr.description)

const theWitcher = {title:"The Witcher", description:"Slice and Dice", author:"Andrzej Sapkowski", pages: 512}
const hamlet = {title:"Hamlet", description:"I Don't Know", author:"William Shakespear", pages: 5}
const littleWomen = {title:"Little Women", description:"Coming of Age", author:"Louisa May Alcott", pages: 234}
const holes = {title:"Holes", description:"Digging Holes", author:"Louis Sachar ", pages: 4562}


const library = Array(lotr, theWitcher, hamlet, littleWomen, holes)
console.log(library)
console.log(library[2].author)

printAttributes(theWitcher)
printAttributes(lotr)
printAttributes(hamlet)
printAttributes(littleWomen)
printAttributes(holes)




