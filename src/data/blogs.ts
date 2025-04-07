import { type BlogCardProps } from "@/components/blogs/blog-card";

export const BLOG_POSTS: BlogCardProps[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js",
    description:
      "Learn about the best practices and patterns for building scalable web applications using Next.js, including server-side rendering, static site generation, and API routes.",
    date: "2025-04-02",
    category: "Web Development",
    readTime: "8 min read",
    slug: "building-scalable-web-applications-with-nextjs",
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced digital landscape, building scalable web applications is crucial for business success. Next.js, a powerful React framework, has emerged as a leading solution for creating performant and scalable applications. This guide explores proven strategies and best practices for leveraging Next.js in your projects.</p>

      <h2>Understanding Next.js Architecture</h2>
      <p>Next.js provides a robust foundation for building scalable applications through its hybrid rendering approach:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Enables dynamic content rendering on the server, improving performance and SEO</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-renders pages at build time for optimal performance and reduced server load</li>
        <li><strong>Incremental Static Regeneration (ISR):</strong> Combines the benefits of static and dynamic content</li>
        <li><strong>Client-Side Rendering:</strong> Provides interactive experiences for user-specific content</li>
      </ul>

      <h2>Key Features for Scalability</h2>
      <h3>1. Built-in Performance Optimizations</h3>
      <p>Next.js includes several performance features out of the box:</p>
      <ul>
        <li>Automatic image optimization with next/image</li>
        <li>Font optimization with next/font</li>
        <li>Script optimization with next/script</li>
        <li>Route prefetching for faster navigation</li>
      </ul>

      <h3>2. API Routes and Backend Integration</h3>
      <p>Next.js simplifies backend integration through API routes:</p>
      <pre><code>
// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Handle GET request
    const users = await fetchUsers()
    res.status(200).json(users)
  }
}
      </code></pre>

      <h2>Best Practices for Scalable Applications</h2>
      <h3>1. Project Structure</h3>
      <p>Maintain a clear and scalable project structure:</p>
      <pre><code>
src/
  ├── components/    # Reusable UI components
  │   ├── common/    # Shared components
  │   ├── features/  # Feature-specific components
  │   └── layouts/   # Layout components
  ├── pages/         # Next.js pages
  ├── styles/        # Global styles
  ├── utils/         # Utility functions
  ├── hooks/         # Custom React hooks
  ├── types/         # TypeScript types
  └── services/      # API and external services
      </code></pre>

      <h3>2. State Management</h3>
      <p>Choose appropriate state management solutions:</p>
      <ul>
        <li>React Context for global UI state</li>
        <li>React Query for server state</li>
        <li>Zustand for complex client state</li>
      </ul>

      <h3>3. Performance Optimization</h3>
      <p>Implement these performance strategies:</p>
      <ul>
        <li>Use dynamic imports for code splitting</li>
        <li>Implement proper caching strategies</li>
        <li>Optimize images and assets</li>
        <li>Monitor and optimize Core Web Vitals</li>
      </ul>

      <h2>Real-World Implementation Example</h2>
      <p>Here's a practical example of a scalable Next.js application structure:</p>
      <pre><code>
