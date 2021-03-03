# Hello Devs at CyberHawk

If you wish to pull down this app and run it locally you'll need to install node.js. 

After you have done this open up a terminal and type in 
    npm i. 

You can also find this site running live at: https://master.d2cf7vgqfyh551.amplifyapp.com/

## The Plan

From the perspective of a front end dev. 

get the data using ajax from https://jsonplaceholder.typicode.com/posts/

Use an array map on the requested data for displaying the data in a table and checking if the table data is a multiple of 3 and 5. 

This is the exact text that I wrote before working on the app. I previously thought about storing the incidents as a json object and importing it. 

Once I noticed that I would get extra kudos points if I used an ajax request I instead decided upon using the jsonplaceholder site to get dummy data that I could use as my incidents. 

## What could be improved
The list items could be clickable which would then either open up a new page giving further info on the item for example what type it is and a picture of it or it could open up a modal with the previously mentioned data.

I think in order to future proof the app I could add the different damage types as a javascript object which could be imported. This would allow me to add new damage types without the potential to make spelling mistakes. 

The margins in the css could be modified when the screen width goes very low as currently that looks buggy at very small screen widths. This would be resolved using media queries 
