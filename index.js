const BASE_API_URL = "https://api.thedogapi.com/v1";

const fetchDogs = async() => {

    const resp = await fetch(BASE_API_URL + "/breeds");
    const data = await resp.json();
    popularDogsSelecet(data);
 }

popularDogsSelecet = (breeds) => {
    const select = document.querySelector('.breed-select');
    const breedOptions = breeds.map(breed => {
      const option = document.createElement('option');
      option.text = breed.name;
      option.value = breed.id;
      
      return option;
    })

    breedOptions.forEach(breedOption => {
        select.append(breedOption);
    });
}

const changeDoggo = () => {
  getDogByBreed(event.target.value);
}

const getDogByBreed =  async (breedId) => {

   const [ data ] =  await fetch(BASE_API_URL + '/images/search?include_breed=1&breed_id=' + breedId).then((data) => data.json()); 
   const {url: imageUrl, breeds} = data;
   fillDoggoImage(imageUrl)
   console.log(data)

   const resp  = await fetch("https://api.thedogapi.com/v1/images/"  + data.id)
   const respQ = await resp.json()
   const parentElem = document.querySelector('.doggo-description').innerHTML = null;
   fillDogDescription(respQ.breeds[0])
}

fetchDogs()

const createDogEntire = ({label, value}) => {
  const parentElem = document.querySelector('.doggo-description');
  const descptionItem = document.createElement('dt');
  descptionItem.textContent = label;
  const descriptionValue = document.createElement("dd");
  descriptionValue.textContent = value;
 
  parentElem.appendChild( descptionItem);
  parentElem.appendChild( descriptionValue);
}

const fillDogDescription = ({ bred_for: bredFor,
                            breed_group: bredGroup, 
                            name, 
                            temperament,
                            life_span: lifeSpan,
                            origin,
                            height, 
                            weight}) => {


   createDogEntire({
     label: "Name",
     value: name
   })

   createDogEntire({
    label: "Bred for",
    value: bredFor
  })

  createDogEntire({
    label: "Bred group",
    value: bredGroup
  })

  createDogEntire({
    label: "Temperament",
    value: temperament
  })


  createDogEntire({
    label: "Life span",
    value: lifeSpan
  })

  createDogEntire({
    label: "Origin",
    value: origin
  })

  createDogEntire({
    label: "Height [cm]",
    value: height.metric
  })

  createDogEntire({
    label: "weight [kg]",
    value: weight.metric
  })
}

const fillDoggoImage = (url) => {
  document.querySelector(".doggo").setAttribute('src', url)
}


