class BirdWhisperer {
    chirping: string;
    constructor(message: string) {
        this.chirping = message;
    }
    chirp() {
        return 'Ah~ oh~ ' + this.chirping;
    }
}
let birdWhisperer = new BirdWhisperer('testtttttttttt');
document.body.innerHTML = birdWhisperer.chirp();