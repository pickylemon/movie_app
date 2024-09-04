import { Component } from '../core/core.js'
import movieStore, { getMovieDetails } from '../store/movie'

//영화 상세정보 페이지 Component
export default class Movie extends Component {
    async render() {
        this.el.classList.add('container', 'the-movie')
        this.el.innerHTML = /* html */ `
            <div class="poster skeleton"></div>
            <div class="specs">
                <div class="title skeleton"></div>
                <div class="labels skeleton"></div>
                <div class="plot skeleton"></div>                
            </div>
        `
        await getMovieDetails(history.state.id)
        console.log(movieStore.state.movie)
        const { movie } = movieStore.state
        const bigPoster = movie.Poster.replace('SX300', 'SX700') 
        //실시간 리사이징(서버로부터 이미지 사이즈를 실시간으로 리사이징해서 받아옴)

        this.el.innerHTML = /* html */`
            <div 
                style="background-image: url(${bigPoster})"
                class="poster"></div>
            <div class="specs">
                <div class="title">
                    ${movie.Title}
                </div>
                <div class="labels">
                    <span>${movie.Released}</span>
                    &nbsp;/&nbsp;
                    <span>${movie.Runtime}</span>
                    &nbsp;/&nbsp;
                    <span>${movie.Country}</span>
                </div>
                <div class="plot">
                    ${movie.Plot}
                </div>
                <div>
                    <h3>Ratings</h3>
                    ${movie.Ratings.map(rating => {
                        return `<p>${rating.Source} - ${rating.Value}</p>`
                    }).join('')}
                </div>                
                <div>
                    <h3>Actors</h3>
                    <p>${movie.Actors}</p>
                </div>                
                <div>
                    <h3>Directors</h3>
                    <p>${movie.Director}</p>
                </div>                
                <div>
                    <h3>Production</h3>
                    <p>${movie.Production}</p>
                </div>                
                <div>
                    <h3>Genre</h3>
                    <p>${movie.Genre}</p>
                </div>                
            </div>
        `
    }
}