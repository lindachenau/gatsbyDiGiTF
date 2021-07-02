import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js" />
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js" />
        <script dangerouslySetInnerHTML= {{ __html: `
          var firebaseConfig = {
            apiKey: "AIzaSyCOn9SEWZdu8hB1dVS8hrtL6qHM7HcfHsA",
            authDomain: "gatsbydigitf.firebaseapp.com",
            projectId: "gatsbydigitf",
            storageBucket: "gatsbydigitf.appspot.com",
            messagingSenderId: "270349362428",
            appId: "1:270349362428:web:35a8913953e1cb3cace379",
            measurementId: "G-T1WECS9BT8"
          };
          firebase.initializeApp(firebaseConfig);
          const messaging = firebase.messaging();
          messaging.onMessage((payload) => {
            console.log("onMessage, ", payload)
          });`}} />
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
