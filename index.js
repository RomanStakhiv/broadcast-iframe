module.exports = (url = 'https://allatraunites.com/ru/embedbroadcast') => {
    return `<div class="embed-responsive embed-responsive-16by9">
                <iframe src="${url}" frameborder="0" class="embed-responsive-item"></iframe>
            </div>`
}
