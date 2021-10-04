import './scss/main.scss'

console.log('JS Loaded!!')

const model = {
  "clients":[
    {
      "id": 1,
      "name": "Name-1",
      "group": "Group-1",
      "description": "Description",
      "price": 500,
      "startTime": "0700",
      "endTime": "0800"
    },
    {
      "id": 2,
      "name": "Name-2",
      "group": "Group-2",
      "description": "Description",
      "price": 240,
      "startTime": "0900",
      "endTime": "1000"
    },
    {
      "id": 3,
      "name": "Name-3",
      "group": "Group-3",
      "description": "Description",
      "price": 700,
      "startTime": "0300",
      "endTime": "0400"
    },
    {
      "id": 4,
      "name": "Name-4",
      "group": "Group-4",
      "description": "Description",
      "price": 2500,
      "startTime": "1300",
      "endTime": "1400"
    },
    {
      "id": 5,
      "name": "Name-5",
      "group": "Group-5",
      "description": "Description",
      "price": 300,
      "startTime": "0100",
      "endTime": "0200"
    },
    {
      "id": 6,
      "name": "Name-6",
      "group": "Group-6",
      "description": "Description",
      "price": 6890,
      "startTime": "1100",
      "endTime": "1200"
    },
    {
      "id": 7,
      "name": "Name-7",
      "group": "Group-7",
      "description": "Description",
      "price": 723,
      "startTime": "0500",
      "endTime": "0600"
    },
    {
      "id": 8,
      "name": "Name-8",
      "group": "Group-8",
      "description": "Description",
      "price": 823,
      "startTime": "0800",
      "endTime": "0900"
    },
    {
      "id": 9,
      "name": "Name-9",
      "group": "Group-9",
      "description": "Description",
      "price": 23,
      "startTime": "0200",
      "endTime": "0300"
    },
    {
      "id": 10,
      "name": "Name-10",
      "group": "Group-10",
      "description": "Description",
      "price": 1323,
      "startTime": "1000",
      "endTime": "1100"
    },
    {
      "id": 11,
      "name": "Name-11",
      "group": "Group-11",
      "description": "Description",
      "price": 523,
      "startTime": "0600",
      "endTime": "0700"
    },
    {
      "id": 12,
      "name": "Name-12",
      "group": "Group-12",
      "description": "Description",
      "price": 623,
      "startTime": "1200",
      "endTime": "1300"
    },
    {
      "id": 13,
      "name": "Name-13",
      "group": "Group-13",
      "description": "Description",
      "price": 133,
      "startTime": "0400",
      "endTime": "0500"
    },
    {
      "id": 14,
      "name": "Name-14",
      "group": "Group-14",
      "description": "Description",
      "price": 14023,
      "startTime": "1400",
      "endTime": "1500"
    }
  ],
  "targetId":{
    "headerCheckBox":"#header_checkbox",
    "tableRows": ".table__row",
    "darkMode":"dark__mode__toggle"
  }
}
const view = {

  getRowsElement(client){
      return `<tr class="table__row table__body__row" id="row-${client.id}">
              <td class="table__cell table__cell--checkbox">
              <input type="checkbox" name="body_checkbox" id="body_checkbox" data-id="row-${client.id}">
              </td>
              <td class="table__cell table__cell--id">${client.id}</td>
              <td class="table__cell table__cell--name">${client.name}</td>
              <td class="table__cell table__cell--ad">
                <div class="advertiser">Advertiser</div>
                <span class="gruop">${client.group}</span>
              </td>
              <td class="table__cell table__cell--description">${client.description}</td>
              <td class="table__cell table__cell--price">${client.price}</td>
              <td class="table__cell table__cell--startime">${client.startTime}</td>
              <td class="table__cell table__cell--endtime">${client.endTime}</td>
              <td class="table__cell table__cell--action">
              <img class="cell__action__icon" src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/menu.svg" id="action__input_${client.id}" alt="menu" />
              <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_${client.id}" id="action__menu_${client.id}">
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
  },
  renderRows(array){
    const tbody = document.querySelector('.tbody')
    tbody.innerHTML = array.map(client => this.getRowsElement(client)).join('')
  }
}



const controller = {

  renderItems(){
    view.renderRows(model.clients)
  },
 
  clickEventDsipatcher(target){
    switch (target.id) {

      case 'header_checkbox':
        this.headerEvent(target)
      break

      case "dark__mode__toggle":
        this.darkModeEvent(target)
      break

      case "header__icon--price":
        this.sort(target, 'price')
      break

      case "header__icon--startTime":
        this.sort(target, 'startTime')
      break

      case "header__icon--endTime":
        this.sort(target, 'endTime')
      break

      default:
        this.tableEvent(target)

    }
  },
  
  tableEvent(target){
    const rows = document.querySelectorAll(".table__row");
    const menus = document.querySelectorAll('.action__menu')
    if (target.matches('.cell__action__icon')) {
      if (target.nextElementSibling.classList.contains("hidden")) {
        menus.forEach(menu => {
          menu.getAttribute('aria-labelledby') === target.id ?
            menu.classList.remove('hidden') :
            menu.classList.add('hidden')
        })
      } else {
        target.nextElementSibling.classList.toggle("hidden");
      }
    } else if (target.id === 'body_checkbox') {
      const row = document.getElementById(target.dataset.id)
      row.classList.toggle("focus")
    } else {
      menus.forEach(menu => menu.classList.add('hidden'))
    }
  },

  headerEvent(target){
    const rows = document.querySelectorAll(".table__row");
    const bodyCheckBox = document.querySelectorAll('#body_checkbox')
    if (target.checked) {
      bodyCheckBox.forEach(checkBox => {
        checkBox.checked = true
        rows.forEach(row => row.classList.add("focus"))

      })
    } else {
      bodyCheckBox.forEach(checkBox => checkBox.checked = false)
      rows.forEach(row => row.classList.remove("focus"))
    }
  },

  darkModeEvent(target){
    if (target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  },

  sort(target , item){
    target.classList.toggle('sorted')
    if(!target.matches('.sorted')){
      model.clients.sort(function (a, b) {
        return a[item] - b[item]
      })
    }else {
      model.clients.sort(function (a, b) {
        return b[item] - a[item]
      })
    }  
    this.renderItems()
  }
}

controller.renderItems()

const body = document.querySelector('BODY')
body.addEventListener('click', e => {
  const target = e.target
  controller.clickEventDsipatcher(target)
})