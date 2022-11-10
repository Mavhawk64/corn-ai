const SendVerificationEmail = () => {
        const idToken = localStorage.getItem('token');

        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBSwRedbRNzhvkNFu1cuEHmWbhwapkNocY';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                requestType: 'VERIFY_EMAIL',
                idToken: idToken,
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
                        let errorMessage = 'Email failed to send';

                        throw new Error(errorMessage);
                    });
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };
export default SendVerificationEmail;