/* Основные стили */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Заголовок */
header {
    background-color: #4CAF50;
    color: white;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header h1 {
    text-align: center;
    margin: 0;
    font-size: 2.5em;
}

header nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 10px 0 0;
    padding: 0;
}

header nav ul li {
    margin: 0 10px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 5px 10px;
    transition: background-color 0.3s;
}

header nav ul li a:hover {
    background-color: #3e8e41;
    border-radius: 5px;
}

/* Разделы */
section {
    margin: 20px 0;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #4CAF50;
}

.type, .example {
    margin-bottom: 20px;
    padding: 10px;
    border-left: 5px solid #4CAF50;
    background-color: #f2f2f2;
    border-radius: 5px;
}

/* Тест */
form {
    margin-top: 20px;
}

.question {
    margin-bottom: 15px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3e8e41;
}

/* Темная тема */
body.dark-mode {
    background-color: #1e1e1e;
    color: #ccc;
}

body.dark-mode section {
    background-color: #2c2c2c;
}

body.dark-mode header {
    background-color: #333;
}

body.dark-mode header nav ul li a:hover {
    background-color: #555;
}

button.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #555;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button.theme-toggle:hover {
    background-color: #777;
}
