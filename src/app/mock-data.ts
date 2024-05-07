export class InMemoryDataService {
    createDb() {
        const tasks = [
            { id: 1, title: 'Build a RESTful API with Node.js', description: 'Create a RESTful API using Express.js for a web application.', status: 'Incomplete' },
            { id: 2, title: 'Learn Angular', description: 'Complete the Angular tutorial series on official documentation.', status: 'Complete' },
            { id: 3, title: 'Deploy a React App to Firebase', description: 'Deploy a React application to Firebase Hosting.', status: 'Incomplete' },
            { id: 4, title: 'Implement Authentication in Django', description: 'Add user authentication and authorization to a Django web application.', status: 'Incomplete' },
            { id: 5, title: 'Write Unit Tests for Spring Boot Application', description: 'Implement unit tests for various components of a Spring Boot application.', status: 'Incomplete' },
            { id: 6, title: 'Build a Full-Stack TypeScript Application', description: 'Develop a full-stack application using TypeScript, Node.js, and Angular.', status: 'Complete' }
        ];
        return { tasks };
    }
}  