# kickstarter_platform_app

## Overview of the web application
This is a web application where entrepreneurs can create posts for their businesses or products and investors can view their posts and fund them. The 3rd party API that is used for the payment processing is Stripe.

## Instructions to install and start the app
1. In the server directory, run:
```
npm install
```
```
npm start
```
This will run Nodejs.

2. In the client directory, run:
```
npm install
```
```
npm start
```
This will start the react app.

## App's overall architecture pattern
The architure pattern used in this app is MVC (Model, Views, Controllers) pattern. With this pattern, all the components consisting of the rendered HTML are inside the views directory. All the methods and logic are inside the controllers directory. The server side code is implemented inside server directory.

## Expected payload and responses for a REST API
The /save-form-values API route is a POST REST API that will save the post values into the Postgres database. The payload is an object with the Business Name, Business Description, and Business Inspiration. An example would look like this:

```
{
    businessDescription: "We make the testing automation process automated for you"
    businessInspiration: "Making coding as automated as possible."
    businessName: "Testing Automation Business"
}
```

The response for this REST API is a string 'Success' if the save crud operation is performed successfully.

## Distinct design decisions with screenshots

When application first opens, it renders the PostForm component. PostForm consist of a parent state that holds the step state that is used to determine which step of the form to render.

The first step is entering the Business Name. That is rendered by FormBusinessName component, second step is entering business description that is rendered by FormBusinessDesc, and the third step is entering the business inspiration which is rendered by FormBusinessInsp component. All three components are shown in the below screenshots.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post1.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post2.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post3.PNG?raw=true)

Since the values are stored in parent component's state variable, on clicking on the Back button, the textfields will be prepopulated by the previously entered values.
Once user enters all values, the fourth step is confirmation. 

![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post4.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/post_confirmation.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/view_posts.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/view_posts_expanded.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/make_payment_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/stripe_checkout_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/cancel_payment_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/payment_success_page.PNG?raw=true)

## URL of hosted application
https://kickstarter-platform-app.herokuapp.com/create-posts