// pages/index.tsx
import { GetStaticProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/features/products'

export default function Home() {
  return (
    <Layout>
      <ProductList />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  
  // Prefetch data
  await queryClient.prefetchQuery('products', fetchProducts)
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60, // ISR every 60 seconds
  }
}
      </code></pre>

      <h2>Monitoring and Maintenance</h2>
      <p>Ensure long-term scalability through:</p>
      <ul>
        <li>Regular performance monitoring</li>
        <li>Error tracking and logging</li>
        <li>Automated testing and CI/CD</li>
        <li>Regular dependency updates</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building scalable applications with Next.js requires a combination of proper architecture, performance optimization, and maintainable code practices. By following these guidelines, you can create applications that grow with your business needs while maintaining high performance and user experience.</p>

      <h2>Additional Resources</h2>
      <ul>
        <li><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
        <li><a href="https://nextjs.org/blog">Next.js Blog</a></li>
        <li><a href="https://github.com/vercel/next.js">Next.js GitHub Repository</a></li>
      </ul>
    `,
    image: "/assets/images/blogs/nextjs-scalable-apps.jpg",
    tags: ["Next.js", "React", "Web Development", "Performance"],
  },
  {
    id: "2",
    title: "The Future of AI in Software Development",
    description:
      "Explore how artificial intelligence is transforming the software development landscape, from automated testing to code generation and beyond.",
    date: "2025-04-01",
    category: "Artificial Intelligence",
    readTime: "10 min read",
    slug: "future-of-ai-in-software-development",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing software development, introducing unprecedented automation and intelligence to the development process. This comprehensive guide explores the current state and future trajectory of AI in software development.</p>

      <h2>Current State of AI in Software Development</h2>
      <h3>1. Intelligent Code Generation</h3>
      <p>Modern AI tools are transforming code creation:</p>
      <ul>
        <li><strong>GitHub Copilot:</strong> Real-time code suggestions and completions</li>
        <li><strong>Amazon CodeWhisperer:</strong> Context-aware code recommendations</li>
        <li><strong>Tabnine:</strong> AI-powered code completion</li>
      </ul>

      <h3>2. Automated Testing and Quality Assurance</h3>
      <p>AI is enhancing testing capabilities through:</p>
      <ul>
        <li>Intelligent test case generation</li>
        <li>Automated bug detection and fixing</li>
        <li>Performance optimization suggestions</li>
        <li>Security vulnerability scanning</li>
      </ul>

      <h2>Emerging AI Technologies in Development</h2>
      <h3>1. Natural Language Processing (NLP)</h3>
      <p>NLP is enabling more intuitive development interfaces:</p>
      <ul>
        <li>Natural language to code conversion</li>
        <li>Automated documentation generation</li>
        <li>Intelligent code review comments</li>
        <li>Smart code search and navigation</li>
      </ul>

      <h3>2. Machine Learning in Development</h3>
      <p>ML is improving development processes through:</p>
      <ul>
        <li>Code pattern recognition</li>
        <li>Performance prediction</li>
        <li>Bug prediction and prevention</li>
        <li>Automated code refactoring</li>
      </ul>

      <h2>Future Trends and Possibilities</h2>
      <h3>1. AI-Driven Development Workflows</h3>
      <p>The future of development workflows will include:</p>
      <ul>
        <li>Automated project setup and scaffolding</li>
        <li>Intelligent dependency management</li>
        <li>Smart deployment strategies</li>
        <li>Automated documentation maintenance</li>
      </ul>

      <h3>2. Enhanced Developer Experience</h3>
      <p>AI will improve developer productivity through:</p>
      <ul>
        <li>Personalized development environments</li>
        <li>Intelligent code navigation</li>
        <li>Automated code review processes</li>
        <li>Smart debugging assistance</li>
      </ul>

      <h2>Implementation and Best Practices</h2>
      <h3>1. Integrating AI Tools</h3>
      <p>Best practices for AI tool integration:</p>
      <ul>
        <li>Start with specific use cases</li>
        <li>Evaluate tool effectiveness</li>
        <li>Maintain human oversight</li>
        <li>Regular tool updates and training</li>
      </ul>

      <h3>2. Security and Ethics</h3>
      <p>Important considerations for AI implementation:</p>
      <ul>
        <li>Code security and privacy</li>
        <li>Ethical AI usage</li>
        <li>Bias prevention</li>
        <li>Transparency in AI decisions</li>
      </ul>

      <h2>Preparing for the AI-Driven Future</h2>
      <p>Developers should focus on:</p>
      <ul>
        <li>Understanding AI fundamentals</li>
        <li>Learning AI-powered development tools</li>
        <li>Developing problem-solving skills</li>
        <li>Staying updated with AI trends</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AI is fundamentally transforming software development, offering unprecedented opportunities for automation and innovation. By understanding and embracing these changes, developers can position themselves for success in the future of software development.</p>

      <h2>Additional Resources</h2>
      <ul>
        <li><a href="https://github.com/features/copilot">GitHub Copilot Documentation</a></li>
        <li><a href="https://aws.amazon.com/codewhisperer/">Amazon CodeWhisperer Guide</a></li>
        <li><a href="https://www.tensorflow.org/">TensorFlow Documentation</a></li>
      </ul>
    `,
    image: "/assets/images/blogs/ai-software-development.jpg",
    tags: ["AI", "Machine Learning", "Software Development", "Future Tech"],
  },
  {
    id: "3",
    title: "Mastering TypeScript: A Comprehensive Guide",
    description:
      "A deep dive into TypeScript features, best practices, and how to leverage its type system to write more maintainable and robust code.",
    date: "2025-03-31",
    category: "Programming",
    readTime: "12 min read",
    slug: "mastering-typescript-comprehensive-guide",
    content: `
      <h2>Introduction</h2>
      <p>TypeScript has evolved into the standard for building large-scale JavaScript applications, offering powerful type safety and enhanced developer experience. This comprehensive guide will help you master TypeScript's features and best practices.</p>

      <h2>Why Choose TypeScript?</h2>
      <p>TypeScript provides several compelling advantages:</p>
      <ul>
        <li><strong>Type Safety:</strong> Catch errors at compile time</li>
        <li><strong>Enhanced IDE Support:</strong> Superior autocomplete and documentation</li>
        <li><strong>Improved Maintainability:</strong> Self-documenting code</li>
        <li><strong>Better Developer Experience:</strong> Advanced debugging and refactoring</li>
      </ul>

      <h2>Core TypeScript Concepts</h2>
      <h3>1. Basic Types</h3>
      <p>Understanding fundamental TypeScript types:</p>
      <pre><code>
// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Any and Unknown
let notSure: any = 4;
let uncertain: unknown = "Hello";

// Void and Never
function warnUser(): void {
  console.log("This is a warning message");
}

function error(message: string): never {
  throw new Error(message);
}
      </code></pre>

      <h3>2. Interfaces and Types</h3>
      <p>Creating reusable type definitions:</p>
      <pre><code>
// Interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

// Type alias
type Point = {
  x: number;
  y: number;
};

// Extending interfaces
interface Employee extends User {
  role: string;
  department: string;
}
      </code></pre>

      <h3>3. Generics</h3>
      <p>Implementing flexible and reusable types:</p>
      <pre><code>
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface GenericResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic class
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
      </code></pre>

      <h2>Advanced TypeScript Features</h2>
      <h3>1. Union Types and Type Guards</h3>
      <p>Working with multiple types:</p>
      <pre><code>
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
      </code></pre>

      <h3>2. Utility Types</h3>
      <p>Leveraging built-in utility types:</p>
      <pre><code>
interface User {
  name: string;
  age: number;
  email: string;
}

// Partial makes all properties optional
type PartialUser = Partial<User>;

// Pick selects specific properties
type UserName = Pick<User, "name">;

// Omit removes specific properties
type UserWithoutEmail = Omit<User, "email">;
      </code></pre>

      <h2>TypeScript Best Practices</h2>
      <h3>1. Type Inference</h3>
      <p>Let TypeScript do the work:</p>
      <pre><code>
// Good
const numbers = [1, 2, 3];

// Bad
const numbers: number[] = [1, 2, 3];
      </code></pre>

      <h3>2. Strict Type Checking</h3>
      <p>Configure strict type checking in tsconfig.json:</p>
      <pre><code>
{
  "compilerOptions": {
    "strictNullChecks": true,
    "strict": true,
    "noImplicitAny": true,
    "strictFunctionTypes": true
  }
}
      </code></pre>

      <h2>Common Pitfalls and Solutions</h2>
      <ul>
        <li>Avoid using 'any' type unnecessarily</li>
        <li>Properly type function parameters and return values</li>
        <li>Leverage type inference when possible</li>
        <li>Enable strict mode for better type safety</li>
      </ul>

      <h2>Conclusion</h2>
      <p>TypeScript is a powerful tool that significantly enhances JavaScript development. By following these best practices and understanding the core concepts, you can write more maintainable and robust code.</p>

      <h2>Additional Resources</h2>
      <ul>
        <li><a href="https://www.typescriptlang.org/docs/">TypeScript Documentation</a></li>
        <li><a href="https://github.com/microsoft/TypeScript">TypeScript GitHub Repository</a></li>
        <li><a href="https://www.typescriptlang.org/play">TypeScript Playground</a></li>
      </ul>
    `,
    image: "/assets/images/blogs/typescript-guide.jpg",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
  },
  {
    id: "4",
    title: "Getting Started with React Hooks",
    description:
      "A comprehensive guide to understanding and implementing React Hooks, from useState to custom hooks.",
    date: "2025-03-30",
    category: "React",
    readTime: "10 min read",
    slug: "getting-started-with-react-hooks",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks have revolutionized how we write React components, allowing us to use state and other React features without writing a class.</p>
      
      <h2>Why Use Hooks?</h2>
      <p>Hooks solve several problems in React development:</p>
      <ul>
        <li>Reuse stateful logic between components</li>
        <li>Simplify complex components</li>
        <li>Make code more readable and maintainable</li>
      </ul>
      
      <h2>Common Hooks</h2>
      <h3>useState</h3>
      <pre><code>
const [count, setCount] = useState(0);
      </code></pre>
      
      <h3>useEffect</h3>
      <pre><code>
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
      </code></pre>
      
      <h2>Custom Hooks</h2>
      <p>Create your own hooks to share stateful logic:</p>
      <pre><code>
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
      </code></pre>
    `,
    image: "/assets/images/blogs/react-hooks.jpg",
    tags: ["React", "JavaScript", "Web Development", "Hooks"],
  },
  {
    id: "5",
    title: "CSS Grid vs Flexbox: When to Use Each",
    description:
      "A detailed comparison of CSS Grid and Flexbox, with practical examples of when to use each layout system.",
    date: "2025-03-29",
    category: "CSS",
    readTime: "8 min read",
    slug: "css-grid-vs-flexbox-comparison",
    content: `
      <h2>Understanding Layout Systems</h2>
      <p>CSS Grid and Flexbox are two powerful layout systems in CSS, each with its own strengths and use cases.</p>
      
      <h2>CSS Grid</h2>
      <p>Grid is designed for two-dimensional layouts:</p>
      <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
      </code></pre>
      
      <h2>Flexbox</h2>
      <p>Flexbox is ideal for one-dimensional layouts:</p>
      <pre><code>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
      </code></pre>
      
      <h2>When to Use Each</h2>
      <h3>Use Grid When:</h3>
      <ul>
        <li>Creating complex two-dimensional layouts</li>
        <li>Building page layouts with multiple columns and rows</li>
        <li>Need precise control over both dimensions</li>
      </ul>
      
      <h3>Use Flexbox When:</h3>
      <ul>
        <li>Creating one-dimensional layouts</li>
        <li>Aligning items in a single direction</li>
        <li>Building responsive navigation bars</li>
      </ul>
    `,
    image: "/assets/images/blogs/css-layouts.jpg",
    tags: ["CSS", "Web Design", "Layout", "Responsive Design"],
  },
  {
    id: "6",
    title: "JavaScript Promises and Async/Await Explained",
    description:
      "Master asynchronous JavaScript programming with Promises and Async/Await patterns.",
    date: "2025-03-28",
    category: "JavaScript",
    readTime: "12 min read",
    slug: "javascript-promises-async-await",
    content: `
      <h2>Understanding Asynchronous JavaScript</h2>
      <p>Asynchronous programming is essential for handling operations that take time, such as API calls or file operations.</p>
      
      <h2>Promises</h2>
      <p>Promises provide a cleaner way to handle asynchronous operations:</p>
      <pre><code>
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      const data = { id: 1, name: 'John' };
      resolve(data);
    }, 1000);
  });
};
      </code></pre>
      
      <h2>Async/Await</h2>
      <p>Async/Await makes asynchronous code look synchronous:</p>
      <pre><code>
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
      </code></pre>
      
      <h2>Error Handling</h2>
      <p>Proper error handling is crucial in asynchronous code:</p>
      <pre><code>
