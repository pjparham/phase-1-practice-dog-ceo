console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
fetch(imgUrl)
    .then(function (response) {
        return response.json();
    })
    .then (function (dogPictures) {
        // console.log(dogPictures.message);
        const dogImageContainer = document.getElementById("dog-image-container");
        dogPictures.message.forEach((dogPicSource) => {
            const img = document.createElement("img")
            let dogPicture = dogImageContainer.appendChild(img)
            dogPicture.src = dogPicSource
        })
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(function (response) {
            return response.json();
        })
        .then (function (dogBreeds) {
            const dogBreedArray = Object.keys(dogBreeds.message)
            const ul = document.getElementById("dog-breeds")
            updateUl(dogBreedArray)
            dogSorter(dogBreedArray)
        })
        

function colorChanger(){
    let loadedDogNode = document.querySelectorAll('li')
    loadedDogNode.forEach((dogNode) => {
        dogNode.addEventListener('click', () => {
            dogNode.style.color = "aquamarine";
        })
    })
}

function dogSorter(dogArray){
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener('change', () => {
        switch (dropdown.value){
            case "a":
                console.log("You picked a")
                const aResult = dogArray.filter(dogName => dogName.startsWith('a'))
                console.log(aResult)
                updateUl(aResult)
                break;
            case "b":
                console.log("you picked b")
                const bResult = dogArray.filter(dogName => dogName.startsWith('b'))
                console.log(bResult)
                updateUl(bResult)
                break;
            case "c":
                console.log("you picked c")
                const cResult = dogArray.filter(dogName => dogName.startsWith('c'))
                console.log(cResult)
                updateUl(cResult)
                break;
            case "d":
                console.log("you picked d")
                const dResult = dogArray.filter(dogName => dogName.startsWith('d'))
                console.log(dResult)
                updateUl(dResult)
                break;
            default:
                console.log("please select a different value")    
        }
        // console.log('You selected', dropdown.value)
    })
}

function updateUl(dogBreeds){
    const ul = document.getElementById("dog-breeds")
    ul.innerHTML = ""
    dogBreeds.forEach((dogBreed) => {
        const li = document.createElement('li')
        ul.appendChild(li)
        li.textContent = dogBreed
        colorChanger()
    })
}


//currently stuck on dog sorter. I've got it to give different recations based on what input is chosen from dropdown
//I need to get all the dog names into an array and have it match the chosen letter (ex a) to the first letter in the dog name 
// something like "a" === dogArray.[0].[0] // with the first [0] pointing to the dog and the second [0] pointing to the first letter in that dogs name