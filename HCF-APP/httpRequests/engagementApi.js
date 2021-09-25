export const submitEngagement = async (goal, mode, date, time, details, userid, mentorId) => {
    console.log(goal, date, time, mode, userid, mentorId)
    try {
        const response = await fetch("https://portal.hillcityfoundation.org/api/create_engagement_m", {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hcf_number: userid,
                hcf_number_mentor: mentorId,
                goal_id: goal,
                method: mode,
                date: date,
                time: time,
                reason: details,
            })
        });

        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.log("Error:", err)
    }

}

export const modifyEngagement = async (date, time, details, userid, engid) => {
    console.log(date, time, userid, engid)
    try {
        const response = await fetch(`https://portal.hillcityfoundation.org/api/update_eng/${engid}`, {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hcf_number: userid,
                date: date,
                time: time,
                reason: details,
            })
        });

        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.log("Error:", err)
    }

}