# Gotchas

By default, Ts treats files as scripts and not modules. It's basically a global scope. This is why you cannot use the same variable in different files.

We can override this default behavior in 2 ways:

- export and import variables
- tsconfig

```json
/* Bundler mode */
"moduleDetection": "force",
```

Ts doesn't handle js files by default. To override this behavior, edit tsconfig:

```json
/* Linting */
"allowJs": true,
```

This approach however limits ts functionalities and overall purpose
