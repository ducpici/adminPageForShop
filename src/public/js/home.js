const btnToggle = document.getElementById('btnToggle')
const sidebar= document.querySelector('.sidebar')
const navItemText = document.querySelectorAll('.nav-item-text')
const userDropdown = document.querySelector('.profile')
const dropdown_list = document.querySelector('.profile_dropdown')
const list_item = document.querySelectorAll('.nav-item')

function handleBtnToggle(){
    btnToggle.onclick = (e) => {
        sidebar.classList.toggle('abc')
        for(let i=0; i<navItemText.length;i++){
            navItemText[i].classList.toggle('d-none')
        }

    }
}

function handleUserDropdown(){
    userDropdown.onclick = (e) => {
        console.log('click')
        dropdown_list.classList.toggle('d-block')
        dropdown_list.classList.toggle('d-none')
    }    
}

handleBtnToggle()
handleUserDropdown()
