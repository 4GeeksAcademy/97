const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		peopleProperties: [],
		characterDetails: {
		  1: {
			height: "172",
			mass: "77",
			hair_color: "blond",
			skin_color: "fair",
			eye_color: "blue",
			birth_year: "19BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Luke Skywalker",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/1",
		  },
		  2: {
			height: "167",
			mass: "75",
			hair_color: "n/a",
			skin_color: "gold",
			eye_color: "yellow",
			birth_year: "112BBY",
			gender: "n/a",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "C-3PO",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/2",
		  },
		  3: {
			height: "96",
			mass: "32",
			hair_color: "n/a",
			skin_color: "white, blue",
			eye_color: "red",
			birth_year: "33BBY",
			gender: "n/a",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "R2-D2",
			homeworld: "https://www.swapi.tech/api/planets/8",
			url: "https://www.swapi.tech/api/people/3",
		  },
		  4: {
			height: "202",
			mass: "136",
			hair_color: "none",
			skin_color: "white",
			eye_color: "yellow",
			birth_year: "41.9BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Darth Vader",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/4",
		  },
		  5: {
			height: "150",
			mass: "49",
			hair_color: "brown",
			skin_color: "light",
			eye_color: "brown",
			birth_year: "19BBY",
			gender: "female",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Leia Organa",
			homeworld: "https://www.swapi.tech/api/planets/2",
			url: "https://www.swapi.tech/api/people/5",
		  },
		  6: {
			height: "178",
			mass: "120",
			hair_color: "brown, grey",
			skin_color: "light",
			eye_color: "blue",
			birth_year: "52BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Owen Lars",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/6",
		  },
		  7: {
			height: "165",
			mass: "75",
			hair_color: "brown",
			skin_color: "light",
			eye_color: "blue",
			birth_year: "47BBY",
			gender: "female",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Beru Whitesun lars",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/7",
		  },
		  8: {
			height: "97",
			mass: "32",
			hair_color: "n/a",
			skin_color: "white, red",
			eye_color: "red",
			birth_year: "unknown",
			gender: "n/a",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "R5-D4",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/8",
		  },
		  9: {
			height: "183",
			mass: "84",
			hair_color: "black",
			skin_color: "light",
			eye_color: "brown",
			birth_year: "24BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Biggs Darklighter",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/9",
		  },
		  10: {
			height: "182",
			mass: "77",
			hair_color: "auburn, white",
			skin_color: "fair",
			eye_color: "blue-gray",
			birth_year: "57BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Obi-Wan Kenobi",
			homeworld: "https://www.swapi.tech/api/planets/20",
			url: "https://www.swapi.tech/api/people/10",
		  },
		},
  
		favoritesPeople: [],

		demo: [
			{
				title: "FIRST",
				background: "white",
				initial: "white"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white"
			}
		]
		
	  },
  
	  actions: {
		addToFavoritesPeople: (id, name) => {
		  const { favoritesPeople } = getStore();
		  const isFavoriteExist = favoritesPeople.find(
			(favorite) => favorite.name === name
		  );
  
		  if (!isFavoriteExist) {
			const newFavorite = { id, name };
			setStore({ favoritesPeople: [...favoritesPeople, newFavorite] });
		  }
		}, 
		
		deleteFavoritePerson: (id) => {
		  const { favoritesPeople } = getStore();
		  const updatedFavorites = favoritesPeople.filter(
			(favorite) => favorite.id !== id
		  );
		  setStore({ favoritesPeople: updatedFavorites });
		},
  
		getPeople: async () => {
		  const oldStore = getStore();
		  try {
			const peopleResponse = await fetch(
			  "https://www.swapi.tech/api/people"
			);
			const peopleData = await peopleResponse.json();
			setStore({ ...oldStore, people: peopleData.results });
		  } catch (error) {
			console.log("error fetching people -->", error);
		  }
		},
  
		getCharacterProperties: async (id) => {
			const oldStore = getStore();
	
			try {
			  const characterPropResponse = await fetch(
				"https://www.swapi.tech/api/people/" + id
			  );
			  const characterPropData = await characterPropResponse.json();
			  setStore({
				...oldStore,
				characterProperties: characterPropData.result.properties,
			  });
			} catch (error) {
			  console.log("error fetching character properties -->", error);
			}
		  },
  
		getPeopleProperties: async (id) => {
		  const oldStore = getStore();
  
		  try {
			const peoplePropRespons = await fetch(
			  "https://www.swapi.tech/api/people/" + id
			);
			const peoplePropData = await peoplePropRespons.json();
			setStore({
			  ...oldStore,
			  peopleProperties: peoplePropData.result.properties,
			});
		  } catch (error) {
			console.log("error fetching people -->", error);
		  }
		},
	  },
	};
  };
  
  export default getState;