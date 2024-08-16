## Product Pulse

[Live link](https://product-pulse-fw.vercel.app/)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (version 14.x or later)
-   [npm](https://www.npmjs.com/) (version 6.x or later) or [yarn](https://yarnpkg.com/) (version 1.22.x or later)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/MAAB-FW/product-pulse-client.git
    cd product-pulse-client
    ```

2. **Install the dependencies:**

    Using npm:

    ```sh
    npm install
    ```

    Or using yarn:

    ```sh
    yarn install
    ```

3. **Setup environmental variables:**
   Create a `.env.local` file in the root of the project and add the following environment variables with your firebase api key(***):

```VITE_REACT_APIKEY=***************
VITE_REACT_AUTHDOMAIN=***************
VITE_REACT_PROJECTID=***************
VITE_REACT_STORAGEBUCKET=***************
VITE_REACT_MESSAGINGSENDERID=***************
VITE_REACT_APPID=***************

VITE_BASE_URL=https://product-pulse-fw-server.vercel.app
```

### Running the Project

1. **Start the development server:**

    Using npm:

    ```sh
    npm run dev
    ```

    Or using yarn:

    ```sh
    yarn dev
    ```

2. **Open your browser and visit:**

    ```sh
    http://localhost:5173
    ```

### Building for Production

1. **Build the project:**

    Using npm:

    ```sh
    npm run build
    ```

    Or using yarn:

    ```sh
    yarn build
    ```
