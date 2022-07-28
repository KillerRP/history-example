import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `
        <h1>HEllo I am in Home Page</h1>
        `;
    }
}