// Promise error handling
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await error handling
async function handleData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
      </code></pre>
    `,
    image: "/assets/images/blogs/javascript-async.jpg",
    tags: ["JavaScript", "Async", "Promises", "Programming"],
  },
  {
    id: "7",
    title: "Building RESTful APIs with Node.js and Express",
    description:
      "Learn how to create robust RESTful APIs using Node.js and Express framework.",
    date: "2025-03-27",
    category: "Backend",
    readTime: "15 min read",
    slug: "building-restful-apis-nodejs-express",
    content: `
      <h2>Introduction to RESTful APIs</h2>
      <p>RESTful APIs are the foundation of modern web applications, enabling communication between different systems.</p>
      
      <h2>Setting Up Express</h2>
      <pre><code>
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
      </code></pre>
      
      <h2>Creating RESTful Endpoints</h2>
      <pre><code>
// GET all resources
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET single resource
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST new resource
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});
      </code></pre>
      
      <h2>Middleware and Error Handling</h2>
      <pre><code>
// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  next();
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
      </code></pre>
    `,
    image: "/assets/images/blogs/nodejs-api.jpg",
    tags: ["Node.js", "Express", "API", "Backend"],
  },
  {
    id: "8",
    title: "Introduction to GraphQL",
    description:
      "Understanding GraphQL fundamentals and how it differs from REST APIs.",
    date: "2025-03-26",
    category: "API",
    readTime: "10 min read",
    slug: "introduction-to-graphql",
    content: `
      <h2>What is GraphQL?</h2>
      <p>GraphQL is a query language for APIs that allows clients to request exactly the data they need.</p>
      
      <h2>GraphQL vs REST</h2>
      <p>Key differences between GraphQL and REST:</p>
      <ul>
        <li>GraphQL allows clients to specify exactly what data they need</li>
        <li>REST typically returns fixed data structures</li>
        <li>GraphQL reduces over-fetching and under-fetching</li>
      </ul>
      
      <h2>Basic GraphQL Schema</h2>
      <pre><code>
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
  posts: [Post!]!
}
      </code></pre>
      
      <h2>Example Queries</h2>
      <pre><code>
