const Services = {}
// const baseRoute = 'https://www.ezowo.com/shop/apis/v1/'
const baseRoute = 'https://ezowo.com/api/'

const serializeJSON = function(data) {
  return Object.keys(data)
    .map(function(keyName) {
      return (
        `${encodeURIComponent(keyName)}=${  encodeURIComponent(data[keyName])}`
      )
    })
    .join('&')
}

Services.getData = (queryUrl, queryData) => {
  if (!navigator.onLine) {
    alert('You are not Online !!!')
    return false
  }
  let url = `${baseRoute + queryUrl  }?token=${  localStorage.token}&tz=${new Date().getTimezoneOffset()}`
  if (queryData !== undefined) {
    url = `${url  }&${  serializeJSON(queryData)}`
  }
  const fetchPromise = fetch(url, {
    headers: {
      'Content-Type': 'application/json'
      // usertoken: localStorage.token
    },

    method: 'GET'
  })

  const checkToken = fetchPromise
 
  fetchPromise.then(response =>  response.clone().json())
  .then(response => {
    if (response && response.response.code === -1) {
      localStorage.setItem('user_expired', 1)
      window.location.href = '/shop/login'
    } else if (response && response.response.code === -2) {
      localStorage.setItem('user_expired', 2)
      window.location.href = '/shop/login'  
    }
  })
  return checkToken
}

// Services.getDataWithToken = (queryUrl, queryData) => {
//   if (!navigator.onLine) {
//     window.location.href = '/shop/login'
//   }

//   let url = ''
//   if (queryData === undefined) {
//     url = baseRoute + queryUrl
//   } else {
//     url = baseRoute + queryUrl + '?' + serializeJSON(queryData)
//   }
//   // url = ( url.indexOf('?')>-1 ? url : url+'?token='+localStorage.token )
  
//   let fetchPromise = fetch(url, {
//     headers: {
//       'Content-Type': 'application/json',
//       token: localStorage.token
//     },

//     method: 'GET'
//   })

//   let checkToken = fetchPromise
 
//   fetchPromise.then(response =>  response.clone().json() )
//   .then(response => {
//     if(response && response.code == -1){
//       localStorage.setItem('user_expired', 1);
//       window.location.href = '/shop/login'
//     } else if(response && response.code == -2){
//       localStorage.setItem('user_expired', 2);
//       window.location.href = '/shop/login'  
//     }
//   })

//   return checkToken
// }

Services.postDataWithoutToken = function(queryUrl, queryData) {
  const url = `${baseRoute + queryUrl  }?tz=${  new Date().getTimezoneOffset()}`
  return fetch(url, {
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type' : 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(queryData)
    // body: queryData
  })
}

Services.postData = function(queryUrl, queryData) {

  const url = `${baseRoute + queryUrl  }?token=${localStorage.token}&tz=${new Date().getTimezoneOffset()}`
  return fetch(url, {
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type' : 'application/json'
      // token: localStorage.token
    },
    method: 'POST',
    body: JSON.stringify(queryData)
    // body: queryData
  })
}

// Services.postFormData = function(queryUrl, queryData) {
//   const url = baseRoute + queryUrl
//   return fetch(url, {
//     headers: {
//       // 'Content-Type': 'application/x-www-form-urlencoded'
//       'Content-Type' : 'application/json'
//     },
//     method: 'POST',
//     body: serializeJSON(queryData)
//     // body: queryData
//   })
// }

export default Services