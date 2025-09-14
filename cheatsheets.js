// Comprehensive Cheat Sheet Data for Multiple Programming Languages
const cheatSheets = {
    python: {
        name: "Python",
        description: "A high-level, interpreted programming language known for its simplicity and readability. Perfect for beginners and widely used in web development, data science, AI, and automation.",
        sections: {
            "Basic Syntax": {
                "Hello World": {
                    code: `print("Hello, World!")`,
                    description: "Basic output statement"
                },
                "Comments": {
                    code: `# Single line comment\n\n"""\nMulti-line comment\nor docstring\n"""`
                },
                "Variables": {
                    code: `name = "John"\nage = 25\nheight = 5.9\nis_student = True`
                },
                "Data Types": {
                    code: `# Numbers\ninteger = 42\nfloat_num = 3.14\n\n# Strings\ntext = "Hello"\n\n# Boolean\nis_true = True\n\n# Lists\nfruits = ["apple", "banana", "orange"]\n\n# Dictionaries\nperson = {"name": "John", "age": 25}\n\n# Tuples\ncoordinates = (10, 20)`
                }
            },
            "Control Structures": {
                "If-Else": {
                    code: `if age >= 18:\n    print("Adult")\nelif age >= 13:\n    print("Teenager")\nelse:\n    print("Child")`
                },
                "For Loop": {
                    code: `# Loop through list\nfor fruit in fruits:\n    print(fruit)\n\n# Loop with range\nfor i in range(5):\n    print(i)\n\n# Loop with enumerate\nfor index, value in enumerate(fruits):\n    print(f"{index}: {value}")`
                },
                "While Loop": {
                    code: `count = 0\nwhile count < 5:\n    print(count)\n    count += 1`
                }
            },
            "Functions": {
                "Basic Function": {
                    code: `def greet(name):\n    return f"Hello, {name}!"\n\n# Call function\nmessage = greet("Alice")`
                },
                "Function with Default Parameters": {
                    code: `def calculate_area(length, width=1):\n    return length * width\n\narea = calculate_area(5, 3)  # 15\narea = calculate_area(5)     # 5`
                },
                "Lambda Functions": {
                    code: `# Lambda function\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# With map\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x ** 2, numbers))`
                }
            },
            "OOP Concepts": {
                "Class Definition": {
                    code: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"Hi, I'm {self.name} and I'm {self.age} years old"\n\n# Create instance\nperson = Person("Alice", 30)\nprint(person.introduce())`
                },
                "Inheritance": {
                    code: `class Student(Person):\n    def __init__(self, name, age, student_id):\n        super().__init__(name, age)\n        self.student_id = student_id\n    \n    def study(self):\n        return f"{self.name} is studying"\n\nstudent = Student("Bob", 20, "S123")\nprint(student.introduce())\nprint(student.study())`
                }
            },
            "Common Built-in Methods": {
                "String Methods": {
                    code: `text = "Hello World"\nprint(text.lower())      # hello world\nprint(text.upper())      # HELLO WORLD\nprint(text.split())      # ['Hello', 'World']\nprint(text.replace("World", "Python"))  # Hello Python\nprint(len(text))         # 11`
                },
                "List Methods": {
                    code: `fruits = ["apple", "banana"]\nfruits.append("orange")     # Add to end\nfruits.insert(0, "grape")   # Insert at index\nfruits.remove("banana")     # Remove by value\npopped = fruits.pop()       # Remove and return last\nfruits.sort()               # Sort in place\nprint(len(fruits))          # Get length`
                },
                "Dictionary Methods": {
                    code: `person = {"name": "John", "age": 25}\nprint(person.keys())        # dict_keys(['name', 'age'])\nprint(person.values())      # dict_values(['John', 25])\nprint(person.get("name"))   # John\nperson.update({"city": "NYC"})  # Add/update\ndel person["age"]           # Delete key`
                }
            },
            "File Handling": {
                "Reading Files": {
                    code: `# Read entire file\nwith open("file.txt", "r") as file:\n    content = file.read()\n\n# Read line by line\nwith open("file.txt", "r") as file:\n    for line in file:\n        print(line.strip())`
                },
                "Writing Files": {
                    code: `# Write to file\nwith open("output.txt", "w") as file:\n    file.write("Hello, World!")\n\n# Append to file\nwith open("output.txt", "a") as file:\n    file.write("\nNew line")`
                }
            }
        }
    },
    
    javascript: {
        name: "JavaScript",
        description: "A versatile programming language primarily used for web development. Runs in browsers and servers (Node.js), enabling interactive websites and full-stack applications.",
        sections: {
            "Basic Syntax": {
                "Hello World": {
                    code: `console.log("Hello, World!");\n\n// In HTML\nalert("Hello, World!");`,
                    description: "Basic output statements"
                },
                "Comments": {
                    code: `// Single line comment\n\n/*\nMulti-line comment\ncan span multiple lines\n*/`
                },
                "Variables": {
                    code: `// ES6+ (preferred)\nconst name = "John";        // Cannot be reassigned\nlet age = 25;              // Can be reassigned\n\n// Old way (avoid)\nvar height = 5.9;`
                },
                "Data Types": {
                    code: `// Primitives\nconst number = 42;\nconst string = "Hello";\nconst boolean = true;\nconst nullValue = null;\nconst undefinedValue = undefined;\n\n// Objects\nconst array = [1, 2, 3];\nconst object = { name: "John", age: 25 };\nconst func = function() { return "Hello"; };`
                }
            },
            "Control Structures": {
                "If-Else": {
                    code: `if (age >= 18) {\n    console.log("Adult");\n} else if (age >= 13) {\n    console.log("Teenager");\n} else {\n    console.log("Child");\n}\n\n// Ternary operator\nconst status = age >= 18 ? "Adult" : "Minor";`
                },
                "For Loops": {
                    code: `// Traditional for loop\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\n// For...of (arrays)\nconst fruits = ["apple", "banana", "orange"];\nfor (const fruit of fruits) {\n    console.log(fruit);\n}\n\n// For...in (objects)\nconst person = { name: "John", age: 25 };\nfor (const key in person) {\n    console.log(key, person[key]);\n}`
                },
                "While Loop": {
                    code: `let count = 0;\nwhile (count < 5) {\n    console.log(count);\n    count++;\n}\n\n// Do-while\ndo {\n    console.log(count);\n    count++;\n} while (count < 10);`
                },
                "Switch Statement": {
                    code: `const day = "Monday";\nswitch (day) {\n    case "Monday":\n        console.log("Start of work week");\n        break;\n    case "Friday":\n        console.log("TGIF!");\n        break;\n    default:\n        console.log("Regular day");\n}`
                }
            },
            "Functions": {
                "Function Declaration": {
                    code: `function greet(name) {\n    return \`Hello, \${name}!\`;\n}\n\nconst message = greet("Alice");`
                },
                "Arrow Functions": {
                    code: `// Arrow function\nconst greet = (name) => {\n    return \`Hello, \${name}!\`;\n};\n\n// Shorter syntax\nconst greet2 = name => \`Hello, \${name}!\`;\n\n// With multiple parameters\nconst add = (a, b) => a + b;`
                },
                "Higher-Order Functions": {
                    code: `const numbers = [1, 2, 3, 4, 5];\n\n// Map\nconst doubled = numbers.map(n => n * 2);\n\n// Filter\nconst evens = numbers.filter(n => n % 2 === 0);\n\n// Reduce\nconst sum = numbers.reduce((acc, n) => acc + n, 0);`
                }
            },
            "OOP Concepts": {
                "Classes (ES6+)": {
                    code: `class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    introduce() {\n        return \`Hi, I'm \${this.name} and I'm \${this.age} years old\`;\n    }\n}\n\nconst person = new Person("Alice", 30);\nconsole.log(person.introduce());`
                },
                "Inheritance": {
                    code: `class Student extends Person {\n    constructor(name, age, studentId) {\n        super(name, age);\n        this.studentId = studentId;\n    }\n    \n    study() {\n        return \`\${this.name} is studying\`;\n    }\n}\n\nconst student = new Student("Bob", 20, "S123");`
                }
            },
            "Common Built-in Methods": {
                "Array Methods": {
                    code: `const arr = [1, 2, 3, 4, 5];\n\narr.push(6);              // Add to end\narr.pop();                // Remove from end\narr.unshift(0);           // Add to beginning\narr.shift();              // Remove from beginning\narr.splice(2, 1);         // Remove at index\nconst found = arr.find(x => x > 3);\nconst index = arr.indexOf(3);`
                },
                "String Methods": {
                    code: `const text = "Hello World";\n\ntext.toLowerCase();       // "hello world"\ntext.toUpperCase();       // "HELLO WORLD"\ntext.split(" ");          // ["Hello", "World"]\ntext.replace("World", "JS"); // "Hello JS"\ntext.includes("Hello");   // true\ntext.slice(0, 5);         // "Hello"`
                },
                "Object Methods": {
                    code: `const obj = { name: "John", age: 25 };\n\nObject.keys(obj);         // ["name", "age"]\nObject.values(obj);       // ["John", 25]\nObject.entries(obj);      // [["name", "John"], ["age", 25]]\nObject.assign({}, obj);   // Shallow copy\ndelete obj.age;           // Remove property`
                }
            },
            "Async Programming": {
                "Promises": {
                    code: `// Creating a promise\nconst fetchData = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve("Data loaded");\n        }, 1000);\n    });\n};\n\n// Using promises\nfetchData()\n    .then(data => console.log(data))\n    .catch(error => console.error(error));`
                },
                "Async/Await": {
                    code: `// Async function\nasync function loadData() {\n    try {\n        const data = await fetchData();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n}\n\nloadData();`
                }
            }
        }
    },
    
    java: {
        name: "Java",
        description: "A robust, object-oriented programming language known for 'write once, run anywhere' philosophy. Widely used in enterprise applications, Android development, and large-scale systems.",
        sections: {
            "Basic Syntax": {
                "Hello World": {
                    code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
                    description: "Basic Java program structure"
                },
                "Comments": {
                    code: `// Single line comment\n\n/*\n * Multi-line comment\n * can span multiple lines\n */\n\n/**\n * JavaDoc comment\n * for documentation\n */`
                },
                "Variables": {
                    code: `// Primitive types\nint age = 25;\ndouble height = 5.9;\nboolean isStudent = true;\nchar grade = 'A';\n\n// Reference types\nString name = "John";\nint[] numbers = {1, 2, 3, 4, 5};`
                }
            },
            "Control Structures": {
                "If-Else": {
                    code: `if (age >= 18) {\n    System.out.println("Adult");\n} else if (age >= 13) {\n    System.out.println("Teenager");\n} else {\n    System.out.println("Child");\n}`
                },
                "For Loops": {
                    code: `// Traditional for loop\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\n// Enhanced for loop (for-each)\nint[] numbers = {1, 2, 3, 4, 5};\nfor (int num : numbers) {\n    System.out.println(num);\n}`
                }
            },
            "Methods": {
                "Method Declaration": {
                    code: `public class Calculator {\n    // Static method\n    public static int add(int a, int b) {\n        return a + b;\n    }\n    \n    // Instance method\n    public double multiply(double x, double y) {\n        return x * y;\n    }\n}`
                }
            },
            "OOP Concepts": {
                "Class Definition": {
                    code: `public class Person {\n    private String name;\n    private int age;\n    \n    // Constructor\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void introduce() {\n        System.out.println("Hi, I'm " + name);\n    }\n}`
                }
            },
            "Common Built-in Methods": {
                "String Methods": {
                    code: `String text = "Hello World";\n\ntext.length();              // 11\ntext.toLowerCase();         // "hello world"\ntext.toUpperCase();         // "HELLO WORLD"\ntext.substring(0, 5);       // "Hello"\ntext.replace("World", "Java"); // "Hello Java"`
                }
            },
            "File Handling": {
                "Reading Files": {
                    code: `import java.io.*;\nimport java.util.Scanner;\n\ntry (Scanner scanner = new Scanner(new File("file.txt"))) {\n    while (scanner.hasNextLine()) {\n        String line = scanner.nextLine();\n        System.out.println(line);\n    }\n} catch (FileNotFoundException e) {\n    e.printStackTrace();\n}`
                }
            }
        }
    },
    
    cpp: {
        name: "C++",
        description: "A powerful, low-level programming language that extends C with object-oriented features. Used for system programming, game development, and performance-critical applications.",
        sections: {
            "Basic Syntax": {
                "Hello World": {
                    code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
                    description: "Basic C++ program structure"
                },
                "Variables": {
                    code: `#include <string>\n\n// Basic types\nint age = 25;\ndouble height = 5.9;\nbool isStudent = true;\nchar grade = 'A';\nstd::string name = "John";\n\n// Arrays\nint numbers[5] = {1, 2, 3, 4, 5};`
                }
            },
            "Control Structures": {
                "If-Else": {
                    code: `if (age >= 18) {\n    std::cout << "Adult" << std::endl;\n} else if (age >= 13) {\n    std::cout << "Teenager" << std::endl;\n} else {\n    std::cout << "Child" << std::endl;\n}`
                },
                "For Loops": {
                    code: `// Traditional for loop\nfor (int i = 0; i < 5; i++) {\n    std::cout << i << std::endl;\n}\n\n// Range-based for loop (C++11)\nint numbers[] = {1, 2, 3, 4, 5};\nfor (int num : numbers) {\n    std::cout << num << std::endl;\n}`
                }
            },
            "Functions": {
                "Function Declaration": {
                    code: `#include <iostream>\n\n// Function declaration\nint add(int a, int b);\n\nint main() {\n    int result = add(5, 3);\n    std::cout << result << std::endl;\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}`
                }
            },
            "OOP Concepts": {
                "Class Definition": {
                    code: `class Person {\nprivate:\n    std::string name;\n    int age;\n\npublic:\n    // Constructor\n    Person(std::string n, int a) : name(n), age(a) {}\n    \n    void introduce() {\n        std::cout << "Hi, I'm " << name << std::endl;\n    }\n};`
                }
            },
            "Memory Management": {
                "Pointers": {
                    code: `int value = 42;\nint* ptr = &value;      // Pointer to value\n\nstd::cout << *ptr << std::endl;  // Dereference pointer\n\n// Dynamic allocation\nint* dynamicPtr = new int(100);\ndelete dynamicPtr;      // Don't forget to delete!`
                }
            },
            "STL Containers": {
                "Vector": {
                    code: `#include <vector>\n\nstd::vector<int> numbers = {1, 2, 3, 4, 5};\nnumbers.push_back(6);       // Add element\nnumbers.pop_back();         // Remove last\nnumbers.size();             // Get size\n\n// Iterate\nfor (auto num : numbers) {\n    std::cout << num << " ";\n}`
                }
            }
        }
    },
    
    html: {
        name: "HTML",
        description: "HyperText Markup Language - the standard markup language for creating web pages. Defines the structure and content of web documents using elements and tags.",
        sections: {
            "Basic Structure": {
                "HTML Document": {
                    code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Page Title</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is a paragraph.</p>\n</body>\n</html>`,
                    description: "Basic HTML5 document structure"
                },
                "Comments": {
                    code: `<!-- This is a comment -->\n<!-- \n    Multi-line comment\n    can span multiple lines\n-->`
                }
            },
            "Text Elements": {
                "Headings": {
                    code: `<h1>Main Heading</h1>\n<h2>Section Heading</h2>\n<h3>Subsection Heading</h3>\n<h4>Sub-subsection Heading</h4>\n<h5>Minor Heading</h5>\n<h6>Smallest Heading</h6>`
                },
                "Paragraphs and Text": {
                    code: `<p>This is a paragraph.</p>\n<p>This is another paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>\n\n<br> <!-- Line break -->\n<hr> <!-- Horizontal rule -->`
                }
            },
            "Lists": {
                "Unordered List": {
                    code: `<ul>\n    <li>First item</li>\n    <li>Second item</li>\n    <li>Third item</li>\n</ul>`
                },
                "Ordered List": {
                    code: `<ol>\n    <li>First step</li>\n    <li>Second step</li>\n    <li>Third step</li>\n</ol>`
                }
            },
            "Links and Media": {
                "Links": {
                    code: `<!-- External link -->\n<a href="https://www.example.com">Visit Example</a>\n\n<!-- Internal link -->\n<a href="#section1">Go to Section 1</a>\n\n<!-- Email link -->\n<a href="mailto:someone@example.com">Send Email</a>`
                },
                "Images": {
                    code: `<!-- Basic image -->\n<img src="image.jpg" alt="Description of image">\n\n<!-- Image with attributes -->\n<img src="image.jpg" alt="Description" width="300" height="200">`
                }
            },
            "Forms": {
                "Basic Form": {
                    code: `<form action="/submit" method="POST">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name" required>\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n    \n    <button type="submit">Submit</button>\n</form>`
                },
                "Input Types": {
                    code: `<!-- Text inputs -->\n<input type="text" placeholder="Text input">\n<input type="password" placeholder="Password">\n<input type="email" placeholder="Email">\n<input type="number" min="1" max="100">\n<input type="date">`
                }
            },
            "Semantic Elements": {
                "HTML5 Semantic Tags": {
                    code: `<header>\n    <nav>\n        <ul>\n            <li><a href="#home">Home</a></li>\n            <li><a href="#about">About</a></li>\n        </ul>\n    </nav>\n</header>\n\n<main>\n    <article>\n        <h1>Article Title</h1>\n        <p>Content goes here...</p>\n    </article>\n</main>\n\n<footer>\n    <p>&copy; 2023 Your Website</p>\n</footer>`
                }
            }
        }
    },
    
    css: {
        name: "CSS",
        description: "Cascading Style Sheets - used to style and layout web pages. Controls the presentation, formatting, and layout of HTML elements.",
        sections: {
            "Basic Syntax": {
                "CSS Rule": {
                    code: `/* Basic CSS rule */\nselector {\n    property: value;\n    another-property: another-value;\n}\n\n/* Example */\nh1 {\n    color: blue;\n    font-size: 24px;\n    text-align: center;\n}`,
                    description: "Basic CSS syntax structure"
                },
                "Comments": {
                    code: `/* Single line comment */\n\n/*\n * Multi-line comment\n * can span multiple lines\n */`
                }
            },
            "Selectors": {
                "Basic Selectors": {
                    code: `/* Element selector */\np { color: black; }\n\n/* Class selector */\n.highlight { background-color: yellow; }\n\n/* ID selector */\n#header { font-size: 24px; }\n\n/* Universal selector */\n* { margin: 0; padding: 0; }`
                },
                "Pseudo-classes": {
                    code: `/* Link states */\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; }\na:active { color: orange; }\n\n/* Form states */\ninput:focus { border-color: blue; }`
                }
            },
            "Box Model": {
                "Box Properties": {
                    code: `.box {\n    /* Content */\n    width: 200px;\n    height: 100px;\n    \n    /* Padding (inside) */\n    padding: 20px;\n    \n    /* Border */\n    border: 2px solid black;\n    \n    /* Margin (outside) */\n    margin: 10px;\n}`
                }
            },
            "Layout": {
                "Display Property": {
                    code: `/* Block elements */\n.block {\n    display: block;\n    width: 100%;\n}\n\n/* Inline elements */\n.inline {\n    display: inline;\n}\n\n/* Flexbox */\n.flex-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}`
                },
                "Positioning": {
                    code: `/* Relative */\n.relative {\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n/* Absolute */\n.absolute {\n    position: absolute;\n    top: 50px;\n    right: 100px;\n}\n\n/* Fixed */\n.fixed {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n}`
                }
            },
            "Colors and Backgrounds": {
                "Color Values": {
                    code: `/* Different color formats */\n.colors {\n    /* Named colors */\n    color: red;\n    \n    /* Hexadecimal */\n    color: #ff0000;\n    color: #f00;               /* Shorthand */\n    \n    /* RGB */\n    color: rgb(255, 0, 0);\n    color: rgba(255, 0, 0, 0.5); /* With alpha */\n}`
                },
                "Background Properties": {
                    code: `/* Background properties */\n.background {\n    background-color: #f0f0f0;\n    background-image: url('image.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n\n/* Background shorthand */\n.bg-shorthand {\n    background: #f0f0f0 url('image.jpg') no-repeat center/cover;\n}`
                }
            },
            "Responsive Design": {
                "Media Queries": {
                    code: `/* Mobile first approach */\n.container {\n    width: 100%;\n    padding: 10px;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n    .container {\n        width: 750px;\n        margin: 0 auto;\n    }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n    .container {\n        width: 1000px;\n    }\n}`
                }
            }
        }
    },
    
    sql: {
        name: "SQL",
        description: "Structured Query Language - used for managing and manipulating relational databases. Essential for data retrieval, insertion, updating, and deletion.",
        sections: {
            "Basic Syntax": {
                "SELECT Statement": {
                    code: `-- Basic SELECT\nSELECT column1, column2 FROM table_name;\n\n-- SELECT all columns\nSELECT * FROM employees;\n\n-- SELECT with alias\nSELECT first_name AS fname, last_name AS lname FROM employees;`,
                    description: "Basic data retrieval"
                },
                "Comments": {
                    code: `-- Single line comment\n\n/*\n * Multi-line comment\n * can span multiple lines\n */`
                }
            },
            "Data Retrieval": {
                "WHERE Clause": {
                    code: `-- Basic WHERE\nSELECT * FROM employees WHERE age > 25;\n\n-- Multiple conditions\nSELECT * FROM employees \nWHERE age > 25 AND department = 'IT';\n\n-- LIKE operator\nSELECT * FROM employees \nWHERE first_name LIKE 'J%';  -- Starts with J`
                },
                "ORDER BY": {
                    code: `-- Sort ascending (default)\nSELECT * FROM employees ORDER BY last_name;\n\n-- Sort descending\nSELECT * FROM employees ORDER BY age DESC;\n\n-- Multiple columns\nSELECT * FROM employees \nORDER BY department ASC, age DESC;`
                }
            },
            "Aggregate Functions": {
                "Basic Aggregates": {
                    code: `-- Count records\nSELECT COUNT(*) FROM employees;\n\n-- Sum and Average\nSELECT SUM(salary) FROM employees;\nSELECT AVG(salary) FROM employees;\n\n-- Min and Max\nSELECT MIN(age), MAX(age) FROM employees;`
                },
                "GROUP BY": {
                    code: `-- Group by department\nSELECT department, COUNT(*) \nFROM employees \nGROUP BY department;\n\n-- HAVING clause (filter groups)\nSELECT department, COUNT(*) \nFROM employees \nGROUP BY department \nHAVING COUNT(*) > 5;`
                }
            },
            "Joins": {
                "INNER JOIN": {
                    code: `-- Inner join\nSELECT e.first_name, e.last_name, d.department_name\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id;`
                },
                "LEFT JOIN": {
                    code: `-- Left join (all records from left table)\nSELECT e.first_name, e.last_name, d.department_name\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id;`
                }
            },
            "Data Modification": {
                "INSERT": {
                    code: `-- Insert single record\nINSERT INTO employees (first_name, last_name, age, department)\nVALUES ('John', 'Doe', 30, 'IT');\n\n-- Insert multiple records\nINSERT INTO employees (first_name, last_name, age, department)\nVALUES \n    ('Jane', 'Smith', 25, 'HR'),\n    ('Bob', 'Johnson', 35, 'Finance');`
                },
                "UPDATE": {
                    code: `-- Update single record\nUPDATE employees \nSET salary = 75000 \nWHERE employee_id = 1;\n\n-- Update multiple columns\nUPDATE employees \nSET salary = 80000, department = 'Senior IT'\nWHERE employee_id = 1;`
                },
                "DELETE": {
                    code: `-- Delete specific records\nDELETE FROM employees \nWHERE employee_id = 1;\n\n-- Delete with condition\nDELETE FROM employees \nWHERE department = 'Temp';`
                }
            }
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cheatSheets;
}