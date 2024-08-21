const project = document.querySelectorAll('.Embedded_Device_Signals')

const displayProject = (values) =>{
    project.forEach(element =>{
        element.style.display ="none"
        const title = element.querySelector('h2').innerHTML.toUpperCase();
        const status = element.dataset.status.toUpperCase();
        const recent = element.querySelector('ul').innerHTML.toUpperCase();
        if (title.includes(values)){
            element.style.display = "block"
        }
        else if (values != 'RECENT' && status.includes(values)){
            element.style.display = "block"
        }
    })
}

searchDevice.addEventListener('input', (e) =>{
    displayProject(e.target.value.toUpperCase())
})

projectsFilter.addEventListener('input', (e) =>{
    displayProject(e.target.value.toUpperCase())
})
