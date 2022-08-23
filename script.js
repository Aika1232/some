// const {
//     body
// } = document

// const renderHeader = () => {
//     let menu_items_arr = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты'] // список для каждой менюшки
//     const header = document.createElement('header')

//     //  начало бургер меню
//     let burger, input, label, span, menu 
//     burger = document.createElement('div')
//     burger.className = 'burger_menu'
//     input = document.createElement('input')
//     input.type = 'checkbox'
//     input.id = 'toggle'
//     label = document.createElement('label')
//     label.for = 'toggle'
//     label.className = 'btn'
//     span = document.createElement('span')
//     label.appendChild(span)

//     menu = document.createElement('ul')
//     menu.className = 'menu'
//     menu_items_arr.forEach(el => {
//         let menu_li = document.createElement('li')
//         let menu_item = document.createElement('a')
//         menu_item.textContent = el
//         menu_item.className = 'menu_iteam'
//         menu_li.appendChild(menu_item)
//         menu.appendChild(menu_li)
//     })
//     burger.append(input, label, menu)
//     // конец бургера и начало для лого


//     let logo, img, h1
//     logo = document.createElement('div')
//     img = document.createElement('img')
//     h1 = document.createElement('h1')
//     logo.className = 'logo_block'
//     img.src = './img/logo.png'
//     img.alt = 'logo'
//     h1.textContent = 'SLOGAN SLOGAN SLOGAN'
//     logo.append(img, h1)

//     // конец лого и начало для менюшки

//     let nav, nav_ul
//     nav = document.createElement('nav')
//     nav.className = 'navbar'

//     nav_ul = document.createElement('ul')
//     nav_ul.className = 'ull'
//     menu_items_arr.forEach(el => {
//         let menu_li = document.createElement('li')
//         let menu_item = document.createElement('a')
//         menu_item.textContent = el
//         menu_item.className = 'menu_item'
//         menu_li.appendChild(menu_item)
//         nav_ul.appendChild(menu_li)
//     })

//     nav.appendChild(nav_ul)
//     //  конец меню и начало секции с картинками
//     let section = document.createElement('div')
//     section.className = 'section1'

//     for (let i = 0; i < 3; i++) {
//         let card = document.createElement('div')
//         card.className = 'card'
//         let card_img = document.createElement('img')
//         card_img.src = './img/foto.png'
//         let card_p = document.createElement('p')
//         card_p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'

//         card.append(card_img, card_p)
//         section.appendChild(card)
//     }
//     // конец

//     let hr = document.createElement('hr')
//     hr.style = "border: 3px solid rgb(223, 221, 221);"
//     header.append(burger, logo, nav, section, hr)
//     return header
// }

// body.append(renderHeader())

const body = document.body
const header = document.createElement("header")
const logo_block = document.createElement("div")
logo_block.classList.add('logo_block')
const img = document.createElement('img')
const h1 = document.createElement('h1')
img.src = './img/logo.png'
img.alt = 'logo'
h1.textContent = 'SLOGAN SLOGAN SLOGAN'
const navbar = document.createElement('nav')
navbar.classList.add('navbar')


const ul = document.createElement('ul')
ul.classList.add('ull')
const menu_iteam = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']

for (let i = 0; i < menu_iteam.length; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.classList.add("menu_item")
    a.textContent = menu_iteam[i]
    li.append(a)
    ul.append(li)
}
const section1 = document.createElement('div')
section1.classList.add('section1')
for (let i = 0; i < 3; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    const img2 = document.createElement('img')
    img2.src = './img/foto.png'
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)'
    card.append(img2, p)
    section1.append(card)
}
const hr = document.createElement('hr')
hr.style = "border: 3px solid rgb(223, 221, 221)"

const main = document.createElement("main")
const h2 = document.createElement('h2')
h2.textContent = 'О приложении'
const container_rod = document.createElement('div')
const video = document.createElement ('img')
const play = document.createElement('img')
img src = ''
img src = ''


















logo_block.append(img, h1, )
navbar.append(ul)
header.append(logo_block, navbar, section1,hr)
main.append(h2)
body.append(header,main)