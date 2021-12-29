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
Once user enters all values, the fourth step is confirmation. FormConfirm component renders the confirmation page which lists the user's input.

![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post4.PNG?raw=true)

When user confirms their inputs, their data gets saved to the Postgres database and they get redirected to a page that lets the user know their post was created successfully and allows them to see the posts by clicking on a see posts button. When user clicks on the button, they will see their post on the view posts page.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/post_confirmation.PNG?raw=true)

View Posts page is rendered by ViewPosts componenet that consists of expandable cards. Each card is a post created by a user. The cards contain the business's name, description, and when user expands the card, they see the business's inspiration. The next two screenshots show cards, and an expanded card.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/view_posts.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/view_posts_expanded.PNG?raw=true)

The way an investor can make a payment is by clicking on FUND PROJECT button on a card. This will take them to PaymentCheckout component that shows the business name, their image, and a call to action button to MAKE A PAYMENT.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/make_payment_page.PNG?raw=true)

When user clicks on MAKE A PAYMENT button, they are rerouted to Stripe checkout page using the Stripe checkout API. If user clicks back, they will be rerouted to /payment-cancel route that renders the PaymentCancel component. If user completes the payment information and payment is processed successfully, they will be rerouted to /payment-success route which renders PaymentSuccess comopenent.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/stripe_checkout_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/cancel_payment_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/payment_success_page.PNG?raw=true)

## Use of reusable components
The BusinessCard component is a reusable component. It renders one card. ViewPosts component fetches the data from the database and loops through the array of the returned data to render all the cards in the /view-posts page.

## URL of hosted application
https://kickstarter-platform-app.herokuapp.com/create-posts