class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.try = Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        this.setRange(this.min, this.try);
    }

    greater() {
        this.setRange(this.try, this.max);
    }
}

module.exports = GuessingGame;
