import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHTML() {
        return `
        <h1>HEllo I am in Settings Page</h1>
        <p>Manage your privacy config</p>
        `;
    }
}
