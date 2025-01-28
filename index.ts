const BASE_API_LINK = "https://api.thedogapi.com/v1";

const fetchDogsss = async () => {
  const resp = await fetch(BASE_API_LINK + "/breeds");
  const data = (await resp.json()) as Breed[];
  console.log(data);
  popularDogsSelectt(data);
};

const popularDogsSelectt = (breeds: Breed[]) => {
  console.log(breeds);
  const select = document.querySelector(".breed-select") as HTMLElement;
  const breedOptions = breeds.map((breed) => {
    const option = document.createElement("option") as HTMLOptionElement;
    option.text = breed.name;
    option.value = String(breed.id);

    return option;
  });

  breedOptions.forEach((breedOption) => {
    select.append(breedOption);
  });
};

const changeDoggoo = () => {
    if (event!.target instanceof HTMLSelectElement) {
      getDogByBreddd(Number(event!.target.value));
    } else {
      console.error('Ошибка: target равен null или не имеет свойства value');
    }
  };

const getDogByBreddd = async (breedId: number) => {
  const [data] = await fetch(
    BASE_API_LINK + "/images/search?include_breed=1&breed_id=" + breedId
  ).then((data) => data.json());
  const { url: imageUrl, breeds } = data;
  fillDoggoImagee(imageUrl);
  console.log(data);

  const resp = await fetch("https://api.thedogapi.com/v1/images/" + data.id);
  const respQ = await resp.json();
  const parentElem = ((
    document.querySelector(".doggo-description") as HTMLElement
  ).innerHTML = "");
  fillDogDescriptionnn(respQ.breeds[0]);
};

fetchDogsss()

const createDogEntireee = ({ label, value }) => {
  const parentElem = document.querySelector(
    ".doggo-description"
  ) as HTMLElement;
  const descptionItem = document.createElement("dt") as HTMLElement;
  descptionItem.textContent = label;
  const descriptionValue = document.createElement("dd");
  descriptionValue.textContent = value;

  parentElem.appendChild(descptionItem);
  parentElem.appendChild(descriptionValue);
};

interface Breed {
  bred_for: string;
  breed_group: string;
  height: { metric: number };
  id: number;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: { metric: number };
}

const fillDogDescriptionnn = ({
  bred_for: bredFor,
  breed_group: bredGroup,
  name,
  temperament,
  life_span: lifeSpan,
  origin,
  height,
  weight,
}: Breed) => {
  createDogEntireee({
    label: "Name",
    value: name,
  });

  createDogEntireee({
    label: "Bred for",
    value: bredFor,
  });

  createDogEntireee({
    label: "Bred group",
    value: bredGroup,
  });

  createDogEntireee({
    label: "Temperament",
    value: temperament,
  });

  createDogEntireee({
    label: "Life span",
    value: lifeSpan,
  });

  createDogEntireee({
    label: "Origin",
    value: origin,
  });

  createDogEntireee({
    label: "Height [cm]",
    value: height.metric,
  });

  createDogEntireee({
    label: "weight [kg]",
    value: weight.metric,
  });
};

const fillDoggoImagee = (url: string) => {
  (document.querySelector(".doggo") as HTMLElement).setAttribute("src", url);
};
