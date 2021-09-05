* [Çalışma Ortamı](#çalışma-ortamının-hazırlanması)
* [Bulduklarım](#--projeyi-yaparken-bulduklar%C4%B1m-)
## Çalışma Ortamının Hazırlanması
~~~
  > npm init -y
  > npm i express
  > npm i -D nodemon
  > npm i ejs
~~~
- HTTP Status Code List : `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`
- .gitignore Node       : `https://www.toptal.com/developers/gitignore/api/node`

#  🧪  Projeyi Yaparken Bulduklarım : 
### IF STATEMENT BASIT KULLANIM SEKILLERI :
~~~javascript 
// SWITCH KULLANABILIRSINIZ
switch (status) {
  case 200:
    handleSuccess()
    break
  case 401:
    handleUnauthorized()
    break
  case 404:
    handleNotFound()
    break
  default:
    handleUnknownError()
    break
}

// TENARY OLARAK KULLANABILIRSINIZ 
const message = hasError
  ? "Oops, that's an error. Please try again later!"
  : "Thanks for contacting us! We'll be in touch!"
  
// MANTIKSAL OPERATORLERI KULLANABILIRSINIZ 
let message = null
if (user && user.name) {
  message = `Welcome, ${user.name}!`
}
//BASIT HALI : 
const message = user && user.name && `Welcome, ${user.name}!`

let handle = 'Guest'
if (username) {
  handle = username
}
//BASIT HALI : 
const handle = username || 'Guest'

//LOOKUP MAP OLARAK KULLANABILIRSINIZ 
function getStatusColor (status) {
  if (status === 'success') {
    return 'green'
  }
  if (status === 'warning') {
    return 'yellow'
  }
  if (status === 'info') {
    return 'blue'
  }
  if (status === 'error') {
    return 'red'
  }
}

//BASIT HALI 
function getStatusColor (status) {
  return {
    success: 'green',
    warning: 'yellow',
    info: 'blue',
    error: 'red'
  }[status]
}
~~~
