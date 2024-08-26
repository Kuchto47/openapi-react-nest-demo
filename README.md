# OpenAPI Generator(s) demo

This project is meant to demonstrate possible approach of leveraging OpenAPI schemas (OAS) to generate code.

## Generation of Frontend/client code

If we assume we have OAS available, it is prety simple to generate code for client application, as showcased in the frontend project. With little one-time work needed to wire up eg. authentication as a middleware to generated API code, we are ready to leverage code generation onwards.

## Generation of Backend/server code

Since this demo is focused on NestJS backends, it is at the time of creating this **not** possible to generate NestJS API with little to no effort, because nestjs does not provide tools to do so and neither does openapi-generators project.
NestJS itself provides tools to generate OAS out of existing API code, which is exactly what i am showcasing in this demo.

## Workflow of such setup

Given technical limits of this solution, ideal workflow is to implement BE endpoint, annotate it with nestjs/swagger decorators and on frontend generate code and models based on generated OAS from BE code.
