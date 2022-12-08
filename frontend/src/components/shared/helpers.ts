export const fetcher = async function (url: string, method: string) {

    let endpoint = 'http://127.0.0.1:8000/API/' + url;

    const request = await fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await request.json();
}

export const newUser = function (email: string, id: string) {

    let url = `${id}/${email}`;

    fetcher(url, 'POST');
}