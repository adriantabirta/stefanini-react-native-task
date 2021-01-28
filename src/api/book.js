import { Alert } from 'react-native';

export const book = async (shiftId) => {
    return fetch('http://127.0.0.1:8080/shifts/' + shiftId + "/book", {
        method: 'POST',
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

export const cancelBook = async (shiftId) => {
    return fetch('http://127.0.0.1:8080/shifts/' + shiftId + "/cancel", {
        method: 'POST',
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



