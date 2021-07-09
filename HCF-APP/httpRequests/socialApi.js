export const getAllEngagement = async (email) => {
    try {
        const response = await fetch(`https://portal.hillcityfoundation.org/api/log_via_socialite/${email}`, {
            mode: "no-cors",
            method: "GET",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            }
        });

        const result = await response.json();
        //console.log(result);
        return result;
    } catch (err) {
        console.log("Error:", err)
    }

}