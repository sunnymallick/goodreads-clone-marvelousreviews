PROJECT: GOODMOVIES
ESSENTIAL PAGES:
    -main -->  signup/login, Reviews, Featured 
    -profile -> 
        library(shelf), 
        Recent Reviews, 
        Fav Quotes, 
        Friends Comment Section, 
        Year in Movies, 
        avatar, 
        # of reviews, 
        details, 
        activity,
        stats 
        name,
        playlists
    - myMovies
        -Want to watch
        -Has Watched
    - Browse
        -Featured
            -new Releases
            -OrderedBy[name, year of release]
        -Genre tags
        -Browse button(just a simple search)
MODELS:
    -users
    -movies
    -reviews
    -comments


FEATURES FOR MVP:

1. Create new account
    -users can sign up/log in and out 
    - functionality is limited when not logged in (no likes/dislikes, leaving reviews or following abilities but you can search)
    - redirect users to profile when they log in (their own library)
    - logged out users get directed back to the homepage
    - Find Friends, Set a Goal x ability to create a playlist of movies you want to watch (ex: someone wants to watch the MCU, FnF or Harry Potter series), Rate Books(based on genre chosen), Recommendations
2. Post reviews(only available to logged in users)
    - speech bubbles with italic text
    - like feature (dislike is only for movies[popup that asks if the user's watched the movie or not, Yes can dislike, No cannot])
    - Edit x Delete button(AJAX)
3. Movie library of has and wants
4. Navigate to streaming sites


BONUSES: 

1. Casts (bonuses)
2. Following and Followers(bonus)
3. Search bar (bonus)

