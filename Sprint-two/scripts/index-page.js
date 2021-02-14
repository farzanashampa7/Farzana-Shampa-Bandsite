let comments = [
    {
        image: '../assets/images/Mohan-muruge.jpg',
        name: 'Micheal Lyons',
        date: '12/15/2018',
        comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'

    },

    {
        image: '../assets/images/Mohan-muruge.jpg',
        name: 'Gary Wong',
        date: '12 / 12 / 2028',
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'

    },

    {
        image: '../assets/images/Mohan-muruge.jpg',
        name: 'Thoedore Duncan',
        date: '11 / 15 / 2018',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }

]

function commentLists(arrayList) {

    let comment = document.querySelector('.comments__js__list');
    comment.textContent = '';

    for (let i = 0; i < arrayList.length; i++) {

        let commentList = document.createElement('div');

        commentList.classList.add('article');
        comment.appendChild(commentList);

        let commentItem = document.createElement('article');
        commentItem.classList.add('article__item');
        commentList.appendChild(commentItem);

        let commentImage = document.createElement('img');
        commentImage.classList.add('article__image');
        commentImage.setAttribute('src', arrayList[i].image);
        commentItem.appendChild(commentImage);

        let commentDiv = document.createElement('div');
        commentDiv.classList.add('article__main');
        commentItem.appendChild(commentDiv);

        let commentInfo = document.createElement('div');
        commentInfo.classList.add('article__info');
        commentDiv.appendChild(commentInfo);

        let commentAuthor = document.createElement('span');
        commentAuthor.classList.add('article__author');
        commentAuthor.innerText = arrayList[i].name;
        commentInfo.appendChild(commentAuthor);

        let commentDate = document.createElement('span');
        commentDate.classList.add('article__date');
        commentDate.innerText = arrayList[i].date;
        commentInfo.appendChild(commentDate);

        let commentText = document.createElement('p');
        commentText.classList.add('article__text');
        commentText.innerText = arrayList[i].comment;

        commentDiv.appendChild(commentText);
    }
}

commentLists(comments);

let form = document.querySelector('.comments__form');

form.addEventListener('submit', event => {
    event.preventDefault();

    let newName = event.target.userName.value;
    let newDate = new Date();
    let newImage = '';
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0');
    let yyyy = newDate.getFullYear();
    newDate = `${mm}/ ${dd}/ ${yyyy}`;
    let newText = event.target.userComment.value;

    let newData = {
        image: newImage,
        name: newName,
        date: newDate,
        comment: newText
    }
    comments.unshift(newData);
    console.log(comments);

    commentLists(comments);
    form.reset();

});



