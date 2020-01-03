const getLanguages = require('@githubts/github-languages')

getLanguages()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error(error)
  })
