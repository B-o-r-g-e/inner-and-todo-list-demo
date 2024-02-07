// const content = document.getElementById('content')
//
// export function navSection() {
//     const nav = document.createElement('nav')
//     nav.className = 'nav'
//
//     const navContent = document.createElement('div')
//     navContent.className = 'nav-content'
//
//     const logo = document.createElement('h2')
//     logo.className = 'logo'
//     logo.textContent = `logo`
//
//     const getStarted = document.createElement('button')
//     getStarted.className = 'get-started btn'
//     getStarted.textContent = `get started`
//
//     const contactMenu = document.createElement('div')
//     contactMenu.className = 'contact-menu'
//
//     const contact = document.createElement('button')
//     contact.className = 'contact btn'
//     contact.textContent = `contact`
//
//     const menu = document.createElement('button')
//     menu.className = 'menu btn'
//     menu.textContent = `menu`
//
//     contactMenu.appendChild(menu)
//     contactMenu.appendChild(contact)
//
//     navContent.appendChild(logo)
//     navContent.appendChild(contactMenu)
//     navContent.appendChild(getStarted)
//
//     nav.appendChild(navContent)
//
//     content.appendChild(nav)
// }
//
// export function heroSection() {
//     const heroFront = document.createElement('div')
//     heroFront.className = 'hero-front';
//
//     const wholeHeroContent = document.createElement('div')
//     wholeHeroContent.className = 'whole-hero-content'
//
//     const animation = document.createElement('div')
//     animation.className = 'animation'
//
//     const foodImage = document.createElement('div')
//     foodImage.className = 'food-image'
//     foodImage.innerHTML = `<img src="../assets/food.png" alt="">`
//
//     const heroRight = document.createElement('div')
//     heroRight.className = 'hero-right'
//
//     const heroRightContent = document.createElement('div')
//     heroRightContent.className = 'hero-right-content'
//
//     const heroRightH1 = document.createElement('h1')
//     heroRightH1.textContent = `Food delivery and more`
//
//     const heroRightParagraph = document.createElement('p')
//     heroRightParagraph.textContent = `Groceries, shops, pharmacies, anything!`
//
//     const searchPart = document.createElement('div')
//     searchPart.className = 'search-part'
//
//     const searchLeftIcon = document.createElement('div')
//     searchLeftIcon.className = 'search-left-icon'
//     searchLeftIcon.innerHTML = `<img src="https://glovoapp.com/images/icons/flag--white.svg" alt="">`
//
//     const searchBox = document.createElement('div')
//     searchBox.className = 'search-box'
//
//     const form = document.createElement('div')
//     form.innerHTML = `<form action="/search" method="GET">
//                             <input type="text" id="searchInput" name="q" placeholder="what's your address">
//                         </form>`
//
//     searchBox.appendChild(form)
//     searchPart.appendChild(searchLeftIcon)
//     searchPart.appendChild(searchBox)
//
//     heroRightContent.appendChild(heroRightH1)
//     heroRightContent.appendChild(heroRightParagraph)
//     heroRightContent.appendChild(searchPart)
//
//     animation.appendChild(foodImage)
//
//     heroRight.appendChild(heroRightContent)
//
//     wholeHeroContent.appendChild(animation)
//     wholeHeroContent.appendChild(heroRight)
//
//     heroFront.appendChild(wholeHeroContent)
//
//     content.appendChild(heroFront)
// }
//
// // function tabs() {
// //     const menu = document.createElement('div')
// //
// //     const firstTab = document.createElement('div')
// //     firstTab.className = 'tab'
// //
// //     const firstTabH1 = document.createElement('h1')
// //     firstTabH1.textContent = `Tab 1 Content`
// //
// //     firstTab.appendChild(firstTabH1)
// //     menu.appendChild(firstTab)
// // }