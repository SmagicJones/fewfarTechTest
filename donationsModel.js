const fetchDonations= async () => {
    const res = await fetch('https://www.few-far.co/api/techtest/v1/donations_exports/adf269bc-9402-40d6-80d3-b4b775435abe', {
        method: "GET"
    });
    return res.json();
}

export default fetchDonations;