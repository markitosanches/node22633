import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Post')
    }

    async getHtml(){
        return `
            <h1>Posts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta veniam facere provident earum optio non iste tempore minima distinctio corporis adipisci nihil culpa, sit saepe repellat accusamus est molestiae!</p>
        `
    }
}