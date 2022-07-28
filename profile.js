import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Profile");
    }

    async getHTML() {
        return `
        <h1>HEllo I am in Profile Page</h1>
        `;
    }
}
