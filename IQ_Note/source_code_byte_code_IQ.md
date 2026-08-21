# Source Code vs Byte Code vs Binary Code

Using example from file: `Chapter_01_Basics/01_HelloWorld.js`

```javascript
console.log("Hello World");
```

| Type | What it is | Human-readable? | Produced by | Used by | Example with attached file |
|---|---|---|---|---|---|
| **Source Code** | Original program written in a high-level language | ✅ Yes | Developer | Runtime/engine | `console.log("Hello World");` in `01_HelloWorld.js` |
| **Byte Code** | Intermediate low-level instructions for a virtual machine | ⚠️ Mostly no | JavaScript engine (V8 interpreter stage) | VM/interpreter | The JS line is converted internally into engine bytecode instructions before running |
| **Binary Code** | Native machine instructions (CPU opcodes, 0s and 1s) | ❌ No | JIT/native compiler | CPU | Hot code paths may be compiled by V8 to machine code and executed by the processor |

## Execution Flow (JavaScript)

`Source code (.js)` → `Parse` → `Bytecode (VM internal)` → `JIT native binary` → `CPU execution`

## Note for this specific file

In your file, the visible line is **source code**.
**Byte code** and **binary code** are generated internally at runtime by the JavaScript engine.
