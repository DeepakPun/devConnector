import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*
 Redux - state manager, user for larger apps. Similar to context.
 component level vs app level state.
 App level state - register login, user data
 Defint state in redux store and use it across all components in the app.
 reducer is function that takes action and dispatches it.
 reducer decides how to handle state and pass it down to all components

 Instructor: All right guys, so before we jump into Redux,
I just wanna explain why we're using it and what it is.
And for those of you that have taken other courses by me
or you watch my YouTube channel,
you know that I'm more of a hands-on teacher.
I like to explain things through code and through examples,
rather than with diagrams.
It's really not my style but I figured I'd give it a shot.
So basically, Redux is a state manager
and it's used for larger applications.
It's not the only option.
You have other state managers.
You also have the context API built in to React.
But where we're using quite a few reducers,
I wanted to use Redux,
and it's just really personal preference.
Now, we have component level state in React.
An example of that is the, you know,
with the register and the login forms that we created.
We have the input fields.
That data gets put in the component level state.
Now, with things like authentication, profiles, posts,
these are app level state items
that we wanna be able to access from anywhere,
from any component.
And that's where Redux comes in.
It gives us app level state.
So you can almost think of it as like a cloud
that floats over our application
that we can submit actions to through events
and we can then get data to fall down into any component.
Okay, so I have a very simple diagram here
to kind of explain things a little bit.
We're gonna be looking at just the profile side of things.
So profile data we get from the server,
that's gonna be put into what's called a store,
a Redux store, okay.
So we'll fire off an action to fetch the data
and that gets put into the store.
So you can think of the cloud, as I mentioned,
as the Redux store.
And from any component,
we can call an action that will do something.
So let's say we wanna update a profile.
So, we'll make a request to the server,
make the update on the server, on the database.
We'll get a response.
And then what we wanna do
is we wanna update our user interface.
So, anything that needs updating, any component at all.
And this happens through what's called a reducer,
which is just a function
that takes in what's called an action, okay.
We can dispatch an action to the reducer
and the reducer then decides how to handle the state
and how to pass it down to the components in the UI
and it will update any components
that use that piece of state.
This prevents us from having to pass things around
from component to component, without using a state manager.
So, it's really hard to explain,
but I mean, just to reiterate, we call an action,
we dispatch an action to a reducer,
we're gonna have multiple reducers.
I'll talk about what reducers we'll have in a minute.
And then that reducer will decide
what to do with that state.
Are we deleting a post?
Are we updating a profile?
Whatever it is we're doing.
And then it's gonna send that state
back down to all the components,
any components that need it, okay.
In this case it could be our profile component
and then we might have inner components or child components,
like about, experiences, education.
All the stuff comes from the profile state, okay,
the experiences, education, the bio, all that stuff.
So we wanna get that to basically rain down
from the reducer.
All right, now as far as the reducers we'll have,
we're gonna have auth reducer
that'll handle everything to do with authentication.
Basically on every single load of the app component,
we wanna check for a user, we wanna load a user.
We want to hit our backend API/auth endpoint
and see if we're logged in.
We wanna basically see if there's a token stored
and see if we're logged in.
If we are, then components will react to that,
such as the nav bar.
So the nav bar will have certain links,
like log out, dashboard, things like that.
If we're not logged in,
then it'll show like register, login, and so on.
All right, so it'll react to whatever is in that state.
So we'll have an auth reducer.
We'll have a profile reducer
that will handle anything to do with profiles, posts.
We're also gonna have an alert reducer
because I wanna be able to set alerts
and have an alert show on the screen,
whether it's an error or a success message,
and then we'll just have another action to remove the alert.
All right, so the alert reducer, I think we'll do that first
just because it's so simple.
There's just basically two actions that it will have.
All right, so I know that that's really...
If you haven't worked with Redux before,
it's probably confusing the hell out of you,
and you're probably like, this guy can't explain anything
because this really isn't my style of doing things,
just showing a diagram and explaining it.
I'd rather explain it through the code.
So I promise you, as we move along, things will get easier
and you'll start to understand it a lot better,
especially with the Redux dev tools.
The dev tools, they allow you to visualize
exactly what's going on.
They show you the actions that are being fired off.
They show you all the data that's in the state.
So you definitely wanna have the Redux dev tools
installed in your browser.
All right, so hopefully this helps a little bit
for those of you that have never worked with Redux
or maybe not even heard of it,
or I'm sure you've heard of it,
but not ever ever touched it at all.
So in the next video,
we're gonna go ahead and get it set up.
And I will warn you, there's a bit of boiler plate,
meaning just some basic setup that we have to go through
creating the store and hooking it into our app component
and stuff like that, all right?
But we'll try to explain things as we move along.
So, let's get into the next video.
*/
