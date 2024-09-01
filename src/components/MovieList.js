import { Component } from '../core/core'
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
    }
    render() {
        this.el.classList.add('movie-list')
        this.el.innerHTML = /* html */`
            <div class="movies"></div>
            <div class="the-loader hide"></div>
        `

        const moviesEl = this.el.querySelector('.movies')
        moviesEl.append(
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