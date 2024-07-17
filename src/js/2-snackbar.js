// Описаний у документації
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector("input[name=delay]")

const form = document.querySelector(".form")

function handleSubmit(event) {
    event.preventDefault()
    const state = document.querySelector('input[name="state"]:checked').value;
    const delay = Number(delayInput.value);
    if (state === "fulfilled") {
        Promise.resolve(delay)
            .then(value => setTimeout(() => iziToast.success({
                position: "topRight",
                messageColor: "white",
                backgroundColor: "green",
                message: `✅ Fulfilled promise in ${value}ms`
            }), value))
    } else if (state === "rejected") {
        Promise.reject(delay)
            .catch(value => setTimeout(() => iziToast.error({
                position: "topRight",
                messageColor: "white",
                backgroundColor: "red",
                message: `❌ Rejected promise in ${value}ms`
            }), value))
    }
}

form.addEventListener("submit", handleSubmit)

