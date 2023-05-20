import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs");
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-7 ">
                <p className="text-2xl mb-3"> 1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p className="text-xl mb-4">An access token is a credential used to access protected resources, while a refresh token is used to obtain a new access token when the previous one expires. The client includes the access token in requests to authenticate and access protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without reauthentication. It is important to store these tokens securely on the client-side, typically in a secure storage mechanism such as an HTTP-only cookie, local storage, or a secure keychain. Storing them securely helps prevent unauthorized access and misuse of the tokens.an access token is a credential used to access protected resources, while a refresh token is used to obtain a new access token when the previous one expires. The client includes the access token in requests to authenticate and access protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without reauthentication. It is important to store these tokens securely on the client-side, typically in a secure storage mechanism such as an HTTP-only cookie, local storage, or a secure keychain. Storing them securely helps prevent unauthorized access and misuse of the tokens.an access token is a credential used to access protected resources, while a refresh token is used to obtain a new access token when the previous one expires. The client includes the access token in requests to authenticate and access protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without reauthentication. It is important to store these tokens securely on the client-side, typically in a secure storage mechanism such as an HTTP-only cookie, local storage, or a secure keychain. Storing them securely helps prevent unauthorized access and misuse of the tokens. </p>
                <p className="text-2xl mb-3"> 2. Compare SQL and NoSQL databases?</p>
                <p className="text-xl mb-4">SQL databases use a structured data model with predefined schemas, enforce strict data consistency, and are suitable for applications that require complex querying and ACID compliance. NoSQL databases offer schema flexibility, horizontal scalability, and are ideal for handling large amounts of unstructured or rapidly changing data with high performance requirements. The choice between SQL and NoSQL depends on the specific needs of your application. </p>
                <p className="text-2xl mb-3"> 3. What is express js? What is Nest JS ?</p>
                <p className="text-xl mb-4"> Express.js is a minimalistic and flexible web application framework for Node.js, while Nest.js is a progressive and opinionated framework built on top of Express.js, providing additional structure and features inspired by Angular. Express.js offers more freedom and flexibility, while Nest.js promotes a modular and organized approach for building scalable applications. </p>
                <p className="text-2xl mb-3"> 4. What is MongoDB aggregate and how does it work ?</p>
                <p className="text-xl mb-4">The MongoDB aggregate function allows you to perform complex data analysis and transformations on collections of documents. It works by applying a pipeline of stages to the documents, performing operations such as filtering, grouping, sorting, and more. The stages are executed sequentially, and the result is generated based on the specified operations. </p>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default Blogs;