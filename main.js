<script>
    const backgroundToggle = document.querySelector(".background-toggle");
    const links = document.querySelectorAll(".link");

    backgroundToggle.addEventListener("click", () => {
        document.body.classList.toggle("active");
        links.forEach(link => link.classList.toggle("active"));
    });

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            links.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });
</script>
