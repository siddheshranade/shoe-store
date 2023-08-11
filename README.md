# E-Commerce Shoe Store

This is an e-commerce store I've built with very simple cart functionality.

## How to Deploy

1. Download the folder or git clone the repo
2. cd to root directory, i.e. folder called "dot-cards-store"
3. run `npm install`
4. run `npm run dev`
5. Access the localhost URL that appears in the terminal

## Technical Improvements

Due to time constraints I haven't yet implemented some improvements this project could have. I've described these below.

1. I haven't yet made a carousel of images on the product details page, insetad showing only a single image. I looked into `react-responsive-carousel` and would probably use that.
2. The website is responsive but not perfectly attuned to every screen width, especially iPad. It could be more flexible.
3. All inputs where quantity is needed don't have '+' and '-' arrow buttons yet. So far it's just a simple <input> element.
4. The code could be modularized better into smaller components with some more refacotring.
5. Visually, I've stuck exactly to the prototypes shown in the Figma file without changing anything for now.
6. I haven't used any database, but have hardcoded data in a JSON file for now.
7. I haven't added any automated tests to check the business logic implementation yet.
8. Taxes, shipping, and discount values are hardcoded.

## Concurrency Improvements

Currently the app is simple, but here are some improvements it could have to mitigate concurrency issues.

1. Using a database with features to prevent access bottlenecks and race conditions would be ideal.
2. Session management would be important to ensure that the user doesn't accidentally create multiple repeated requests.
3. It would be good to test how the website behaves under heavy load using tools like JMeter.
