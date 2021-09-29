import './scss/main.scss'

console.log('JS Loaded!!')

const tbody = document.querySelector('.tbody')
tbody.innerHTML = ''

for(let i = 1 ; i < 50 ; i++){
  tbody.innerHTML += `<tr class="table__row table__body__row" id="row-${i}">
              <td class="table__cell table__cell--checkbox">
              <input type="checkbox" name="body_checkbox" id="body_checkbox" data-id="row-${i}">
              </td>
              <td class="table__cell table__cell--id">${i}</td>
              <td class="table__cell table__cell--name">NAME-${i}</td>
              <td class="table__cell table__cell--ad">
                <div class="advertiser">Advertiser</div>
                <span class="gruop">Gruop</span>
              </td>
              <td class="table__cell table__cell--description">Description</td>
              <td class="table__cell table__cell--price">price</td>
              <td class="table__cell table__cell--startime">Start Time</td>
              <td class="table__cell table__cell--endtime">End Time</td>
              <td class="table__cell table__cell--action">
              <img class="cell__action__icon" src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/menu.svg" id="action__input_${i}" alt="menu" />
              <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_${i}" id="action__menu_${i}">
                <menu class="menu__body">
                  <menuitem class="menu__item">
                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/duplicate.svg" class="menu__item__icon" />
                  <span>Duplicate</span>
                  </menuitem>
                  <menuitem class="menu__item">
                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/edit.svg" class="menu__item__icon" />
                  <span>Edit</span>
                  </menuitem>
                  <menuitem class="menu__item">
                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/delete.svg" class="menu__item__icon" />
                  <span>Delete</span>
                  </menuitem>
                </menu>
              </div>
            </td>
          </tr>`
}

// target the input element
const bodyRows = document.querySelectorAll(".table__body__row");
const darkMode = document.querySelector('#dark__mode__toggle')
const headerCheckBox = document.querySelector('#header_checkbox')

// click handler
const bodyRowClicked = event => {
  const target = event.target
  if(target.matches('.cell__action__icon')){
    const hbs = document.querySelectorAll('.action__menu')
    if (target.nextElementSibling.classList.contains('hidden')){
      hbs.forEach(hb => !hb.classList.contains('hidden') ? hb.classList.add('hidden'): void 8)
      target.nextElementSibling.classList.toggle('hidden')
    }else{
      target.nextElementSibling.classList.toggle('hidden')
    }
   }else if (target.id === 'body_checkbox'){
    const row = document.getElementById(target.dataset.id)
    target.checked?row.classList.add("focus"):row.classList.remove("focus")
  }
};

const darkModeToggleHandler = e => {
  if(e.target.checked){
    document.documentElement.setAttribute('data-theme' , 'dark')
  }else{
    document.documentElement.setAttribute('data-theme' , 'light')
  }
}

const headerCheckBoxClicked = e =>{
  const bodyCheckBox = document.querySelectorAll('#body_checkbox')
  if(e.target.checked){
    bodyCheckBox.forEach(checkBox => {
      checkBox.checked = true
      bodyRows.forEach(row => row.classList.add("focus"))
     
    })
  }else{
    bodyCheckBox.forEach(checkBox => checkBox.checked = false)
    bodyRows.forEach(row => row.classList.remove("focus"))
  }
}
// bind the event
bodyRows.forEach(bodyRow => bodyRow.addEventListener("click", bodyRowClicked))
darkMode.addEventListener('change', darkModeToggleHandler)
headerCheckBox.addEventListener('change', headerCheckBoxClicked)