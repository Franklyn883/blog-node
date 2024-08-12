console.log("frontend js here!!!");

const deleteBlog = document.querySelector(".delete");
deleteBlog.addEventListener("click", (e) => {
    const endpoint = `/blog/${deleteBlog.dataset.doc}`;
    console.log("Blog delete endpoint:", endpoint);
    fetch(endpoint, {
        method: "DELETE",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           
            window.location.href = data.redirect;
        })

        .catch((err) => console.log(err));
});
