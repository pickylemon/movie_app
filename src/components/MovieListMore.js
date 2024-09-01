import { Component } from '../core/core'
import movieStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
    constructor() {
        super({
            tagName: 'button'
        })
        movieStore.subscribe('pageMax', () => {
            // movieStore.state.page
            // movieStore.state.pageMax
            // 개별로 사용하기 보다는 객체 구조분해할당을 이용
            const { page, pageMax } = movieStore.state
            pageMax > page 
                ? this.el.classList.remove('hide')
                : this.el.classList.add('hide')
        })
    }
    render() {
        this.el.classList.add('btn', 'view-more', 'hide')
        this.el.textContent = 'View more...'

        this.el.addEventListener('click', async () => {
            await searchMovies(movieStore.state.page + 1)
        })
    }
}