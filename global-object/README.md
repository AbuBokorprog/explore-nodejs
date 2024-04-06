# Module System

নোডের প্রত্যেকটা ডট জেএস(.js) ফাইল একেকটা মোডিউল।

## export/module.exports & import/require

একের অধিক ফাইলের সাথে সংযোগ স্থাপণ করার জন্য বা একটা ফাইলের ভ্যালু অন্য একটা ফাইলে ব্যবহার করার জন্য export & import করতে হয়।

### export/module.exports & import/require দু'ভাবে করা যায়ঃ

- ESM
- commonjs

#### ESM(ES6 Modules):

মনে করি দুইটা ফাইল আছে যেমনঃ- file1 file2। আমরা চাই file1 এর ভ্যালু file2-এ ব্যবহার করতে চাই। তাহলে আমাদের প্রথমে file1 থেকে যেই ভ্যালু টা চাই সেইটা export করতে হবে। এবং file2-এ import করতে হবে।

<!-- file1 -->

```javascript
const a = 6;
exports.default = a;
```

<!-- file2 -->

```javascript
import a = "./file1"
```

#### commonjs:

মনে করি দুইটা ফাইল আছে যেমনঃ- file1 file2। আমরা চাই file1 এর ভ্যালু file2-এ ব্যবহার করতে চাই। তাহলে আমাদের প্রথমে file1 থেকে যেই ভ্যালু টা চাই সেইটা export করতে হবে। এবং file2-এ import করতে হবে।

##### module.exports

commonjs-এ export করার জন্য module.exports = (variable name) ব্যবহার করতে হবে। module.exports = {variable name1, variable name2, variable name3, variable name4} use for multiple data exports.

##### require()

commonjs-এ import করার জন্য const a = require("./file1") ব্যবহার করতে হবে। const {a,b,c} = require("./file1") use for multiple data imports.

<!-- file1 -->

```javascript
const a = 6;
module.exports = a;
module.exports = { a, b, c };
```

<!-- file2 -->

```javascript
const a = require("./file1");
const { a, b, c } = require("./file1");
```
