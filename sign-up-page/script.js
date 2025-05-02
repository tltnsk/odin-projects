document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();

    const fields = [
        {
            input: document.querySelector('input[name="first-name"]'),
            validate: value => /^[A-Za-z]+$/.test(value),
            error: "First name must contain only letters."
        },
        {
            input: document.querySelector('input[name="last-name"]'),
            validate: value => /^[A-Za-z]+$/.test(value),
            error: "Last name must contain only letters."
        },
        {
            input: document.querySelector('input[name="email"]'),
            validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            error: "Invalid email format."
        },
        {
            input: document.querySelector('input[name="phone-number"]'),
            validate: value => /^[7-9][0-9]{9}$/.test(value),
            error: "Phone number must be 10 digits starting with 7, 8, or 9."
        },
        {
            input: document.querySelector('input[name="password"]'),
            validate: value => value.length >= 6,
            error: "Password must be at least 6 characters."
        },
        {
            input: document.querySelector('input[name="confirm-password"]'),
            validate: value => value === document.querySelector('input[name="password"]').value,
            error: "Passwords do not match."
        }
    ];

    let isFormValid = true;

    fields.forEach(({ input, validate, error }) => {
        const value = input.value.trim();
        const messageEl = input.parentElement.querySelector('.error-message');

        if (!validate(value)) {
            input.classList.remove("valid");
            input.classList.add("invalid");
            messageEl.textContent = error;
            isFormValid = false;
        } else {
            input.classList.remove("invalid");
            input.classList.add("valid");
            messageEl.textContent = "";
        }
    });

    if (isFormValid) {
        alert("Form submitted successfully!");
    }
});