const sider = document.getElementById('siderbar')

document.getElementById('hambar').addEventListener('click', () => {
    console.log(sider.className)
    if (sider.className === 'siderbar') {
        sider.className= 'siderbar d-block'
    } else {
        sider.className= 'siderbar'
    }
   
})
