var proxyUrl = 'http://localhost:3000/',
    targetUrl = 'http://dbtool.perdix.co.in:8081/api/clients?product=perdix&scope=Client%20Data'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });