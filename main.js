 fetch('healthy.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('healthy').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));