const api_url = 'https://zenquotes.io/api/today/';

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.getElementById('quoteText').innerHTML = data[0].q;
  document.getElementById('sourceText').innerHTML = data[0].a;
  document.getElementById('sourceUrl').href = 'https://zenquotes.io/';
}

getapi(api_url);
