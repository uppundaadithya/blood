html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}

/* Background and Animation */
body {
    font-family: 'Roboto', sans-serif; /* Materialize's default font */
    background: linear-gradient(to right, rgb(35, 15, 15), rgb(137, 11, 11));
    background-size: 150% 100%;
    animation: move 5s linear infinite;
    color: #fff;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transition: ease-in 0.7s;
}

/* Background Animation */
@keyframes move {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 100%; }
}
