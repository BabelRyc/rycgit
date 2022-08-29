class BirdWhisperer {
    constructor(message) {
        this.chirping = message;
    }
    chirp() {
        return 'Ah~ oh~ ' + this.chirping;
    }
}
let birdWhisperer = new BirdWhisperer('testtttttttttt');
document.body.innerHTML = birdWhisperer.chirp();
//# sourceMappingURL=hello-typescript.js.map