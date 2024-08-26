# OpenAPI Generator(s) demo

This project is meant to demonstrate possible approach of leveraging OpenAPI schemas (OAS) to generate code.

## Generation of Frontend/client code

If we assume we have OAS available, it is pretty simple to generate code for client application, as showcased in the frontend project. With little one-time work needed to wire up eg. authentication as a middleware to generated API code, we are ready to leverage code generation onwards.

## Generation of Backend/server code

Since this demo is focused on NestJS backends, it is at the time of creating this **not** possible to generate NestJS API with little to no effort, because NestJS does not provide tools to do so and neither does openapi-generators project.
NestJS itself provides tools to generate OAS out of existing API code, which is exactly what I am showcasing in this demo.

### What options do I have if I want to generate nestjs code nevertheless?

#### Using nodejs-express-server Generator
The **nodejs-express-server** generator is designed to generate an Express server from an OpenAPI specification. While you can use this and then integrate it with NestJS, it might not be the best approach. The generated code would be tightly coupled with Express, and you'd need to spend additional effort to integrate it with NestJS, which might defeat the purpose of using NestJS's modularity and structure.

#### Using nestjs-openapi-tools or Similar Generators
- There are tools like nestjs-openapi-tools or nestjs/swagger that allow you to work with OpenAPI in the context of NestJS. These tools are more suitable because they are built with NestJS in mind, allowing for better integration with its features.
- For instance, nestjs/swagger is a popular package that integrates Swagger/OpenAPI with NestJS. However, it is primarily used to generate OpenAPI documentation from existing NestJS code, not the other way around.
- There is no out-of-the-box NestJS-specific generator that converts an OpenAPI schema into NestJS controllers and services. You might need to write some custom scripts or manually create the controllers and services based on your OpenAPI spec.

#### Using OpenAPI Generator with TypeScript NestJS Template
A more streamlined approach might be using the OpenAPI Generator with a TypeScript-based template. You can use a custom template for generating NestJS-compatible services and models. This approach might still require some manual adjustments but can significantly speed up the process.

## Workflow of this setup

Given technical limits of this solution, ideal workflow is to
1) implement BE endpoint,
2) annotate it with nestjs/swagger decorators and
3) on frontend generate code and models based on generated OAS from BE code.
