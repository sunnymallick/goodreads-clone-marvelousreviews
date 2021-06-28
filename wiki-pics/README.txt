PROJECT: GOODMOVIES

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

movies table, reviews table, movieshelf table

BONUSES:

1. Casts (bonuses)
2. Following and Followers(bonus)
3. Search bar (bonus)

ESSENTIAL PAGES:
    -main -->  signup/login, Reviews, Featured
    -profile ->
        library(shelf),
        Recent Reviews,
        Fav Quotes,
        *Friends Comment Section,
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
    -bookshelf
    -comments*

USER STORIES:
* = need to be logged in, will pop up with login/signup. If user clicks signup, page redirects
    main:
        Sign Up
            As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
                When I'm on the /signup page:
                    I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
                    I would like the website to log me in upon successful completion of the sign-up form.
                        So that I can seamlessly access the site's functionality
                When I enter invalid data on the sign-up form:
                    I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
                    So that I can try again without needing to refill forms I entered valid data into.
        Main Page
            1. I want to view featured films and reviews without having to log in.

    Movies:
        1. I want to see a trailer link of the movie.
        2. I want to see the cast of the movie.
        3. I want to be able to see the synopsis of the movie.
        4. I want to know where I can watch the movie.
        5. I want to be able to review movies. *
        6. I want to see the reviews of the selected movie.
        7. I want to see the like/dislike ratio of a movie.
        8. I want to be able to add movies to my list. *
        9. I want to be able to like/dislike a movie. *

    * MyProfile:
        1. I want to be able to view my bookshelf.
        2. I want to be able to view my information. (ie: username, location, num of movies watched, num of movies reviewed)
        3. I want movie suggestions.
        4. I want to be able to change my avatar out of a choice of 5 different ones.
        5. I want to be able to edit my information.
        6. I want to view a list of movies I've watched this past year.

    * Your List:
        1. I want to see the movies that I've watched.
        2. I want to see the movies that I have on my want to watch list.
        3. I want to see more about the movies.
    browse:
        1. I want to be able to see all the movies that I've watched. *
        2. I want to be able to search movies by genre.
        3. I want to be able to see the poster/graphic of movie.
        4. I want to see more information about movies.


API ROUTES:
    Reviews:
        A logged in user may comment or delete one of their reviews dynamically without a page refresh.
            POST /api/reviews/:id
            DELETE /api/reviews/:id

    Likes: A logged in user may "like" a movie dynamically without a page refresh.
            POST /api/likes/:id
            DELETE /api/likes/:id

    Dislike: A logged in user may "dislike" a movie dynamically without a page refresh.
            POST /api/dislikes/:id
            DELETE /api/dislikes/:id



FRONTEND ROUTES:
    User-facing routes:
        1. /login
            a. Log in page: this page displays a log in form
                GET /login
                POST /login
        2. /sign-up
            a. Sign up page: this page displays a sign up page
                GET /signup
                POST /signup
        3. /
            a. Home page: this page displays the home page with a navigation bar with login/signup, movies, profile page,
                GET /

        4. /movies
            a. Movies page: this page displays the movies database
                GET /

        5. /myProfile/:id
            a. Profile page specific to user: this page displays the logged in user's profile
                GET /
                POST /
                DELETE /
                PUT /

        6. /movies/:id
            a. Specific movie information for the user
                GET /
                POST /
                DELETE /
                PUT /
