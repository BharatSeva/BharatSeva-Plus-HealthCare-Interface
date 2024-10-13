

export async function FetchData(url) {
    const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
    try {
        let res = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${HealthCare.token}`
            }
        })
        let data = await res.json()
        return { data, res }
    } catch (err) {
        return err
    }

}

export async function PostData(url, values) {
    const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
    try {
        let res = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${HealthCare.token}`
            },
            body: JSON.stringify(values)
        })
        let data = await res.json()
        return { data, res }
    } catch (err) {
        return err
    }

}