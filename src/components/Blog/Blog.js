import React from 'react';

const Blog = () => {
    return (
        <div className='container md-flex'>
            <div className='blog'>

                <h2>1. Difference between authorization and authentication</h2>
                <p>In authentication process, the identity of users are checked for providing the access to the system.
                    While in authorization process, person’s or user’s authorities are checked for accessing the resources.
                    In authentication process, users or persons are verified.
                    While in this process, users or persons are validated.
                    It is done before the authorization process.
                    While this process is done after the authentication process.
                    It needs usually user’s login details.
                    While it needs user’s privilege or security levels.</p>
                <br />
                <h2>2. Why we use Firebase? What other options we have implement authentication?</h2>
                <p>Google Firebase offers many highlights that pitch it as the go-to backend advancement instrument for web and versatile applications. It diminishes improvement responsibility and time. What's more, it's an ideal prototyping device. Firebase is basic, lightweight, well disposed, and economically perceived.Other options: Kuzzle,Couchbase,NativeScript,RxDB,Flutter</p>
                <br />
                <h2>3. What services which Firebase provides?</h2>
                <p>here are many services which Firebase provides, Most useful of them are:
                    Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging.</p>

            </div>

        </div>
    );
};

export default Blog;