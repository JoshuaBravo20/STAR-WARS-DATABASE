
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
      planets: null,
      vehicles: null,
      globalName: []
    },
    actions: {
      getCharacters: async () => {
        await fetch("https://swapi.dev/api/people")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              characters: data,
            });
          });
      },
      getPlanets: async () => {
        await fetch("https://swapi.dev/api/planets")
          .then((resp) => {
            console.log('resp: ', resp);
          })
          .then((data) => {
            setStore({
              planets: data,
            });
          });
      },
      getVehicles: async () => {
        await fetch("https://swapi.dev/api/starships")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              vehicles: data,
            });
          });
      },
      pushFavorite: (name) => {
      let store = getStore();
        setStore({
          globalName: store.globalName.concat(name)
        });
      },
    },
  };
};

export default getState;
