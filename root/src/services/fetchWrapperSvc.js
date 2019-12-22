export default async function fetchWrapper(url) {
    return await fetch(url)
        .then(async response => {
            return await response.json();
        })
        .catch(error => console.log(error));
}