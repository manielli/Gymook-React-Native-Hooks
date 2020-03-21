const BASE_URL = `http://192.168.1.45:3000/api/v1`;

export const GymClass = {
    all() {
        return fetch(`${BASE_URL}/gym_classes`, {
                credentials: "include"
            }
        ).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/gym_classes/${id}`, {
                credentials: "include"
            }
        ).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/gym_classes`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    },
    destroy(id) {
        return fetch(`${BASE_URL}/gym_classes/${id}`,{
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "include"
                }
            }
        ).then(res => res.json());
    }
}

export const Occurence = {
    all() {
        return fetch(`${BASE_URL}/occurences`, {
                credentials: "include"
            }
        ).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/occurences/${id}`, {
                credentials: "include"
            }
        ).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/gym_classes/gym_class_id/occurences`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    },
    destroy(id) {
        return fetch(`${BASE_URL}/gym_classes/gym_class_id/occurences/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "include"
                }
            }
        ).then(res => res.json());
    }
}

export const Booking = {
    all() {
        return fetch(`${BASE_URL}/bookings`, {
                credentials: "include"
            }
        ).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/bookings/${id}`, {
                credentials: "include"
            }
        ).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/occurences/occurence_id/bookings`,{
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    },
    destroy(id) {
        return fetch(`${BASE_URL}/occurences/occurence_id/bookings/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json());
    }
}

export const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
                method: "DELETE",
                credentials: "include"
            }
        ).then(res => res.json());
    }
}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
                credentials: "include"
            }
        ).then(res => res.json());
    }
}