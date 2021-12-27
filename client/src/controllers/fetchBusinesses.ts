export const fetchBusinesses = async () => {
    const response = await fetch('/fetch-businesses')
    return response.json();
}