## React with SWR

React Hook SWR to deliver a better user experience (UX), the secret lies in how the tool handles the data that was fetched regardless of the back end implementation (Java, Node.js PHP) and the API that performs the search in the Front End, for example JavaScript fetch API and Axios widely used for this purpose.

The tool in question does not replace the fetch API or Axios, it is a layer that runs on top of these technologies - like a Wrapper (something that involves). Below we will see in more detail.

SWR is an acronym for Stale-While-Revalidate (literal translation: bring the old data while assessing whether it has new data). This is a strategy that takes the data from the cache and then, under the hood, a request is made to the back end to bring the new data if it has it, reloading the list with the new data, so that it is transparent to the user.

With SWR, components will receive the flow of data updates constantly and automatically. The user interface will always be fast and responsive.

# What the SWR delivers:

- A fast, lightweight and reusable data fetching;
- Integrated cache and prevents request redundancy;
- Real-time experience;
- TypeScript support;
- Possibility to be used in React Native;
- Fast navigation between pages;
- Revalidation of data when the screen receives focus (revalidate-on-focus);
- Data revalidation when reconnecting to the Internet;
- Mutation of local data with (Optimistic UI);
- React Suspense;
- Agnostic API, can be used with REST or GraphQL;
- Agnostic back end, no matter what language was implemented.