# Get user with specific fields
query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}

# Get multiple users
query {
  users {
    id
    name
  }
}
      </code></pre>
    `,
    image: "/assets/images/blogs/graphql-intro.jpg",
    tags: ["GraphQL", "API", "Web Development", "Backend"],
  },
  {
    id: "9",
    title: "Docker for Developers",
    description:
      "Learn how to containerize applications with Docker for consistent development and deployment.",
    date: "2025-03-25",
    category: "DevOps",
    readTime: "12 min read",
    slug: "docker-for-developers",
    content: `
      <h2>Introduction to Docker</h2>
      <p>Docker is a platform for developing, shipping, and running applications in containers.</p>
      
      <h2>Basic Docker Concepts</h2>
      <ul>
        <li>Container: A lightweight, standalone executable package</li>
        <li>Image: A template for creating containers</li>
        <li>Dockerfile: Instructions for building an image</li>
        <li>Docker Compose: Tool for defining multi-container applications</li>
      </ul>
      
      <h2>Creating a Dockerfile</h2>
      <pre><code>
# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
      </code></pre>
      
      <h2>Docker Compose Example</h2>
      <pre><code>
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: example
      </code></pre>
    `,
    image: "/assets/images/blogs/docker-dev.jpg",
    tags: ["Docker", "DevOps", "Containerization", "Development"],
  },
  {
    id: "10",
    title: "Testing in React with Jest and React Testing Library",
    description:
      "Comprehensive guide to testing React applications using Jest and React Testing Library.",
    date: "2025-03-24",
    category: "Testing",
    readTime: "14 min read",
    slug: "testing-react-jest-testing-library",
    content: `
      <h2>Why Test React Applications?</h2>
      <p>Testing ensures your application works as expected and helps catch bugs early in development.</p>
      
      <h2>Setting Up Testing Environment</h2>
      <pre><code>
