// About Section

let about = document.querySelector('section#about .row:last-child')
let aboutContent = [ "Hi, I am Eighton-Lee Paulse, I am 18 years old and I enjoy anime, games and having fun."]
// Loop through the contents
aboutContent.forEach( (content)=>{
    about.innerHTML += `
    <p class='lead'>${content}</p>
    `
} )

// Education
let education = [
    {
        id: 1,
        year: 2022,
        description: 'I got my matric certificate',
        place: 'Malibu High school',
        type: 'certificate',
        certificate: ''
    }
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})

