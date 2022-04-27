const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      api: "https://3001-maicodesexe-jwt-7ue4lc3ae66.ws-eu42.gitpod.io",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        login: (email, password) => {
          const store = getStore();
          fetch(`${store.api}/api/login`, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((resp) => {
              if (resp.ok) {
                return resp.json();
              }
            })
            .then((data) => {
              localStorage.setItem("token", data.token);
              setStore({ isAuthenticate: true });
            })
            .catch((error) => console.error("[ERROR IN LOGIN]", error));
        },
          signup;
        (email, password, roles) => {
          // const store = getStore();
          fetch(process.env.BACKEND_URL + `/api/signup`, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              roles: roles,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((resp) => {
              console.log(resp);
              if (resp.ok) {
                console.log(resp);
                return resp.json();
              }
            })
            .then((data) => {
              console.log(data);
              localStorage.setItem("token", data.token);
              setStore({ isAuthenticate: true });
            })
            .catch((error) => console.error("[ERROR IN LOGIN]", error));
        },
          setToken;
        (token) => {
          setStore({ token: token });
        },
          syncTokenFromSessionStore;
        () => {
          const token = localStorage.getItem("token");
          if (token && token != "" && token != undefined)
            setStore({ token: token });
        };
        logout: () => {
          localStorage.removeItem("token");
          console.log("Logout");
          setStore({ token: null });
        },
          //reset the global store
          setStore({ demo: demo });
      },
    },
  };
};

export default getState;
