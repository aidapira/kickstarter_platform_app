# kickstarter_platform_app

## Overview of the web application
This is a web application that allows entrepreneurs to create a post for their business or product to showcase to investors who can view their posts and fund them. The 3rd party API that is used for the payment processing is Stripe.

## Instructions to install and start the app
1. In the server directory, run: (This will run Nodejs)
```
npm install
```
```
npm start
```

2. In the client directory, run: (This will start the react app)
```
npm install
```
```
npm start
```

## App's overall architectural pattern
The architural pattern used in this app is MVC (Models, Views, Controllers) pattern. All the components consisting of the rendered HTML are inside the views directory. All the methods and logics are inside the controllers directory. The server side code is implemented inside the server directory.

## Expected payload and responses for a REST API
The /save-form-values API route is a POST method REST API that will save the user's input values into the Postgres database. The payload is an object with the Business Name, Business Description, and Business Inspiration. An example payload would look like this:

```
{
    businessDescription: "We make the testing automation process automated for you"
    businessInspiration: "Making coding as automated as possible."
    businessName: "Testing Automation Business"
}
```

The response for this REST API is a string 'Success' if the save crud operation is performed successfully.

## Distinct design decisions with screenshots

When the application's root route is entered, it reroutes the user to /create-posts route which renders the PostForm component. PostForm consists of a component level state that sets the value of the step variable. Step value is used to determine which child component (which step in the form) to render.

The first step is entering the Business Name. That is rendered by FormBusinessName component, second step is entering business description that is rendered by FormBusinessDesc, and the third step is entering the business inspiration which is rendered by FormBusinessInsp component. All three components are shown in the below screenshots.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post1.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post2.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post3.PNG?raw=true)

Since the user's input values are set in parent component's state, on clicking on the Back button the textfields will be prepopulated by the previously entered values.
Once user enters all values, the fourth step is confirmation. FormConfirm component renders the confirmation page which lists the user's input values.

![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/create_post4.PNG?raw=true)

When user confirms their inputs, their answers get saved in the Postgres database and they get redirected to a page that lets the user know their post was created successfully and allows them to see the posts by clicking on a see posts button. When user clicks on the button, they will see their post on the view posts page.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/post_confirmation.PNG?raw=true)

View Posts page is rendered by ViewPosts component and it consists of expandable cards. Each card is a post created by a user. The cards contain the business's name, description, and when user expands the card, they see the business's inspiration. The next two screenshots show cards, and an expanded card.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/view_posts.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/view_posts_expanded.PNG?raw=true)

The way an investor can make a payment is by clicking on FUND PROJECT button on a card. This will take them to PaymentCheckout component that shows the business name, their image, and a call to action button to MAKE A PAYMENT.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/make_payment_page.PNG?raw=true)

When user clicks on MAKE A PAYMENT button, they are redirected to Stripe checkout page using the Stripe checkout API. If user clicks back, they will be redirected to /payment-cancel route that renders the PaymentCancel component. If user completes the payment information and payment is processed successfully, they will be redirected to /payment-success route which renders PaymentSuccess comopenent.
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/stripe_checkout_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/cancel_payment_page.PNG?raw=true)
![alt text](https://github.com/aidapira/kickstarter_platform_app/blob/master/payment_success_page.PNG?raw=true)

## Use of reusable components
The BusinessCard component is a reusable component. It renders one card. ViewPosts component fetches the data from the database and loops through the array of the returned data to render all the cards in the View Posts page.

## UI components used
In this application, components from @material-ui/core are used. Some examples are:
- AppBar: used in the Navbar component
- Box: is used in PaymentSuccess comp
- Button: used often in the application to render the call to action buttons
- Grid: the main styling component of the view posts component to place the cards on the page
- TextField: an example is in the create post, every step uses TextField to enter the values
## URL of hosted application
https://kickstarter-platform-app.herokuapp.com