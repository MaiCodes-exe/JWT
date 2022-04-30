const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // message: null,
      token: null,
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
      setToken: () => {
        setStore({ token: localStorage.getItem("token") });
      },
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      //   getActions().changeColor(0, "green");
      // },

      // getMessage: () => {
      //   // fetching data from the backend
      //   fetch(process.env.BACKEND_URL + "/api/hello")
      //     .then((resp) => resp.json())
      //     .then((data) => setStore({ message: data.message }))
      //     .catch((error) =>
      //       console.log("Error loading message from backend", error)
      //     );
      // },
      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
      // },
      //SIGN UP
      signUp: (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          Email: `${data["Email"]}`,
          Password: `${data["Password"]}`,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `https://3001-maicodesexe-jwt-7ue4lc3ae66.ws-eu43.gitpod.io/signup`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      //LOG IN
      login: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `https://3001-maicodesexe-jwt-7ue4lc3ae66.ws-eu43.gitpod.io/login`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ token: result.token });
            localStorage.setItem("token", result.token);
          })
          .catch((error) => console.log("error", error));
      },

      //LOG OUT
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