// package.json
{
  "scripts": {
    "test": "react-scripts test"
  },
  "dependencies": {
    "@testing-library/react": "^13.0.0",
    "@testing-library/jest-dom": "^5.16.0",
    "jest": "^27.0.0"
  }
}
      </code></pre>
      
      <h2>Writing Component Tests</h2>
      <pre><code>
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click handler is called', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
      </code></pre>
      
      <h2>Testing Async Operations</h2>
      <pre><code>
test('loads and displays data', async () => {
  render(<DataComponent />);
  
  // Wait for data to load
  const data = await screen.findByText('Loaded Data');
  expect(data).toBeInTheDocument();
});
      </code></pre>
    `,
    image: "/assets/images/blogs/react-testing.jpg",
    tags: ["React", "Testing", "Jest", "Web Development"],
  },
  {
    id: "11",
    title: "State Management with Redux Toolkit",
    description:
      "Modern approach to state management in React applications using Redux Toolkit.",
    date: "2025-03-23",
    category: "React",
    readTime: "11 min read",
    slug: "state-management-redux-toolkit",
    content: `
      <h2>Introduction to Redux Toolkit</h2>
      <p>Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.</p>
      
      <h2>Setting Up Redux Toolkit</h2>
      <pre><code>
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});
      </code></pre>
      
      <h2>Using Redux in Components</h2>
      <pre><code>
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
      </code></pre>
      
      <h2>Async Actions with createAsyncThunk</h2>
      <pre><code>
const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://api.example.com/users');
    return response.json();
  }
);
      </code></pre>
    `,
    image: "/assets/images/blogs/redux-toolkit.jpg",
    tags: ["Redux", "React", "State Management", "JavaScript"],
  },
  {
    id: "12",
    title: "Web Accessibility (A11y) Best Practices",
    description:
      "Learn how to make your web applications accessible to all users, including those with disabilities.",
    date: "2025-03-22",
    category: "Accessibility",
    readTime: "13 min read",
    slug: "web-accessibility-best-practices",
    content: `
      <h2>Why Web Accessibility Matters</h2>
      <p>Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with the web.</p>
      
      <h2>Key Accessibility Principles</h2>
      <ul>
        <li>Perceivable: Information must be presentable to users in ways they can perceive</li>
        <li>Operable: User interface components and navigation must be operable</li>
        <li>Understandable: Information and operation of user interface must be understandable</li>
        <li>Robust: Content must be robust enough to be interpreted by a wide variety of user agents</li>
      </ul>
      
      <h2>HTML Semantics</h2>
      <pre><code>
<!-- Good semantic HTML -->
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>
      </code></pre>
      
      <h2>ARIA Attributes</h2>
      <pre><code>
<!-- Button with ARIA label -->
<button aria-label="Close dialog">×</button>

