const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})


// publish button
document.getElementById('publish-btn').addEventListener('click', () => {
    let title = document.getElementsByClassName('title')[0].value;
    let article = document.getElementsByClassName('article')[0].value;


    let form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', './editor')

    let titleField = document.createElement('input');
    titleField.setAttribute('type', 'hidden');
    titleField.setAttribute('name', 'title');
    titleField.value = title;

    let articleField = document.createElement('input');
    articleField.setAttribute('type', 'hidden');
    articleField.setAttribute('name', 'article');
    articleField.value = article;

    form.appendChild(titleField);
    form.appendChild(articleField);

    document.body.appendChild(form)
    form.submit();

    console.log(titleField, articleField)
})