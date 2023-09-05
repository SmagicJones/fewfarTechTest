const fetchSupporters = async () => {
    const res = await fetch('https://www.few-far.co/api/techtest/v1/supporters', {
        method: "GET"
    });
    return res.json();
}

export default fetchSupporters;