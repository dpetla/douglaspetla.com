---
title: Compiling...
subTitle: An Overview of the Angular Compiler
date: "2019-09-02T22:40:32.169Z"
description: A brief explanation about how the angular compiler works.
---

Generally speaking, Angular applications are basically composed of components and their HTML templates. The code created for Angular applications cannot run directly in the browser and requires a compilation to transform this Angular specific code to a very optimized TypeScript code by the Angular compiler, and then to Javascript (that the browser can understand) by the TypeScript compiler. Even though there is more than one compiler involved the Angular build process in this article I will only be talking about the Angular compiler.

#### Angular templates

A component defines a class with its logic and data, and it is associated with an HTML template. The component class, the template, the stylesheet, and metadata are brought all together using the `@Component()` decorator.

An Angular template is the part of the component that is visually presented to the user and tells Angular how to render the component. It looks like a simple HTML file, but it contains [Angular template syntax](https://angular.io/guide/template-syntax) enabling you to connect your view to you component data and modify how the HTML is rendered based on program logic.

In summary, we use a special syntax to create a specific hierarchy of DOM elements that are connected to data.

#### Compiler

To make this 'magic' possible Angular uses its compiler to do the trick. The compiler is a service that creates [ComponentFactorys](https://angular.io/api/core/ComponentFactory), which essentially is a class that can be used to create and render a component instance dynamically.

In the process of creating this ComponentFactory, the component is parsed to generate a very optimized TypeScript code (if using AOT, and JavaScript code if using JIT) that mirrors the original DOM structure of that template.

The transformation the compiler performs to generate the ComponentFactorys starts by getting the component metadata (decorators), templates and stylesheets and then parsing through the code. One step is converting your code to tokens by executing a function that performs a _Lexical Analysis_. Something like this...

```javascript
tokenize('const sum = a + b;')

[
{ lexeme: 'const', type: 'keyword' },
{ lexeme: 'sum', type: 'identifier' },
{ lexeme: '=', type: 'operator' },
...
}
```

And then, performing a _Syntax Analysis_ parsing the result o the previous step and generating an _Abstract Syntax Tree_ (AST). So If you have this code below...

```javascript
a = 1 + 5
b = a * 3
c = a + b
```

Your AST should look more or less like this...

![AST chart example](https://anandsekar.github.io/assets/images/javacc/ast.jpg)

The results of those steps are used to help generate the `ComponentFactory`. A `ComponentFactory` is created for each component with a function (with name prefixed with 'view', i.e. `viewComponentName`) that returns a helper function (called `viewDef`) that returns an object. This object contains the HTML element definitions (that came from your component's AST) that can be used to instantiate HTML elements.

To reduce the amount of code generated, the compiler creates only one `viewDefinition` per component class that is created. Each instance of that element is created based on the same `viewDefinition`, which holds all that is shared across all the instances but has its own `viewData` that contains data related to that unique instance, thus reducing memory usage and improving performance.

In this article, I only scratched the surface of the Angular compiler. If you would like to dig deeper into this topic, I recommend checking the additional resources below.

- [The Angular Compiler 4.0](https://www.youtube.com/watch?v=RXYjPYkFwy4) by [Tobias Bosch](https://twitter.com/tbosch1009)

- [Mad science with the Angular Compiler](https://www.youtube.com/watch?v=tBV4IQwPssU) by [Minko Gachev](https://twitter.com/mgechev).
- [Gentle introduction into compilers. Part 1: Lexical analysis and Scanner](https://blog.angularindepth.com/gentle-introduction-into-compilers-part-1-lexical-analysis-and-scanner-733246be6738) by [Max Koretskyi](https://twitter.com/maxkoretskyi)
- [A Deep, Deep, Deep, Deep, Deep Dive into the Angular Compiler](https://blog.angularindepth.com/a-deep-deep-deep-deep-deep-dive-into-the-angular-compiler-5379171ffb7a) by [Uri Shaked](https://twitter.com/UriShaked)
