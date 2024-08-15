# Shared ORM Library

## Overview

This library contains the shared ORM entities and database connection configurations used across multiple services. It manages the database schema, provides entities, and enables database access for the backend application.

## Setup

### Prerequisites

- **Node.js** (v14 or above)
- **TypeScript**
- **PostgreSQL** 

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/opengits/node-sharedorm.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Database Variables:**

   Ensure details are correct in `src/index.ts` file in the root directory or modify the following variables:

   ```bash
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_db_username
   DATABASE_PASSWORD=your_db_password
   DATABASE_NAME=my-account
   ```

4. **Build the Project:**

   ```bash
   npm run build
   ```

5. **Run Migrations (if applicable):**

   ```bash
   npm run typeorm migration:run
   ```

---
