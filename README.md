# vitest-pnp

Demonstrating coverage issues with yarn pnp and vitest

```angular2html
 ✓ tests/add.test.js (1 test) 2ms
   ✓ add

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  09:30:52
   Duration  717ms (transform 128ms, setup 0ms, collect 123ms, tests 2ms, environment 0ms, prepare 149ms)

 % Coverage report from istanbul
---------------------------------------------------------|---------|----------|---------|---------|-------------------
File                                                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------------------------------------|---------|----------|---------|---------|-------------------
All files                                                |      50 |      100 |      50 |      50 |
 .yarn/__virtual__/add-virtual-7c4b357c0a/1/packages/add |     100 |      100 |     100 |     100 |
  add.js                                                 |     100 |      100 |     100 |     100 |
 packages/add                                            |       0 |      100 |       0 |       0 |
  add.js                                                 |       0 |      100 |       0 |       0 | 1
---------------------------------------------------------|---------|----------|---------|---------|-------------------
```