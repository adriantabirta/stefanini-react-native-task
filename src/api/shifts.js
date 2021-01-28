import { Alert } from 'react-native';

export const getAllShifts = async () => {
    return fetch('http://127.0.0.1:8080/shifts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json().then(json => {
                
                if (!response.ok) {
                    const error = Object.assign({}, json, {
                        status: response.status,
                        statusText: response.statusText,
                    });
                    return Promise.reject(error);
                } else {
                    return json;
                }
            })
        })
        .catch((error) => {
            Alert.alert("Oops!", error.message,
                [{ text: "OK" }],
                { cancelable: false }
            );
        });
};
