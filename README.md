MuggleMore by Vanessa Swanson, Victor Reysantos, and Maggie Ward

Overview

This is the third project I was assigned for the Software Engineering Immersive at General Assembly. I worked with [Vanessa Swanson](https://github.com/VanessaSwanson) and [Victor ReySantos](https://github.com/vjmreysantos). MuggleMore is a MeetUp-like site for Harry Potter fans to connect. Users register and create a profile which allows them to join groups and register to attend events. Users can leave comments within groups and on event pages.![](https://lh5.googleusercontent.com/yJNU5k03JT-52Kvsck5a7OWGq_cOZX2otOmQtjMWerp-9KWf3cncVXeBy0dt0cJjIl9LbOk3goA4LkGO8f4SUxwCTu0uhH3EzoJkZhkLqb9HfW6AYn64w3Sf8QUyzmQsghVwPcu_=s0)

Deployment

This web app has been deployed with Netlifly and is available [here](https://muggle-more.netlify.app/).

Brief

Build a MERN web application in one week with a team of 3 people.

Technologies Used

-   HTML5

-   Sass

-   MongoDB

-   Mongoose

-   Express

-   ReactJS

-   JSX

-   Node

-   Insomnia

-   GitHub

-   Trello

Process

We decided to use a Trello board for our project to track what needed to be done, who was working on it, and when it was complete. This was an excellent management tool for us, particularly as we split up our work on the frontend.

![](https://lh3.googleusercontent.com/LOXoeWMPoXRjGSnkIn1FnJ08hHW2Q-chJTDAFxGCvxc8pPmvlhAOwtDgN9eS0zlfmJU7qfzPjKwB-YWNwhZCbOafy0bbrzt0w3sWsDHdwgiAAiW50zHGi84rfa1-XYLDq6YSRUXW=s0)

We worked as a team to create the backend, with one person coding and the others contributing and editing. This was really useful for me to review all the aspects of an Express/MongoDB backend as opposed to breaking up the tasks. Additionally, working together and devoting time to the build allowed us to create a robust database with many relationships. As shown in the groupSchema model below, there were relationships between the users and their comments, the groups, and the events.

![](https://lh6.googleusercontent.com/UAXEV4czZmgcDZ6gpS0VD4zdy0dfeFjutQchL82TjICXn57xkXJGf8kOEZJiQfC7FZbsPuohX_g63V_4zEQT1pfQbad9E_wSv_GwnfD3EIDFQSEfVb021G-Cyi0I_g01MnV2bZ2z=s0)When the time came to begin work on the frontend we each took a component and worked on that component. We used the Trello board and 3x daily group meetings to communicate. We also had Git "merge parties" at our daily meetings to ensure we were all staying up-to-date and minimize git issues.

Day One 

Backend: We spent the better part of a day building out our model schemas and the necessary requests to interact with them.

Day Two

Backend: We created seed data and the process to disconnect, empty, reseed, and connect the database. We added custom error handling, secure routing, and virtual user schemas.

Day Three: 

Backend: We each made changes to the code as necessary to complete our tasks on the client side.

Frontend: As a group we connected the frontend to the backend. Then we split up to work on components of the front individually. I began work on the groupCard and groupIndex.

Day Four:

Backend: We each made changes to the code as necessary to complete our tasks on the client side.

Frontend: I finished the groupIndex, groupShow, and createGroup pages. We chose to use bootstrap for styling, so I began learning some basic bootstrap and implementing it in those pages. I also started adding in authorized functionality including buttons available only to credentialed users. My team added the index and show pages for events and online events, made forms for creating events, and added functionality to register and login.

Day Five:

Backend: We each made changes to the code as necessary to complete our tasks on the client side.

Frontend: I worked out the functions for joining groups and attending events and online events. I began working on the navbar and added logout functionality. My teammates added forms to create profiles and online events, added comments to the events, and added the homepage. We all began picking up smaller one-off items to work on as well.

Day Six:

Backend: We each made changes to the code as necessary to complete our tasks on the client side.

Frontend: I began working on the registration form's sorting quiz and functionality related to page reloads reflecting authorization and state. My teammates worked on styling and the home page.

Day Seven:

Backend: We each made changes to the code as necessary to complete our tasks on the client side.

Frontend: This day was mainly spent doing last minute styling and fixes to errors as we tested the user journey.

Known Bugs

On deployment the mapbox requests stopped working properly and some of the online event show pages do not load properly.

Challenges

I struggled to get the join/attend functionality working correctly. I learned that the headers had to be the third argument in the request, so we needed a "null" second argument.

I was not able to access the details object on the user model schema. I intended to update the information through the registration form, but was unable to access them through the handleChange function. 

![](https://lh3.googleusercontent.com/9nFLrM7iUZfipg-pfzO94slNoRKKJIMLSo4JqEq5tIjVYBHVaGO4WVa7blJYFUvLGIo2LH2FUpTTxIwcx22oELP9td2rrSSCYi-OTEedYZlq5DSTtkGjRh6VHmfuM9qNRDm-ngBW=s0)

![](https://lh3.googleusercontent.com/FOl4uwYk9pJzX2AH-Hh7aVNQMHVnKwnfmwVUWnXCckIdRTEjbbg4T9CjeW_fchdQ7gBIFIlfVx6z5JPWYisew_02MTKS4UqXrnX7AOkG09_leXwVykvzISeT1uUD5DzyQCQdBtb0=s0)

Wins

I enjoyed playing with the authorizations and using React hooks to effect changes. In the example below when the user joins or leaves the group the page would re-render to reflect their updated status. I used this same technique in other places throughout the app.

![](https://lh4.googleusercontent.com/RLZgkMsuOPkTnuctQIyNlqKUPFfoyDaFXbA6i7STP90BnvmKMtw1-hFSmJsk57rdNWCvUKxeVr5Q_neMuAsoaIZxAx45wwUOxUzkEgKw3Vr8_aq3VjuR1fRvgJ4-3sCFLSqd8QFR=s0)

Future Improvements

-   Add user following.

-   Add events and online events to the groups.

-   Change comments route so that you can leave them on the event/group page.

-   Add error handling to the forms.

-   Update the registration form so that it connects to the user's details.

Key Learnings

Working through the entire backend was very valuable for me. I was able to get more practice on each step of the setup, particularly the use of virtual schemas.