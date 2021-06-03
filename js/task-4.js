const calcul = {
    counter: document.querySelector('#counter'),
    decreaseValue: document.querySelector('button[data-action="decrement"]'),
    increaseValue: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
};

const service = {
    counterValue: 0,

    decrement() {
        this.counterValue -= 1;
    },

    increment() {
        this.counterValue += 1;
    },

    update(cal) {
        cal.textContent = service.counterValue;
    },
};

calcul.decreaseValue.addEventListener('click', () => {
    service.decrement();
    service.update(this.value);
});

calcul.increaseValue.addEventListener('click', () => {
    service.increment();
    service.update(this.value);
});


