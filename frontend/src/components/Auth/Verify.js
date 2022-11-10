const Verify = async () => {

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBSwRedbRNzhvkNFu1cuEHmWbhwapkNocY';

    let idToken = localStorage.getItem('token');

    let verify = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            idToken: idToken
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(() => {
                    let errorMessage = 'Verification failed!';

                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {
            return data.users[0].emailVerified;
        })


    return verify;

};
export default Verify;