let form = document.getElementById('form');
let progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (event) => {
    if(event.lengthComputable) {
      let percent = (event.loaded / event.total) * 100;
      progress.value = percent.toFixed(2);
    }
  });
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    } else if (xhr.readyState === 4) {
      console.log('Error: ', xhr.statusText);
    }
  };

  xhr.send(formData);
})

