import {
    MoviesModel,
    TrendingMoviesModel,
    TopRatedMoviesModel
}
    from '../models'

const movieList = (params) => {
    return new Promise((resolve, reject) => {
        let filter = params.filter,
            genre = params.genre,
            page = params.page,
            promise;

        switch (filter) {
            case "ratings": promise = TopRatedMoviesModel.find({})
                .select('movie_id')
                .populate({
                    path: 'movie_collection',
                    select: 'title youtube_id posters genres',
                    match: {
                        genres: {
                            $regex: genre,
                            $options: 'i'
                        }
                    }
                })
                break;
            case "trending": promise = TrendingMoviesModel.find({})
                .select('movie_id')
                .populate({
                    path: 'movie_collection',
                    select: 'title youtube_id posters genres',
                    match: {
                        genres: {
                            $regex: genre,
                            $options: 'i'
                        }
                    }
                })
                break;
            default: promise = MoviesModel.find({
                genres: {
                    $regex: genre,
                    $options: 'i'
                }
            })
                .select('movie_id title youtube_id posters genres')
        }


        promise
            .then(data => {
                if (filter != "all") {
                    data = data.filter(doc => {
                        return doc.movie_collection != null
                    }).map(doc => {
                        return doc.movie_collection
                    })
                }

                let response = {
                    "total_pages": Math.ceil(data.length / 10),
                    "data": []
                }

                for (let i = page * 10 - 10; i < page * 10; i++) {
                    if (data.length > i)
                        response.data.push(data[i])
                    else break;
                }

                resolve(response)
            })
            .catch(err => {
                reject(err)
            })

    })
}

let movies = {
    movieList
}

export {
    movies
}