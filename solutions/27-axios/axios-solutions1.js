(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/documentation/#get-all-characters
   * To get an individual character use this:
   * https://rickandmortyapi.com/documentation/#get-a-single-character
   *
   * Use the AXIOS library to make AJAX requests.
   */

  const dropdown = document.querySelector("#dropdown");
  let characters;

  axios({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character/",
  })
    .then((response) => {
      characters = response.data.results;
      characters.forEach((character) => {
        const option = document.createElement("option");
        option.value = character.id; // I'm going to use this when I lookup when character the user selects
        option.textContent = character.name;
        dropdown.appendChild(option);
      });

      dropdown.addEventListener("change", (e) => {
        // Converting to a number so that I can compare types correctly inside of find and the loop below.
        // e.target.value will also be a string.
        // The API returns ids as numbers.
        const id = parseInt(e.target.value);

        const character = characters.find((character) => {
          return character.id === id;
        });

        // Or, you could use a for loop like this
        // let character = "";
        // for (let i = 0; i < characters.length; i++) {
        //   if (characters[i].id === id) {
        //     character = characters[i];
        //     break;
        //   }
        // }

        document.querySelector("#title-head").textContent = character.name;
        document.querySelector("#get-schwifty").src = character.image;
      });
    })
    .catch((err) => {
      // Usually, you should display an error message on the screen inside of doing console.error
      console.error(err);
    });
})();
