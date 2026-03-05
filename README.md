# AI Movie Insight Builder

## Overview

AI Movie Insight Builder is a full-stack web application where users can enter an **IMDb Movie ID** (for example `tt0133093`).
The application fetches movie details, retrieves audience reviews, and generates an **AI-powered sentiment summary** of audience reactions.

The goal of this project is to combine **movie APIs, full-stack development, and AI analysis** into a simple, user-friendly interface.
# Features

 1. Movie Search

Users can enter an **IMDb Movie ID** to fetch movie details.

 2. Movie Information

The application displays:

* Movie title
* Poster
* Release year
* IMDb rating
* Cast list
* Plot summary

 3. Audience Reviews

The system retrieves audience reviews using the **TMDB API**.

 4. AI Sentiment Analysis

The reviews are analyzed using an **AI model** to generate:

* A short audience sentiment summary
* Overall sentiment classification (Positive / Mixed / Negative)

 5. Error Handling

The system handles:

* Invalid IMDb IDs
* Missing reviews
* AI API quota limits

Fallback responses ensure the application still works smoothly.
# Tech Stack

## Frontend

* **Next.js**
* **React**
* **Tailwind CSS**

## Backend

* **Next.js API Routes**

## APIs Used

* **OMDb API** – for movie metadata
* **TMDB API** – for audience reviews
* **OpenAI API** – for AI sentiment analysis
# Project Architecture

User enters IMDb ID
↓
Next.js API Route processes request
↓
Fetch movie data from **OMDb API**
↓
Convert IMDb ID → TMDB ID
↓
Fetch reviews from **TMDB API**
↓
Send reviews to **AI model**
↓
Return summary + sentiment to frontend

# Setup Instructions

1. Clone the repository

bash
git clone https://github.com/yourusername/ai-movie-insight-builder.git
cd ai-movie-insight-builder


2. Install dependencies

bash
npm install


3. Add environment variables

Create a `.env.local` file in the project root.

OMDB_API_KEY=your_omdb_api_key
TMDB_API_KEY=your_tmdb_api_key
OPENAI_API_KEY=your_openai_api_key

4. Run the development server
:-bash
npm run dev
Open the app in your browser:
http://localhost:3000
# Deployment
The application can be deployed easily using **Vercel**.
Steps:
1. Push project to GitHub
2. Import repository into Vercel
3. Add environment variables
4. Deploy
# Assumptions
* Users provide valid IMDb movie IDs.
* TMDB may not always provide reviews for every movie.
* In cases where reviews are unavailable, fallback review text is used to ensure AI analysis continues to function.
* If the AI API quota is exceeded, a fallback sentiment summary is provided.
# Future Improvements

* Search movies by title instead of IMDb ID
* Add pagination for reviews
* Improve UI animations and responsiveness
* Store review sentiment history
* Add charts for audience sentiment distribution
# Author

Abhishek Pandey
