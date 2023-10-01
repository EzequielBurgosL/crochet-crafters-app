# Crochet E-commerce - Idea and Project Description

## Project Overview

Company name: CrochetCrafters

Description: CrochetCrafters is an e-commerce platform dedicated to bringing together crochet enthusiasts, providing them with a space to buy and sell crochet products, patterns, and accessories. The platform aims to join both customers looking for unique crochet creations and crafters wanting to showcase and market their handmade items.

Mission: Our mission at CrochetCrafters is to foster a thriving community of crochet enthusiasts by providing a seamless online marketplace where they can discover, share, and purchase exceptional crochet products and patterns.

### Entities:

User: Represents a registered user of CrochetCrafters. Each user can be either a customer or a crochet seller. User attributes include username, email, password, and contact information.

Product: Represents a crochet item listed by a seller for sale. Product details include title, description, price, seller information, and images.

Order: Represents a customer's purchase order, including the products selected, quantities, total cost, and order status.

### Value Objects:

Review: A value object attached to an order, consisting of a rating (1-5 stars) and optional comments provided by the customer.

CrochetPattern: A value object representing a digital crochet pattern. It includes the title, description, and downloadable file attachments.

### Domain Rules:

Product Title Limit: The title of a crochet product cannot exceed 60 characters.
Image Limit: Each crochet product can have a maximum of 5 images associated with it.
User Information: Usernames and customer names must be between 3 and 25 characters long.
Spanish Mobile Format: Phone numbers must follow the Spanish mobile format.

### Conclusion

CrochetCrafters aspires to become a go-to platform for crochet enthusiasts, offering a wide variety of crochet products and patterns while nurturing a supportive community of crafters. By following Domain-Driven Design (DDD) principles, we aim to create a robust and scalable e-commerce solution for the crochet community.

Let's crochet together, one stitch at a time! 🧶
