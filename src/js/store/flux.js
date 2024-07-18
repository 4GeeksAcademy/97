const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: 'https://www.swapi.tech/api',
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			getObjectbyID: async (dataUrl) => {
				try {
					let response = await fetch(`${dataUrl}`)
					let data = await response.json()

					if (response.ok) {
						return data;
					} else {
						console.log(`error ${data}`)
					}
				} catch (error) {
					console.log(error);
				}
			},

			getAllPeople: async () => {
				const storedPeople = localStorage.getItem('people');
			  
				if (storedPeople) {
				  // Si hay datos en localStorage, los usamos directamente
				  setStore({ people: JSON.parse(storedPeople) });
				} else {
				  // Si no hay datos en localStorage, hacemos la petición a la API
				  try {
					const response = await fetch(`${getStore().urlBase}/people`);
					const data = await response.json();
			  
					if (response.ok) {
					  const peopleInPage = await Promise.all(
						data.results.map(async (item) => {
						  const dataUrl = item.url;
						  return await getActions().getObjectbyID(dataUrl);
						})
					  );
					  setStore({ people: peopleInPage });
					  localStorage.setItem('people', JSON.stringify(peopleInPage)); // Almacenamos los datos en localStorage
					} else {
					  console.log(`Respuesta: ${data}, ${response}`);
					}
				  } catch (error) {
					console.log("Error trying to bring back the info: ", error);
				  }
				}
			  },

			  getAllVehicles: async () => {
				const storedVehicles = localStorage.getItem('vehicles');
			  
				if (storedVehicles) {
				  // Si hay datos en localStorage, los usamos directamente
				  setStore({ vehicles: JSON.parse(storedVehicles) });
				} else {
				  // Si no hay datos en localStorage, hacemos la petición a la API
				  try {
					const response = await fetch(`${getStore().urlBase}/vehicles`);
					const data = await response.json();
			  
					if (response.ok) {
					  const vehiclesInPage = await Promise.all(
						data.results.map(async (item) => {
						  const dataUrl = item.url;
						  return await getActions().getObjectbyID(dataUrl);
						})
					  );
					  setStore({ vehicles: vehiclesInPage });
					  localStorage.setItem('vehicles', JSON.stringify(vehiclesInPage)); // Almacenamos los datos en localStorage
					} else {
					  console.log(`Respuesta: ${data}, ${response}`);
					}
				  } catch (error) {
					console.log("Error trying to bring back the info: ", error);
				  }
				}
			  },

			  getAllPlanets: async () => {
				const storedPlanets = localStorage.getItem('planets');
			  
				if (storedPlanets) {
				  // Si hay datos en localStorage, los usamos directamente
				  setStore({ planets: JSON.parse(storedPlanets) });
				} else {
				  // Si no hay datos en localStorage, hacemos la petición a la API
				  try {
					const response = await fetch(`${getStore().urlBase}/planets`);
					const data = await response.json();
			  
					if (response.ok) {
					  const planetsInPage = await Promise.all(
						data.results.map(async (item) => {
						  const dataUrl = item.url;
						  return await getActions().getObjectbyID(dataUrl);
						})
					  );
					  setStore({ planets: planetsInPage });
					  localStorage.setItem('planets', JSON.stringify(planetsInPage)); // Almacenamos los datos en localStorage
					} else {
					  console.log(`Respuesta: ${data}, ${response}`);
					}
				  } catch (error) {
					console.log("Error trying to bring back the info: ", error);
				  }
				}
			  },
			  
			modFavorites: (fav) => {

				let store = getStore();
				let exists = store.favorites.some((item) => item.result._id == fav.result._id)

				if (exists) {
					let newFav = store.favorites.filter((item) => item.result._id != fav.result._id)
					setStore({
						favorites: newFav
					})

				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})

				}
			},
		}
	};
};

export default getState;