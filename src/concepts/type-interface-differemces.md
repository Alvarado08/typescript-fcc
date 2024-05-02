# Key Differences

- Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object
- Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, Ts merges their definitions. Type aliases can't be merged this way
- Interfaces can be implemented by classes while type aliases cannot
- Type aliases can use computed properties while interfaces cannot
