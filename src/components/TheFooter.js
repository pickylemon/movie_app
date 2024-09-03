import { Component } from "../core/core";

export default class TheFooter extends Component {
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render(){
        this.el.innerHTML = /* html */`
            <div>
                <a href="https://github.com/pickylemon/movie_app">
                    GitHub Repository
                </a>
            </div>
            <div>
                <a href="https://github.com/pickylemon">
                    ${new Date().getFullYear()}
                    PICKYLEMON
                </a>
            </div>
        `
    }
}