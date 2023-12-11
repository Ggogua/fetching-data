let button = document.getElementById('button');
let prev = document.getElementById('prev');
let currentPage = 1;
let allPages;


function pageCounter(page) {
    fetch('https://reqres.in/api/unknown?page=' + page, {
    method: "GET",
})
    .then(function(info) {
        if (info.status !== 200) {
            throw info.status;
        }
        return info.json();
})
    .then(function(newData) {
        document.getElementById('ul').innerText = '';
        newData.data.forEach(helper => {
            let li = document.createElement('li');
            li.innerText = `${helper.name} ${helper.color}`;
            document.getElementById('ul').appendChild(li);
        });
        
        document.getElementById('div').appendChild(ul);
        allPages = newData.total_pages;
})
    .catch(function(error) {
        let theError = (error.status === 404) ? "Status Error" : "Sever Error";
        alert(theError);
}) 
}
    button.addEventListener('click', () => {
        if (currentPage === allPages) {
            return;
        }
        currentPage++;
        pageCounter(currentPage);
})

    prev.addEventListener('click', () => {
        if (currentPage === 1) {
            return;
        }

        currentPage--;
        pageCounter(currentPage);
    })



pageCounter(currentPage);