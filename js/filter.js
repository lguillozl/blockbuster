import { renderMovieListFromMap } from './render.js';
import { movieList, all, popular as mostValued, notPopular as leastValued } from './normalize.js';

filter.addEventListener('change', function () {
    switch (this.value) {
        case 'most-valued':
            return renderMovieListFromMap(mostValued, movieList);
        case 'least-valued':
            console.log('least');
            return renderMovieListFromMap(leastValued, movieList);
        default:
            console.log('all');
            return renderMovieListFromMap(all, movieList);
    }
});