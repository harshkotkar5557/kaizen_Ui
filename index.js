document.querySelector('.siderbar').style='left:150%'
document.getElementById('hambar').addEventListener('click', () => {
    if (document.querySelector('.siderbar').style['left'] == "150%") {
        document.querySelector('.siderbar').style='left:0%'
    } else {
        document.querySelector('.siderbar').style='left:150%'
    }
   
})