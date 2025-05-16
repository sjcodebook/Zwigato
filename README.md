# Zwigato

## Project Demo Video
[![Watch the video](https://www.loom.com/share/c062fe5605b64d76ab71e61172c4b989?sid=b9361847-d93a-4851-a296-afac8d86b030)](https://www.loom.com/share/c062fe5605b64d76ab71e61172c4b989?sid=b9361847-d93a-4851-a296-afac8d86b030)


🍔🥗🍕 Your Ultimate Food Delivery Experience 🍕🥗🍔

## Introduction
**Zwigato** is a modern web application that connects hungry customers with their favorite restaurants. Browse restaurant options and save your favorites for quick access.

## Features
- Restaurant Discovery 🔍
- Responsive Design 📱
- MongoDB Integration 🗄️
- Zustand State Management 🧠

## Setup
Do the following steps after cloning this repository:

- Install Dependencies
```bash
npm install
```

- Run Development Server
```bash
npm run dev
```

- Build for Production
```bash
npm run build
```

- Start Production Server
```bash
npm start
```

- Visit app on your local machine
```bash
App URL: http://localhost:3000/
```

## Architecture

### Data Models
Our application uses MongoDB with Mongoose for data modeling:
- Restaurant: Restaurant details including name, image, categories, etc.

### State Management
We use Zustand for global state management with the following stores:
- Cart Store: Manages selected restaurants

### Component Structure
```
<Layout>
  <Header>
    <Navigation>
  <MainContent>
    <RestaurantGrid>
      <RestaurantCard>
    <Cart>
      <CartItem>
  <Footer>
```

## Technologies Used
- Next.js
- TypeScript
- MongoDB/Mongoose
- Zustand
- Tailwind CSS

