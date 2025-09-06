// Utility to load markdown content from files
// This is a simple implementation that works with Create React App

// For now, we'll use a simple approach where we define the content in this file
// In a more advanced setup, you could use webpack's raw-loader or similar

const markdownFiles = {
    'building-scalable-image-processing-systems': `# Building Scalable Image Processing Systems

In today's digital world, image processing has become a critical component of many applications. From social media platforms to e-commerce websites, the ability to process, transform, and serve images efficiently can make or break user experience.

## The Challenge

When I was working at Udaan, we faced the challenge of processing millions of product images daily. Our system needed to:
- Resize images to multiple dimensions
- Apply various filters and transformations
- Serve images through a global CDN
- Maintain high availability and performance

## The Solution

We built PerceptPixel, a high-performance image processing platform that could handle these requirements. Here's how we approached it:

### 1. Microservices Architecture

We designed the system using microservices to ensure scalability and maintainability.

### 2. Caching Strategy

Implementing a multi-layer caching strategy was crucial:
- **L1 Cache**: In-memory cache for frequently accessed images
- **L2 Cache**: Redis cache for processed images
- **L3 Cache**: CDN cache for global distribution

## Performance Results

The results were impressive:
- **99.9% uptime** achieved
- **50% reduction** in processing time
- **$60k annual savings** by replacing third-party services
- **Sub-second response times** for cached images

## Key Takeaways

1. **Design for scale from day one** - Don't wait until you have performance issues
2. **Cache everything possible** - Multiple cache layers can dramatically improve performance
3. **Use queues for heavy processing** - Keep your API responsive
4. **Monitor everything** - Comprehensive monitoring helps identify bottlenecks early

## Conclusion

Building scalable image processing systems requires careful planning, the right architecture, and continuous optimization. The key is to start simple and scale incrementally while keeping performance and reliability in mind.`,

    'understanding-microservices-architecture': `# Understanding Microservices Architecture

Microservices have revolutionized how we build and deploy applications. But with great power comes great responsibility - and complexity.

## What are Microservices?

Microservices are an architectural approach where applications are built as a collection of loosely coupled, independently deployable services. Each service is responsible for a specific business capability.

## Benefits of Microservices

### 1. Independent Deployment
Each service can be deployed independently, allowing for faster releases and reduced risk.

### 2. Technology Diversity
Different services can use different technologies best suited for their specific needs.

### 3. Scalability
Services can be scaled independently based on their specific requirements.

### 4. Fault Isolation
If one service fails, it doesn't bring down the entire application.

## Common Patterns

### 1. API Gateway Pattern
A single entry point for all client requests.

### 2. Service Discovery
Services need to find and communicate with each other.

### 3. Circuit Breaker Pattern
Prevent cascading failures.

## Best Practices

1. **Start with a monolith** - Don't over-engineer from the beginning
2. **Design for failure** - Assume everything will fail
3. **Implement proper monitoring** - You can't manage what you can't measure
4. **Use containers** - Docker makes microservices deployment easier
5. **Implement proper testing** - Unit, integration, and contract tests

## Conclusion

Microservices are powerful but come with complexity. The key is to understand when and how to use them effectively. Start simple, learn from your mistakes, and scale gradually.`,

    'ai-ml-in-production-lessons-learned': `# AI/ML in Production: Lessons Learned

Deploying machine learning models to production is where the real challenge begins. Here are the hard-earned lessons from my experience building ML systems at scale.

## The Reality of ML in Production

Building ML models is only 20% of the work. The remaining 80% is about:
- Data pipeline reliability
- Model monitoring and drift detection
- A/B testing and experimentation
- Performance optimization
- Error handling and fallbacks

## Lesson 1: Data Quality is Everything

Your model is only as good as your data. In production, data quality issues can silently degrade model performance.

## Lesson 2: Model Monitoring is Critical

Models degrade over time. You need comprehensive monitoring to detect when this happens.

## Lesson 3: A/B Testing is Essential

You can't improve what you don't measure. A/B testing helps you understand the real impact of your models.

## Conclusion

ML in production is challenging but rewarding. The key is to start simple, monitor everything, and learn from your mistakes.`
};

// Function to get markdown content by slug
export const getMarkdownContent = (slug) => {
    return markdownFiles[slug] || `# Content Not Found\n\nSorry, the content for this blog post could not be loaded.`;
};

// Function to get all available slugs
export const getAvailableSlugs = () => {
    return Object.keys(markdownFiles);
};
