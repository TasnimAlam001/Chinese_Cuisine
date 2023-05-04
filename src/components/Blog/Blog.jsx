import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h1>Tell us the differences between uncontrolled and controlled components</h1>
            <p>In React, a controlled component is one where the components state is controlled by React. This means that React is responsible for updating the components state and rendering the component accordingly. To update the value of a controlled component, you need to update its state using the setState method. On the other hand, an uncontrolled component is one where the components state is handled by the browser. This means that the value of the component is managed by the DOM, not by React. To get the value of an uncontrolled component, you would typically use a ref to access the underlying DOM element.In simpler terms, controlled components are controlled by React and their values can only be updated via state changes, while uncontrolled components are directly controlled by the user and their values can be accessed directly from the DOM. Controlled components give you more control over the components behavior and allow you to enforce specific rules and validation, while uncontrolled components are often easier to set up and can be useful in certain situations where you dont need as much control over the components behavior.</p>

            <h1>How to validate React props using PropTypes? </h1>
            <p>To validate React props using PropTypes, you can use a library called prop-types that comes with React.
                PropTypes allows you to define the types and requirements of the props that your component expects to receive. You can then use these definitions to validate that the props are of the correct type and shape at runtime.</p>

            <h1>Tell us the difference between nodejs and express js.</h1>
            <p>Node.js and Express.js are both popular technologies in the world of web development, but they serve different purposes.
                Node.js is a runtime environment that allows you to run JavaScript outside of a web browser. Its commonly used for building server-side applications, such as web servers or command-line tools. Node.js provides built-in modules that allow you to interact with the file system, make HTTP requests, and more. Node.js is often used as the foundation for other web application frameworks and APIs.
                Express.js, on the other hand, is a web framework that runs on top of Node.js. It provides a simpler API for building web applications than Node.js does by itself. Express.js allows you to define routes for your application and handle HTTP requests and responses. Express.js is often used to build RESTful APIs or web applications that serve dynamic content to users.
                In summary, Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web framework that runs on top of Node.js and simplifies the process of building web applications.</p>
            <h1>What is a custom hook, and why will you create a custom hook?</h1>
            <p>without having to use higher-order components or render props.

                Custom hooks can be created by extracting common stateful logic from a component and moving it into a reusable hook. By doing this, you can keep your component code simple and focused on rendering, while the complex stateful logic can be maintained outside of the component.

                Some reasons why you might create a custom hook include:

                Reusing code: Custom hooks allow you to reuse stateful logic across multiple components, reducing code duplication and making your code more maintainable.

                Abstracting complexity: You can use custom hooks to encapsulate complex logic into a simpler interface, making it easier to reason about and use in your application.

                Separating concerns: By moving stateful logic out of your component and into a custom hook, you can separate concerns and keep your component code focused on rendering.

                Testing: Custom hooks can improve the testability of your code by allowing you to test the stateful logic separately from the component.

                Overall, custom hooks can help you write cleaner, more modular code in your React applications, making them easier to understand, maintain, and extend over time.</p>

        </Container>
    );
};

export default Blog;