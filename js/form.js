const scriptURL = 'https://script.google.com/macros/s/AKfycbxx7pAlbePveahk9iP36faXNIYtU-B4xRcCrWkBJZs4TAQ1ZRqB5LRFEXMMKrJrd1doeg/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
   e.preventDefault()
   $('#form-submit-modal').modal('show')
   fetch(scriptURL, { method: 'POST', body: new FormData(form)});
   form.reset();
})
