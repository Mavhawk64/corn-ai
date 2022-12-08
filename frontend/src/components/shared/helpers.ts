export const fetcher = async function (url: string, method: string) {

    const request = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await request.json();
}

export const newUser = function (email: string, id: string) {

    let url = `http://127.0.0.1:8000/API/user/${id}/${email}`;

    fetcher(url, 'POST');
}