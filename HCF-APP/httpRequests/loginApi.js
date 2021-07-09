export const loginUser = async (email, password) => {
    console.log(email);
    try {
        const response = await fetch("https://portal.hillcityfoundation.org/api/logmein", {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const result = await response.json();
        // console.log(result);
        return result;
    } catch (err) {
        console.log("Error:", err)
    }

}