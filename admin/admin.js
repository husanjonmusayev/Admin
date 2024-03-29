let table = document.getElementById('table')
let phonName = document.getElementById('name')
let prace = document.getElementById('prace')
let stet = document.getElementById('status')
let formControl = document.querySelector('#exampleFormControlTextarea1')
let category = document.getElementById('category')
let btn = document.getElementById('btn')
let caunt = 1;


function validate() {
   if (!phonName.value) {
      phonName.style.borderColor = "red"
      phonName.focus()
      return false
   } else {
      phonName.style.borderColor = "none"
   }
   if (!prace.value) {
      prace.style.borderColor = "red"
      prace.focus()
      return false
   } else {
      prace.style.borderColor = "none"
   }

   if (!category.value) {
      category.style.borderColor = "red"
      category.focus()
      return false
   } else {
      category.style.borderColor = "none"
   }

   if (!stet.value) {
      stet.style.borderColor = "red"
      stet.focus()
      return false
   } else {
      stet.style.borderColor = "none"
   }
   if (!formControl.value) {
      formControl.style.borderColor = "red"
      formControl.focus()
      return false
   } else {
      formControl.style.borderColor = "none"
   }


   return true
}
function clear(){
   formControl.valeu = ""
   phonName.value = ""
   prace.value = ""
   category.value = ""
   stet.value = ""
   
}

btn && btn.addEventListener('click', function () {
   if (validate()) {
      let phon = {
         name: phonName.value,
         price: prace.value,
         description: formControl.value,
         status: stet.value
      }
      fetch('https://auth-rg69.onrender.com/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(phon)
        })
      .then(respons => respons.json())
      .then(phon => console.log(phon))

   }
   clear()
})

document.addEventListener("DOMContentLoaded", function () {
   let user = JSON.parse(localStorage.getItem("User"))
   console.log(user);
   fetch("https://auth-rg69.onrender.com/api/products/all", {
      method: "GET"
   })
      .then(respons => respons.json())
      .then(phon => {
         phon.forEach(element => {
            table.innerHTML += `
         <tbody>
                    <th>
                      <td>${caunt++}</td>
                      <td>${element.name}</td>
                      <td>${element.price}</td>
                      <td>${element.description}</td>
                      <td>${element.status}</td>
                      <td>${element.createdAt}</td>
                    </th>
                    
         </tbody
         `
         });
      })

})