<!-- Form with ARIA describedby -->
<label for="username">Username:</label>
<input id="username" aria-describedby="username-help" type="text">
<span id="username-help">Enter your username</span>
      </code></pre>
    `,
    image: "/assets/images/blogs/web-accessibility.jpg",
    tags: ["Accessibility", "Web Development", "HTML", "Best Practices"],
  },
  {
    id: "13",
    title: "Building Progressive Web Apps (PWAs)",
    description:
      "Learn how to create Progressive Web Apps that provide a native app-like experience.",
    date: "2025-03-21",
    category: "Web Development",
    readTime: "15 min read",
    slug: "building-progressive-web-apps",
    content: `
      <h2>What are Progressive Web Apps?</h2>
      <p>PWAs are web applications that use modern web capabilities to deliver an app-like experience to users.</p>
      
      <h2>Key PWA Features</h2>
      <ul>
        <li>Installable on home screen</li>
        <li>Offline functionality</li>
        <li>Push notifications</li>
        <li>Fast loading times</li>
      </ul>
      
      <h2>Service Worker Implementation</h2>
      <pre><code>
// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
      </code></pre>
      
      <h2>Web App Manifest</h2>
      <pre><code>
// manifest.json
{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
      </code></pre>
    `,
    image: "/assets/images/blogs/pwa-guide.jpg",
    tags: ["PWA", "Web Development", "JavaScript", "Mobile"],
  },
  {
    id: "14",
    title: "CSS-in-JS: Styled Components and Emotion",
    description:
      "Explore modern CSS-in-JS solutions for styling React applications.",
    date: "2025-03-20",
    category: "CSS",
    readTime: "10 min read",
    slug: "css-in-js-styled-components-emotion",
    content: `
      <h2>Introduction to CSS-in-JS</h2>
      <p>CSS-in-JS allows you to write CSS directly in your JavaScript/TypeScript files, providing component-scoped styling.</p>
      
      <h2>Styled Components</h2>
      <pre><code>
import styled from 'styled-components';

const Button = styled.button\`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #45a049;
  }
\`;
      </code></pre>
      
      <h2>Emotion</h2>
      <pre><code>
import { css } from '@emotion/react';

const buttonStyles = css\`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #45a049;
  }
\`;
      </code></pre>
      
      <h2>Theme Provider</h2>
      <pre><code>
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#4CAF50',
    secondary: '#45a049',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
      </code></pre>
    `,
    image: "/assets/images/blogs/css-in-js.jpg",
    tags: ["CSS", "React", "Styled Components", "Emotion"],
  },
  {
    id: "15",
    title: "GraphQL with Apollo Client in React",
    description:
      "Learn how to integrate GraphQL into your React applications using Apollo Client.",
    date: "2025-03-19",
    category: "GraphQL",
    readTime: "12 min read",
    slug: "graphql-apollo-client-react",
    content: `
      <h2>Setting Up Apollo Client</h2>
      <p>Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.</p>
      
      <h2>Apollo Client Configuration</h2>
      <pre><code>
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>My Apollo App</h1>
      </div>
    </ApolloProvider>
  );
}
      </code></pre>
      
      <h2>Querying Data</h2>
      <pre><code>
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
\`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
      </code></pre>
      
      <h2>Mutations</h2>
      <pre><code>
import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql\`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
\`;

function AddUserForm() {
  const [addUser, { data }] = useMutation(ADD_USER);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      variables: {
        name: e.target.name.value,
        email: e.target.email.value
      }
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
}
      </code></pre>
    `,
    image: "/assets/images/blogs/apollo-graphql.jpg",
    tags: ["GraphQL", "Apollo", "React", "JavaScript"],
  },
  {
    id: "16",
    title: "Microservices Architecture with Node.js",
    description:
      "Learn how to design and implement microservices using Node.js and related technologies.",
    date: "2025-03-18",
    category: "Architecture",
    readTime: "14 min read",
    slug: "microservices-architecture-nodejs",
    content: `
      <h2>Understanding Microservices</h2>
      <p>Microservices architecture is an approach to software development where applications are built as a collection of small, independent services.</p>
      
      <h2>Key Microservices Concepts</h2>
      <ul>
        <li>Service Independence</li>
        <li>Decentralized Data Management</li>
        <li>API Gateway</li>
        <li>Service Discovery</li>
      </ul>
      
      <h2>Basic Microservice Structure</h2>
      <pre><code>
// user-service/index.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// User routes
app.get('/api/users', (req, res) => {
  // Return users
});

app.post('/api/users', (req, res) => {
  // Create user
});

app.listen(port, () => {
  console.log(\`User service running on port \${port}\`);
});
      </code></pre>
      
      <h2>API Gateway Implementation</h2>
      <pre><code>
// api-gateway/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

// Proxy to user service
app.use('/api/users', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true
}));

// Proxy to product service
app.use('/api/products', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(\`API Gateway running on port \${port}\`);
});
      </code></pre>
    `,
    image: "/assets/images/blogs/microservices.jpg",
    tags: ["Microservices", "Node.js", "Architecture", "Backend"],
  },
  {
    id: "17",
    title: "Web Security Best Practices",
    description:
      "Essential security practices for web applications to protect against common vulnerabilities.",
    date: "2025-03-17",
    category: "Security",
    readTime: "13 min read",
    slug: "web-security-best-practices",
    content: `
      <h2>Common Web Security Threats</h2>
      <p>Understanding and protecting against common web security vulnerabilities is crucial for application security.</p>
      
      <h2>Cross-Site Scripting (XSS)</h2>
      <p>Prevent XSS attacks by properly escaping user input:</p>
      <pre><code>
// Using a library like DOMPurify
import DOMPurify from 'dompurify';

const userInput = '<script>alert("XSS")</script>';
const sanitizedInput = DOMPurify.sanitize(userInput);
      </code></pre>
      
      <h2>SQL Injection</h2>
      <p>Use parameterized queries to prevent SQL injection:</p>
      <pre><code>
// Using an ORM like Sequelize
const User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

// Safe query
const user = await User.findOne({
  where: { username: username }
});
      </code></pre>
      
      <h2>CSRF Protection</h2>
      <pre><code>
// Using CSRF token middleware
app.use(csrf());

app.post('/api/data', (req, res) => {
  // CSRF token is automatically validated
  // Process request
});
      </code></pre>
      
      <h2>Content Security Policy</h2>
      <pre><code>
// Setting CSP headers
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );
  next();
});
      </code></pre>
    `,
    image: "/assets/images/blogs/web-security.jpg",
    tags: ["Security", "Web Development", "Best Practices", "XSS"],
  },
  {
    id: "18",
    title: "Building Real-time Applications with Socket.io",
    description:
      "Learn how to create real-time, bidirectional communication between web clients and servers using Socket.io.",
    date: "2025-03-16",
    category: "Real-time",
    readTime: "11 min read",
    slug: "building-realtime-applications-socketio",
    content: `
      <h2>Introduction to Socket.io</h2>
      <p>Socket.io enables real-time, bidirectional and event-based communication between web clients and servers.</p>
      
      <h2>Server Setup</h2>
      <pre><code>
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
      </code></pre>
      
      <h2>Client Implementation</h2>
      <pre><code>
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

// Send message
socket.emit('chat message', 'Hello!');

// Receive message
socket.on('chat message', (msg) => {
  console.log('Message received:', msg);
});
      </code></pre>
      
      <h2>Room Implementation</h2>
      <pre><code>
// Server-side
io.on('connection', (socket) => {
  socket.join('room1');
  
  socket.on('message', (msg) => {
    io.to('room1').emit('message', msg);
  });
});

// Client-side
socket.emit('join', 'room1');
socket.on('message', (msg) => {
  console.log('Room message:', msg);
});
      </code></pre>
    `,
    image: "/assets/images/blogs/socketio.jpg",
    tags: ["Socket.io", "Real-time", "WebSockets", "JavaScript"],
  },
  {
    id: "19",
    title: "Optimizing React Performance",
    description:
      "Advanced techniques for improving the performance of React applications.",
    date: "2025-03-15",
    category: "React",
    readTime: "12 min read",
    slug: "optimizing-react-performance",
    content: `
      <h2>React Performance Optimization</h2>
      <p>Learn techniques to improve the performance of your React applications.</p>
      
      <h2>Memoization with React.memo</h2>
      <pre><code>
const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});
      </code></pre>
      
      <h2>useMemo and useCallback</h2>
      <pre><code>
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Memoize expensive calculation
  const expensiveValue = useMemo(() => {
    return someExpensiveCalculation(count);
  }, [count]);
  
  // Memoize callback function
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
      </code></pre>
      
      <h2>Code Splitting</h2>
      <pre><code>
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
      </code></pre>
    `,
    image: "/assets/images/blogs/react-performance.jpg",
    tags: ["React", "Performance", "JavaScript", "Web Development"],
  },
  {
    id: "20",
    title: "TypeScript Advanced Types",
    description:
      "Deep dive into advanced TypeScript types and type manipulation techniques.",
    date: "2025-03-14",
    category: "TypeScript",
    readTime: "15 min read",
    slug: "typescript-advanced-types",
    content: `
      <h2>Advanced TypeScript Types</h2>
      <p>Explore powerful TypeScript features for type manipulation and advanced type definitions.</p>
      
      <h2>Conditional Types</h2>
      <pre><code>
type NonNullable<T> = T extends null | undefined ? never : T;

type StringOrNumber = string | number;
type StringOnly = StringOrNumber extends string ? StringOrNumber : never;
      </code></pre>
      
      <h2>Mapped Types</h2>
      <pre><code>
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
      </code></pre>
      
      <h2>Utility Types</h2>
      <pre><code>
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserCredentials = Pick<User, 'email' | 'password'>;

// Omit specific properties
type UserWithoutId = Omit<User, 'id'>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;
      </code></pre>
      
      <h2>Type Guards</h2>
      <pre><code>
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  }
}
      </code></pre>
    `,
    image: "/assets/images/blogs/typescript-advanced.jpg",
    tags: ["TypeScript", "JavaScript", "Programming", "Types"],
  },
  {
    id: "21",
    title: "Server-Side Rendering with Next.js",
    description:
      "Comprehensive guide to implementing server-side rendering in Next.js applications.",
    date: "2025-03-13",
    category: "Next.js",
    readTime: "13 min read",
    slug: "server-side-rendering-nextjs",
    content: `
      <h2>Understanding Server-Side Rendering</h2>
      <p>Server-side rendering (SSR) allows you to pre-render pages on the server, improving performance and SEO.</p>
      
      <h2>getServerSideProps</h2>
      <pre><code>
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(\`https://api.example.com/data\`);
  const data = await res.json();
  
  // Pass data to the page via props
  return {
    props: { data }
  };
}

function Page({ data }) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
      </code></pre>
      
      <h2>Static Generation with getStaticProps</h2>
      <pre><code>
export async function getStaticProps() {
  return {
    props: {
      data: {
        title: 'Static Page',
        content: 'This page is statically generated'
      }
    },
    revalidate: 60 // Revalidate every 60 seconds
  };
}
      </code></pre>
      
      <h2>Dynamic Routes</h2>
      <pre><code>
// pages/posts/[id].js
export async function getStaticPaths() {
  const posts = await fetchPosts();
  
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetchPost(params.id);
  
  return {
    props: { post }
  };
}
      </code></pre>
    `,
    image: "/assets/images/blogs/nextjs-ssr.jpg",
    tags: ["Next.js", "SSR", "React", "Web Development"],
  },
  {
    id: "22",
    title: "Building APIs with Express and TypeScript",
    description:
      "Learn how to create robust APIs using Express.js and TypeScript.",
    date: "2025-03-12",
    category: "Backend",
    readTime: "14 min read",
    slug: "building-apis-express-typescript",
    content: `
      <h2>Setting Up Express with TypeScript</h2>
      <p>Create type-safe APIs with Express and TypeScript.</p>
      
      <h2>Project Structure</h2>
      <pre><code>
// src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// src/controllers/userController.ts
import { Request, Response } from 'express';
import { User } from '../types';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};
      </code></pre>
      
      <h2>Middleware with TypeScript</h2>
      <pre><code>
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: {
    id: number;
    role: string;
  };
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded as { id: number; role: string };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
      </code></pre>
      
      <h2>Error Handling</h2>
      <pre><code>
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }
  
  return res.status(500).json({
    message: 'Internal server error'
  });
};
      </code></pre>
    `,
    image: "/assets/images/blogs/express-typescript.jpg",
    tags: ["Express", "TypeScript", "API", "Backend"],
  },
  {
    id: "23",
    title: "State Management with Zustand",
    description:
      "Learn how to manage application state using Zustand, a simple and flexible state management solution.",
    date: "2025-03-11",
    category: "State Management",
    readTime: "10 min read",
    slug: "state-management-zustand",
    content: `
      <h2>Introduction to Zustand</h2>
      <p>Zustand is a small, fast and scalable state management solution using simplified flux principles.</p>
      
      <h2>Creating a Store</h2>
      <pre><code>
import create from 'zustand';

interface BearStore {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
      </code></pre>
      
      <h2>Using the Store</h2>
      <pre><code>
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);
  
  return (
    <div>
      <h1>{bears} bears around here</h1>
      <button onClick={() => increase(1)}>Add a bear</button>
    </div>
  );
}
      </code></pre>
      
      <h2>Middleware</h2>
      <pre><code>
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }),
      {
        name: 'count-storage',
      }
    )
  )
);
      </code></pre>
    `,
    image: "/assets/images/blogs/zustand-state.jpg",
    tags: ["Zustand", "State Management", "React", "JavaScript"],
  },
];
