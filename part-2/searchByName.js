const clients = require('./clients.json')
const searchArg = process.argv[2]

const searchByName = (query) => {
  let queryLowerCase = query.toLowerCase()
  const searchResults = []
  clients.forEach((client) => {
    let name = client.rep_name.toLowerCase()
    if(name.startsWith(queryLowerCase)){
      const newContact = {}
      newContact.id = client.id
      newContact.rep_name = client.rep_name
      searchResults.push(newContact)
      searchResults.sort((a, b) => a.rep_name.localeCompare(b.rep_name))
    }
  })
   return searchResults
}

searchByName(searchArg)


 console.log(searchByName(searchArg));















 //
 // const clients = require('./clients.json')
 // const searchArg = process.argv[2]
 //
 // // creates a function that takes a single perameter
 // const searchByName = (query) => {
 //   //storing lower cased version of perameter it a variable
 //   let queryLowerCase = query.toLowerCase()
 //   const searchResults = []
 // //iterating through clients list.
 //   clients.forEach((client) => {
 // //lowercase the rep_name
 //     let name = client.rep_name.toLowerCase()
 // //compare lower cased name with lower cased query
 //     if(name.startsWith(queryLowerCase)){
 //       const newContact = {}
 //       newContact.id = client.id
 //       newContact.rep_name = client.rep_name
 //       searchResults.push(newContact)
 //     }
 //   })
 //    return searchResults
 // }
 //
 // searchByName(searchArg)
 //
 //
 //  console.log(searchByName(searchArg));