const loginButton = document.getElementById("loginButton")

const baseUrl = "http://localhost:4000/"

export async function LoginUser(username, password) {
    console.log("call api")
    result = await fetch(baseUrl + 'login', {
        headers: {
            username: username,
            password: password
        }
    });
    localStorage.setItem("token", result.text());
};

export async function getApiStatus() {
    let result = await fetch(baseUrl, {
        headers: {
            token: localStorage.getItem("token"),
        }
    })
    const data = await result.text();
    console.log(data)
}


loginButton.addEventListener("click", LoginUser("test", "test"));
