# CanarDev API's
#   Website link:
    https://meteo-project.canar.dev
<br>

## Code explanation :
<br>
In a first step I defined the keys of my APIs and I also defined my HTML tags in 'main.js' file

<br>
Then, I fetch with an API the IP address of the person who connects to the site!

<br>
After this, with the recovered IP address, I search in a new API the local weather in real time (degrees).

<br>
This new API allows me to have not only the weather but also get a more accurate location (the name of a nearby city and the country).

<br>
With the name of this city and the name of the country, I search thanks to the Unsplash API a picture of the places (example: Paris will show a picture of the Eiffel Tower)

<br>

##  Features :
<br>
- Thanks to a button, you can change the background photo (the photo will change randomly)!
<br>
- You can also search for a particular city and thus see its weather in real time as well as a background adapted to this same city
<br>
- When you leave the page and come back to it, your last search will be displayed thanks to the 'localStorage' !