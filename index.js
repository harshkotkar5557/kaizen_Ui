document.getElementById('hambar').addEventListener('click', () => {
    if (document.querySelector('.siderbar').style['display'] == "none") {
        document.querySelector('.siderbar').style['display']='block'
    } else {
        document.querySelector('.siderbar').style['display']='none'
    }
   
})