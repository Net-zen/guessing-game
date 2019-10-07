class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.attempt = Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        this.setRange(this.min, this.attempt);
    }

    greater() {
        this.setRange(this.attempt, this.max);
    }
}

module.exports = GuessingGame;
