import { getData } from "../../service/FetchDogs";

export const getDogImages = async (setDogImages, setDogBreed, setOptions) => {
  try {
    const data = await getData();
    if (data) {
      setDogImages(data.message);
      const breedName = extractBreedFromUrl(data.message);
      setDogBreed(breedName);
      const breedOptions = generateOptions(breedName);
      setOptions(breedOptions);
    }
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};
const extractBreedFromUrl = (url) => {
  const breedPath = url.split("/")[4];
  return breedPath.split("-").join(" ");
};
const generateOptions = (correctBreed) => {
  const falseOptions = [
    "labrador",
    "beagle",
    "poodle",
    "husky",
    "American Eskimo",
    "Akita",
    "Alaskan Malamute",
    "Australian Cattle Dog",
    "Bedlington Terrier",
  ];
  const optionsSet = new Set([correctBreed]);
  while (optionsSet.size < 4) {
    const randomOption =
      falseOptions[Math.floor(Math.random() * falseOptions.length)];
    if (!optionsSet.has(randomOption)) {
      optionsSet.add(randomOption);
    }
  }
  return Array.from(optionsSet).sort(() => Math.random() - 0.5);
};
