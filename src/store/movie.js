import { Store } from '../core/core' 

const store = new Store({
    searchText: '',
    page: 1,
    pageMax : 1,
    movies: [],
    loading: false
})

export default store
export const searchMovies = async page => {
    store.state.loading = true
    store.state.page = page
    if (page === 1) {
        store.state.movies = []
    }
    //vercel을 사용할거라 요청url도 http에서 https로 바꿔줘야함
    const res = await fetch(`https://www.omdbapi.com/?apikey=e63959c9&s=${store.state.searchText}&page=${page}`)
    const { Search, totalResults } = await res.json()
    store.state.movies = [
        ...store.state.movies,
        ...Search
    ]

    store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    store.state.loading = false //loading true와 false
}
