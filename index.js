document.getElementById('hambar').addEventListener('click', () => {
    if (document.querySelector('.siderbar').style['left'] == "105%") {
        document.querySelector('.siderbar').style='left:70%'
    } else {
        document.querySelector('.siderbar').style='left:105%'
    }
   
})