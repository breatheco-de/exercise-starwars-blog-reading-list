const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [], // all characters info
			character: [], // 1 character info
			planets: [], // all planets info
			planet: [], // 1 planet info
			starShips: [], // all star ship info
			starShip: [], // 1 star ship info
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function

			addItem: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, { item }] });
			},

			removeItem: id => {
				let value = document.getElementById(id).title;
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.item !== value) });
			},

			getPeopleData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/people`, settings);
				const json = await request.json();
				const data = json;
				setStore({ people: data.results });
			},

			getCharacterDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ character: [...store.character, data.result.properties] });
			},

			charDescription: url => {
				getActions().getCharacterDescription(url);
			},

			getPlanetsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/planets`, settings);
				const json = await request.json();
				const data = json;
				setStore({ planets: data.results });
			},

			getPlanetDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ planet: [...store.planet, data.result.properties] });
			},

			planetDescription: url => {
				getActions().getPlanetDescription(url);
			},

			getStarShipsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/starships`, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShips: data.results });
			},

			getStarShipDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShip: [...store.starShip, data.result.properties] });
			},

			starShipDescription: url => {
				getActions().getStarShipDescription(url);
			}
		}
	};
};

export default getState;
