# Transaction List Application

A small client side app for displaying transactions.

## Contents

- [Overview](#Overview)
- [Prerequisites](#prerequsitess)
- [Development](#Development) 
- [Running](#Running)
- [Using](#Using)

### UI

The UI is written using the React 17.x framework.  It is a SPA application.  It uses ES10.  Babel is used to compile down to ES5 so that it will run on older browsers, although react 17.x is not supported on [older browsers](https://create-react-app.dev/docs/supported-browsers-features/).  Chakra-UI has been used for the presentation.  The UI is transpiled, uglified and minified and packaged by Webpack.

Note: For the purpose of simplicity the UI server serves as both backend and frontend.

You will need:

- Apple Mac or Windows 10 (Linux should work but not tested)
- Node 15.0 or greater (I used v15.1.0)
- ~1 minute to build 

### API

The API is simply a single fetch request from the browser to an external API using the NextJS server.

## Development

During development it is recommended to run the UI using the NextJS production server.  This provides hot reload and eases debugging with inline-sourcemap.

To start the ui server in development mode, start a terminal window and enter..

```
cd transaction-app     
npm i
npm run dev
```

The UI will run on port 3000

Note: the UI project is based on a starter project [nextjs-with-chakra-ui](https://github.com/chakra-ui/chakra-ui).  This includes a few extra dependencies, which allow a project to be setup quickly. 

## Production Running

To start the ui server in production mode, start a terminal window and enter..

```
cd transaction-app
npm i
npm run build
npm start
```

## Using

In either production or development mode go to http://localhost:3000.

The system comprises of 2 views:

- Transaction List 
- Transaction Detail

You are initially presented with a list of transactions, which are ordered in the same way as the API presents them.  From here you can select the drop down menu to sort transactions in a different order. You can also select the description of a transaction to reach the details view, where you are able to edit notes. The notes are persisted through localstorage.

The format of the URL is:

http://localhost:3000/ - displays all the transcations

http://localhost:3000/transactions/3 - goes to transaction with id 3



## TODO...

This application was completed in less than 24 hours. With more time I would:

- Use Typescript
- Clean up and improve UI/UX
- Better state management (Redux/useReducer/useContext)
- Use an external library such as React Data Grid for creating a table to store data instead of using CSS grid
- Add unit tests

