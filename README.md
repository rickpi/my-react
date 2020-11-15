
# React-App
## Project
### App
This app is a school project for **My Digital School**.
The aim of this project is to create a search engine for **events in Paris and in its surroundings**.
### API
This app gets datas from an API **open data** [**[https://opendata.paris.fr]**](https://opendata.paris.fr)
### Bootstrap React
The entire app is styled with [Bootstrap React](https://react-bootstrap.github.io/)
### How To Use
You need to have **node** installed in version 12 and **npm** install in version 6 , to check :

    node -v
    v12.18.4
    npm -v
    6.14.6

Then install packages :

    npm install
And run the app :

    npm start

## To Do In Paris
The default view of the app.
It loads 6 events.
### View More
The **button on the bottom** loads 3 more events.
### Filters
It's possible **to filter** the displayed events with tags **on the right** of the page.
It's possible to add **several tags**.
### Search An Event
**On the top** of the page, there is a **searchbar**.
It will display events **relating to the query** that the user has typed.

## Advanced Search
This part allows the user to search events with **criteria**.
### Date
**Pick a date** and it will display event taking place at this date.
### Categories
**Choose a category** and it will display events related with this category.
### Free
Check that and it will display **only free events**.
### Access
**Check accesses** that you want and it will display events with these accesses.
### Number of results
Choose **how many results you want** to display. By default it's 10.

## Event Details
Clicking on "**View details"** on an event will redirect the user on a page with **all details about this event**.
### Description
The description of the event it's **on the left**.
### About
It's **the price**, **the date** and **the accesses** of the event.
### Location
It's the address where the event is. It's accompagnied by a map from the **Google Maps API** with a pin on the address.
### Contact
It's the contact of the organizer of the event. There is **the mail**, **the twitter**, **the facebook** and **the website** of the organizer (if that's available).
