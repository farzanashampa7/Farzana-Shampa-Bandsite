
let commentNew;

function getFormattedDay(time) {
    let newDate = new Date(time);
    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    let yyyy = newDate.getFullYear();
    return newDate = `${mm}/ ${dd}/ ${yyyy}`;

}

function newObject(arr) {
    for (let i = 0; i < arr.length; i++) {
        let newComment = {
            name: arr[i].name,
            comment: arr[i].comment,
            timestamp: getFormattedDay(arr[i].timestamp),
            id: arr[i].id,
            likes: arr[i].likes
        }
        commentNew.push(newComment);
    }

    return commentNew;
}

function getComments() {
    axios
        .get('https://project-1-api.herokuapp.com/comments?api_key= fd646bde-a6a5-4e13-9788-cd0d1f4cc49b')
        .then(result => {
            commentNew = [];
            newObject(result.data);
            commentLists(commentNew);
        })
        .catch(error => {
            console.log(error);
        })
}

getComments();

function commentLists(arrayList) {

    let comment = document.querySelector('.comments__js__list');
    comment.textContent = '';

    let reversedComments = arrayList.reverse();
    reversedComments.forEach(item => {

        let commentList = document.createElement('div');

        commentList.classList.add('article');
        comment.appendChild(commentList);

        let commentItem = document.createElement('article');
        commentItem.classList.add('article__item');
        commentList.appendChild(commentItem);

        let commentImage = document.createElement('img');
        commentImage.classList.add('article__image');
        commentImage.setAttribute('src', './assets/images/pp.jpg');
        commentItem.appendChild(commentImage);

        let commentDiv = document.createElement('div');
        commentDiv.classList.add('article__main');
        commentItem.appendChild(commentDiv);

        let commentInfo = document.createElement('div');
        commentInfo.classList.add('article__info');
        commentDiv.appendChild(commentInfo);

        let commentAuthor = document.createElement('span');
        commentAuthor.classList.add('article__author');
        commentAuthor.innerText = item.name;
        commentInfo.appendChild(commentAuthor);

        let commentDate = document.createElement('span');
        commentDate.classList.add('article__date');
        commentDate.innerText = item.timestamp;
        commentInfo.appendChild(commentDate);

        let commentText = document.createElement('p');
        commentText.classList.add('article__text');
        commentText.innerText = item.comment;
        commentDiv.appendChild(commentText);

        let commentReact = document.createElement('div');
        commentReact.classList.add('article__react');
        commentDiv.appendChild(commentReact);

        let commentLikeIcon = document.createElement('img');
        commentLikeIcon.classList.add('article__icon');
        commentLikeIcon.setAttribute('src', './assets/icons/SVG/favorite_border-black-18dp.svg');
        commentReact.appendChild(commentLikeIcon);

        let commentCount = document.createElement('span');
        commentCount.classList.add('article__count');
        commentCount.innerText = `${item.likes} likes`;
        commentReact.appendChild(commentCount);

        let commentDelete = document.createElement('img');
        commentDelete.classList.add('article__delete');
        commentDelete.setAttribute('src', './assets/icons/SVG/delete-black-18dp.svg');
        commentReact.appendChild(commentDelete);

    })

}

let form = document.querySelector('.comments__form');

form.addEventListener('submit', event => {
    event.preventDefault();
    axios
        .post('https://project-1-api.herokuapp.com/comments?api_key= fd646bde-a6a5-4e13-9788-cd0d1f4cc49b', {
            "name": event.target.userName.value,
            "comment": event.target.userComment.value

        })
        .then(result => {
            console.log(result.data);
            getComments();
        })
        .catch(error => {
            console.log(error);
        })

    form.reset();
});

// let hitLike = document.querySelector('article__icon');

// hitLike.addEventListener('click', event => {
//     event.preventDefault();
//     hitLike.style.backgroundColor = 'red';
// })







