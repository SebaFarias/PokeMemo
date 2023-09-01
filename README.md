# PokéMemo | Fanmade Pokémon Matching Cards Game

## Overview

Welcome to the Pokémon Matching Cards Game, a fan-made project designed to bring the fun and excitement of Pokémon into a classic matching cards experience! This game is built using Next.js, TRPC, TypeScript, Prisma, and NextAuth.js to create a visually appealing and interactive gameplay.

## Table of Contents

1. [Introduction](#introduction)
2. [Game Rules](#game-rules)
3. [Installation](#installation)
4. [Getting Started](#getting-started)
5. [Features](#features)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The Pokémon Matching Cards Game is a nostalgic journey for Pokémon fans, where you can test your memory and try to match pairs of Pokémon cards. Flip the cards one by one and find their matching pairs to clear the board.

## Game Rules

- The game board consists of a grid of face-down Pokémon cards.
- Players can flip any two cards at a time.
- If the flipped cards match, they stay face up, and the player earns points.
- If the flipped cards do not match, they flip back face down.
- The game continues until all card pairs are matched.
- The objective is to clear the board with as few moves as possible.

## Installation

To set up the Pokémon Matching Cards Game on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/sebaFarias/PokeMemo.git
```
Change directory to the cloned repository:
```bash
cd pokemon-matching-cards
```
Install the required dependencies:
```bash
yarn install
```
Set up the database using Prisma:
```bash
npx prisma migrate dev
```
Build the game:
```bash
yarn run build
```
Start the development server:
```bash
yarn run dev
```
Open the provided URL in your preferred browser to play the game.
Getting Started
To get started with the Pokémon Matching Cards Game, follow these steps:

Choose the difficulty level at the start of the game.
Click on any card to reveal its Pokémon.
Click on another card to find its matching Pokémon.
If the cards match, they will stay face up. Otherwise, they will flip back.
Continue flipping cards until all pairs are matched, and the board is cleared.
Features
Stunning graphics and Pokémon-themed UI.
Multiple difficulty levels to challenge your memory skills.
Pokémon cards with unique designs and art from various generations.
Engaging sound effects and background music to enhance the gaming experience.
Keeps track of the player's moves and time taken to complete the game.
Technologies Used
Next.js: For building the web application with server-side rendering and routing.
TRPC: For building type-safe APIs with TypeScript.
TypeScript: For adding type safety to the project.
Prisma: For database management and ORM.
NextAuth.js: For handling authentication in the application.
Contributing
We welcome contributions from fellow Pokémon fans and developers! If you have suggestions, bug fixes, or new features to add, please open a pull request. Together, we can make this game even better!

License
The Pokémon Matching Cards Game is distributed under the MIT License. You are free to use, modify, and distribute the code as per the terms of this license.