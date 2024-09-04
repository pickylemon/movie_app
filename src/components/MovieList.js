import { Component } from '../core/core.js'
import movieStore from '../store/movie'
import MovieItem from './MovieItem'

export default class MovieList extends Component {
    constructor() {
        super()
        movieStore.subscribe('movies', () => {
            this.render()
        })
        movieStore.subscribe('loading', () => {
            this.render()
        })
        movieStore.subscribe('message', () => {
            this.render()
        })
    }
    render() {
        this.el.classList.add('movie-list')
        this.el.innerHTML = /* html */`
            ${movieStore.state.message  //메시지가 있으면 메시지를, 없으면 movies를
            ? `<div class="message">${movieStore.state.message}</div>`
            : '<div class="movies"></div>'} 
            <div class="the-loader hide"></div>
        `

        const moviesEl = this.el.querySelector('.movies')
        moviesEl?.append( //선택적 체이닝! message가 있을 땐 moviesEl은 null이라서.
            //전개연산자가 있어야 한다!
            ...movieStore.state.movies.map(movie => new MovieItem({
                movie //속성명과 값의 이름이 같아서 생략 가능
            }).el)
        )

        const loaderEl = this.el.querySelector('.the-loader')
        movieStore.state.loading 
        ? loaderEl.classList.remove('hide')
        : loaderEl.classList.add('hide')
    }
}