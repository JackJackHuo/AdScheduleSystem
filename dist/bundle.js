(()=>{"use strict";console.log("JS Loaded!!");const e=document.querySelector(".tbody");e.innerHTML="";for(let t=1;t<20;t++)e.innerHTML+=`<tr class="table__row table__body__row" id="row-${t}">\n              <td class="table__cell table__cell--checkbox">\n              <input type="checkbox" name="body_checkbox" id="body_checkbox" data-id="row-${t}">\n              </td>\n              <td class="table__cell table__cell--id">ID</td>\n              <td class="table__cell table__cell--name">NAME</td>\n              <td class="table__cell table__cell--ad">\n                <div class="advertiser">Advertiser</div>\n                <span class="gruop">Gruop</span>\n              </td>\n              <td class="table__cell table__cell--description">Description</td>\n              <td class="table__cell table__cell--price">price</td>\n              <td class="table__cell table__cell--startime">Start Time</td>\n              <td class="table__cell table__cell--endtime">End Time</td>\n              <td class="table__cell table__cell--action">\n              <img class="cell__action__icon" src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/menu.svg" id="action__input_1" alt="menu" />\n              <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_1" id="action__menu_1">\n                <menu class="menu__body">\n                  <menuitem class="menu__item">\n                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/duplicate.svg" class="menu__item__icon" />\n                  <span>Duplicate</span>\n                  </menuitem>\n                  <menuitem class="menu__item">\n                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/edit.svg" class="menu__item__icon" />\n                  <span>Edit</span>\n                  </menuitem>\n                  <menuitem class="menu__item">\n                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/delete.svg" class="menu__item__icon" />\n                  <span>Delete</span>\n                  </menuitem>\n                </menu>\n              </div>\n            </td>\n          </tr>`;const t=document.querySelectorAll(".table__body__row"),c=document.querySelector("#dark__mode__toggle"),a=document.querySelector("#header_checkbox"),n=e=>{const t=e.target;if(t.matches(".cell__action__icon"))t.nextElementSibling.classList.toggle("hidden");else if("body_checkbox"===t.id){const e=document.getElementById(t.dataset.id);t.checked?e.classList.add("focus"):e.classList.remove("focus")}};t.forEach((e=>e.addEventListener("click",n))),c.addEventListener("change",(e=>{e.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")})),a.addEventListener("change",(e=>{const c=document.querySelectorAll("#body_checkbox");e.target.checked?c.forEach((e=>{e.checked=!0,t.forEach((e=>e.classList.add("focus")))})):(c.forEach((e=>e.checked=!1)),t.forEach((e=>e.classList.remove("focus"))))}))})();